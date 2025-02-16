const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const router = express.Router();

class FeedsApiVideos {

    static async convertViewsToNumber(viewsString) {
        const match = viewsString.match(/^(\d+(\.\d+)?)(k|m|b)$/i);

        if (match) {
            const value = parseFloat(match[1]); 
            const unit = match[3].toLowerCase(); 
            
            let multiplier = 1;
            
            switch (unit) {
                case 'k':
                    multiplier = 1000; 
                    break;
                case 'm':
                    multiplier = 1000000;
                    break;
                case 'b':
                    multiplier = 1000000000; 
                    break;
                default:
                    return viewsString;
            }

            const result = value * multiplier;
            return result.toLocaleString(); 
        }

        return viewsString; 
    }


    static async convertTimeToSeconds(timeString) {
        const timeParts = timeString.split(':');
        

        if (timeParts.length !== 2) {
            return "0"; 
        }
        
        const minutes = parseInt(timeParts[0], 10);
        const seconds = parseInt(timeParts[1], 10);
        
        if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60) {
            return "0";  
        }
        
        const totalSeconds = minutes * 60 + seconds;
        
        return totalSeconds;
    }


    static async convertRelativeDate(relativeDate) {
        const now = new Date();

        const match = relativeDate.match(/(\d+)\s*(day|days|week|weeks|month|months|year|years)\s*ago/i);

        if (!match) return "2013-05-10T00:00:01.000Z";  

        const value = parseInt(match[1], 10);  
        const unit = match[2].toLowerCase();  

        switch (unit) {
            case "day":
            case "days":
                now.setDate(now.getDate() - value);
                break;
            case "week":
            case "weeks":
                now.setDate(now.getDate() - value * 7);
                break;
            case "month":
            case "months":
                now.setMonth(now.getMonth() - value);
                break;
            case "year":
            case "years":
                now.setFullYear(now.getFullYear() - value);
                break;
            default:
                return "Invalid unit";
        }

        return now.toISOString(); 
    }


    static async handleSearchRequest(req) {
        const query = req.query.q;

        const accessToken = req.query.access_token;

        if (!query) {
          console.error("Missing query in the request body.");
          throw new Error('Missing query in the request body.');
        }

        const apiKey = 'AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8';
        const apiUrl = 'https://www.googleapis.com/youtubei/v1/search';

        const postData = {
            query,
            context: {
                client: {
                    clientName: 'TVHTML5',
                    clientVersion: '7.20240701.16.00',
                    hl: 'en',
                    gl: 'US',
                }
            }
        };

        const headers = {
          'Content-Type': 'application/json',
        };
  
        if (accessToken) {
            headers['Authorization'] = `Bearer ${accessToken}`;
        }
        
        try {
            const response = await axios.post(apiUrl, postData, {
                headers: headers,
                params: { key: apiKey }
            });

            console.log("Raw response data:", JSON.stringify(response.data, null, 2));

            let intermediateForm;
            try {
                intermediateForm = await this.convertToIntermediateForm(response.data);
            } catch (convertError) {
                console.error("Error converting API response to intermediate form:", convertError);
                throw new Error('Failed to process API response.');
            }

            return intermediateForm;

        } catch (error) {
            console.error("Error fetching data from YouTube API:", error.message);
            return [];
        }
    }

    static async getProfilePicture(videoId) {
        try {
            const params = "qgMCZGG6AwoI5tiC0qjb9sRrugMKCNPa26_4mbGDJboDCgjYjIz7k73C8X26AwsIsuTT3PDW45rJAboDCgj_neig0riToyG6AwsI4Ifex42A0rbBAboDCwiBv8K9jND2_LkBugMLCJ6Oxdqf5r_QugG6AwsIiLTcqYLIvozQAboDCgi54P_p4OqE13m6AwsIkNCS1LL";
        
            if (!params || params.trim() === "") {
                throw new Error('"params" must be a non-empty string.');
            }
    
            const response = await axios.post(
                "https://www.youtube.com/youtubei/v1/next",
                {
                    context: {
                        client: {
                            clientName: 'TVHTML5',
                            clientVersion: '5.20150715',
                            screenWidthPoints: 600,
                            screenHeightPoints: 275,
                            screenPixelDensity: 2,
                            theme: 'CLASSIC',
                            webpSupport: false,
                            acceptRegion: 'US',
                            acceptLanguage: 'en-US',
                        },
                        user: {
                            enableSafetyMode: false,
                        },
                    },
                    params: params,
                    videoId: videoId,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Origin": "https://www.youtube.com/",
                        "Referer": "https://www.youtube.com/tv/",
                        "User-Agent": "Mozilla/5.0"
                    }
                }
            );
    
            const sections = response.data.contents?.singleColumnWatchNextResults?.results?.results?.contents;
            if (!sections || sections.length < 2) {
                console.error("Failed to find the correct itemSectionRenderer.");
                return null;
            }
    
            const secondSection = sections[1]?.itemSectionRenderer?.contents;
            if (!secondSection) {
                console.error("Second itemSectionRenderer is missing.");
                return null;
            }
    
            const firstSection = sections[0]?.itemSectionRenderer?.contents;
            if (!firstSection) {
                console.error("First itemSectionRenderer is missing.");
                return null;
            }
    
            const ownerData = secondSection.find(item => item.videoOwnerRenderer);
            if (!ownerData || !ownerData.videoOwnerRenderer) {
                console.error("Failed to find video owner data.");
                return null;
            }
    
            const pfpUrl = ownerData.videoOwnerRenderer.thumbnail?.thumbnails?.pop()?.url || "https://yt3.ggpht.com/default_pfp.png";
            const browseId = ownerData.videoOwnerRenderer.navigationEndpoint?.browseEndpoint?.browseId || "null";
    
            const descriptionText = firstSection?.[0]?.videoMetadataRenderer?.description?.runs?.[0]?.text || "";
            const description = descriptionText
                .replace(/\\n/g, "\n")
                .replace(/\n/g, " ")
                .replace(/['"]/g, '')
                .replace(/\(.*?\)/g, '')
                .trim() || "No description available.";
    
            console.log(`Video ID: ${videoId}`);
            console.log(`Profile Picture URL: ${pfpUrl}`);
            console.log(`Description: ${JSON.stringify(description, null, 2)}`);
    
            return { pfpUrl, description, browseId };
        } catch (error) {
            console.error("Error fetching profile picture:", error);
        }
    }
    
    static async convertToIntermediateForm(responseData) {
        const videos = [];
    
        const items = responseData?.contents?.sectionListRenderer?.contents?.[0]?.shelfRenderer?.content?.horizontalListRenderer?.items;
    
        if (!Array.isArray(items)) {
            console.error("No items found in responseData.");
            return [];
        }
    
        // Process all video items concurrently using Promise.all
        const videoPromises = items.map(async (item) => {
            const video = item.tileRenderer;
            if (!video) return null;
    
            try {
                const publishedText = video.metadata?.tileMetadataRenderer?.lines
                    ?.find(line => line.lineRenderer?.items?.some(item => item.lineItemRenderer?.text?.simpleText?.includes("ago")))
                    ?.lineRenderer?.items
                    ?.find(item => item.lineItemRenderer?.text?.simpleText?.includes("ago"))
                    ?.lineItemRenderer?.text?.simpleText || "Unknown Published Time";
    
                const formattedPublishedTime = await FeedsApiVideos.convertRelativeDate(publishedText);
    
                const durationText = video.header?.tileHeaderRenderer?.thumbnailOverlays
                    ?.find(overlay => overlay.thumbnailOverlayTimeStatusRenderer)
                    ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText || "0";
    
                const formatteddurationText = await FeedsApiVideos.convertTimeToSeconds(durationText);
    
                const authorText = video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.runs?.[0]?.text || "John Doe";
    
                const profileData = await this.getProfilePicture(video.onSelectCommand?.watchEndpoint?.videoId) || {};
                const browseId = profileData.browseId || "null";
    
                const videoData = {
                    id: video.onSelectCommand?.watchEndpoint?.videoId || "Unknown Video ID",
                    author: authorText,
                    title: video.metadata?.tileMetadataRenderer?.title?.simpleText || "Unknown Title",
                    etag: video.etag || "null",
                    published: formattedPublishedTime || "2013-05-10T00:00:01.000Z",
                    updated: video.updatedTimeText?.simpleText || "Unknown Updated Time",
                    category: video.category || "Unknown Category",
                    categoryLabel: video.categoryLabel || "Unknown Category Label",
                    seconds: formatteddurationText,
                    pfp: profileData.pfpUrl || "https://yt3.ggpht.com/default_pfp.png",
                    description: profileData.description || "No description available.",
                    browseId: browseId
                };
    
                return videoData;
            } catch (error) {
                console.error(`Error processing video ${video.onSelectCommand?.watchEndpoint?.videoId}:`, error);
                return null;
            }
        });
    
        // Wait for all video processing to finish
        const results = await Promise.all(videoPromises);
    
        // Filter out any null results (failed processing)
        return results.filter(video => video !== null);
    }
  
    
    static async generateVideoTemplate(parsedVideoData) {

        if (parsedVideoData == "null" || parsedVideoData == ' ' || parsedVideoData == null ) {
            return "";
        }

        const id = parsedVideoData.id || `ufsrgE0BYf0`;

        const title = parsedVideoData.title || "Gravity - Official Teaser Trailer [HD]";
        const escapedTitle = title.replace(/"/g, '\\"');

        const published = parsedVideoData.published || `2013-05-10T00:00:01.000Z`;
       
        const duration = parsedVideoData.seconds || `0`;

        const author = parsedVideoData.author || `John Doe`;
        
        const pfpURL = parsedVideoData.pfp || `null`;

        const description = parsedVideoData.description || `null`;

        const browseId = parsedVideoData.browseId || `null`;
        
    
        const videoTemplate = `
            {
                "gd$etag": "DkYEQX47eCp7I2A9WhBaFkg",
                "id": {
                  "$t": "tag:youtube.com,2008:video:${id}"
                },
                "published": {
                  "$t": "${published}"
                },
                "updated": {
                  "$t": "${published}"
                },
                "category": [
                  {
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                  },
                  {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Entertainment",
                    "label": "Entertainment"
                  }
                ],
                "title": {
                  "$t": "${escapedTitle}"
                },
                "content": {
                  "type": "application/x-shockwave-flash",
                  "src": "http://www.youtube.com/v/ufsrgE0BYf0?version=3&f=standard&app=youtube_gdata"
                },
                "link": [
                  {
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=ufsrgE0BYf0&feature=youtube_gdata"
                  },
                  {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.responses",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/ufsrgE0BYf0/responses?v=2"
                  },
                  {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/ufsrgE0BYf0/related?v=2"
                  },
                  {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=ufsrgE0BYf0"
                  },
                  {
                    "rel": "http://gdata.youtube.com/schemas/2007#uploader",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/users/${browseId}"
                  },
                  {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/${id}"
                  }
                ],
                "author": [
                  {
                    "name": {
                      "$t": "${author}"
                    },
                    "uri": {
                      "$t": "http://gdata.youtube.com/feeds/api/users/${browseId}"
                    },
                    "yt$userId": {
                      "$t": "${pfpURL}"
                    }
                  }
                ],
                "yt$accessControl": [
                  {
                    "action": "comment",
                    "permission": "allowed"
                  },
                  {
                    "action": "commentVote",
                    "permission": "allowed"
                  },
                  {
                    "action": "videoRespond",
                    "permission": "moderated"
                  },
                  {
                    "action": "rate",
                    "permission": "allowed"
                  },
                  {
                    "action": "embed",
                    "permission": "allowed"
                  },
                  {
                    "action": "list",
                    "permission": "allowed"
                  },
                  {
                    "action": "autoPlay",
                    "permission": "allowed"
                  },
                  {
                    "action": "syndicate",
                    "permission": "allowed"
                  }
                ],
                "gd$comments": {
                  "gd$feedLink": {
                    "rel": "http://gdata.youtube.com/schemas/2007#comments",
                    "href": "http://gdata.youtube.com/feeds/api/videos/ufsrgE0BYf0/comments?v=2",
                    "countHint": 8602
                  }
                },
                "yt$hd": {},
                "media$group": {
                  "media$category": [
                    {
                      "$t": "Entertainment",
                      "label": "Entertainment",
                      "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }
                  ],             
                  "media$credit": [
                    {
                      "$t": "${browseId}",
                      "role": "uploader",
                      "scheme": "urn:youtube",
                      "yt$display": "${author}",
                      "yt$type": "partner"
                    }
                  ],
                  "media$description": {
                    "$t": "${description}",
                    "type": "plain"
                  },
                  "media$keywords": {},
                  "media$license": {
                    "$t": "youtube",
                    "type": "text/html",
                    "href": "http://www.youtube.com/t/terms"
                  },
                  "media$player": {
                    "url": "http://www.youtube.com/watch?v=ufsrgE0BYf0&feature=youtube_gdata_player"
                  },
                  "media$thumbnail": [
                    {
                      "url": "http://i.ytimg.com/vi/${id}/default.jpg",
                      "height": 90,
                      "width": 120,
                      "time": "00:00:45.500",
                      "yt$name": "default"
                    },
                    {
                      "url": "http://i.ytimg.com/vi/${id}/mqdefault.jpg",
                      "height": 180,
                      "width": 320,
                      "yt$name": "mqdefault"
                    },
                    {
                      "url": "http://i.ytimg.com/vi/${id}/hqdefault.jpg",
                      "height": 360,
                      "width": 480,
                      "yt$name": "hqdefault"
                    },
                    {
                      "url": "http://i.ytimg.com/vi/${id}/sddefault.jpg",
                      "height": 480,
                      "width": 640,
                      "yt$name": "sddefault"
                    },
                    {
                      "url": "http://i.ytimg.com/vi/${id}/1.jpg",
                      "height": 90,
                      "width": 120,
                      "time": "00:00:22.750",
                      "yt$name": "start"
                    },
                    {
                      "url": "http://i.ytimg.com/vi/${id}/2.jpg",
                      "height": 90,
                      "width": 120,
                      "time": "00:00:45.500",
                      "yt$name": "middle"
                    },
                    {
                      "url": "http://i.ytimg.com/vi/${id}/3.jpg",
                      "height": 90,
                      "width": 120,
                      "time": "00:01:08.250",
                      "yt$name": "end"
                    }
                  ],
                  "media$title": {
                    "$t": "${escapedTitle}",
                    "type": "plain"
                  },
                  "yt$aspectRatio": {
                    "$t": "widescreen"
                  },
                  "yt$duration": {
                    "seconds": "${duration}"
                  },
                  "yt$uploaded": {
                    "$t": "${published}"
                  },
                  "yt$uploaderId": {
                    "$t": "${pfpURL}"
                  },
                  "yt$videoid": {
                    "$t": "${id}"
                  }
                },
                "gd$rating": {
                  "average": 4.6637263,
                  "max": 5,
                  "min": 1,
                  "numRaters": 17117,
                  "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {
                  "favoriteCount": "0",
                  "viewCount": "5470783"
                },
                "yt$rating": {
                  "numDislikes": "1439",
                  "numLikes": "15678"
                }
              }
            `
        return videoTemplate;  
    }
    
    static async generateVideoList(videosData) {
        const videoTemplates = []; 
        for (const videoData of videosData) {
            const videoTemplate = await this.generateVideoTemplate(videoData);
            videoTemplates.push(videoTemplate);
        }

        const formattedVideoTemplates = videoTemplates.join(',\n');
        return `"entry": [\n ${formattedVideoTemplates} \n]`;
    }
    
    static async getVideos(req, res) {

        const videoData = await FeedsApiVideos.handleSearchRequest(req);


        if (videoData.length === 0) {
            return res.status(404).send("No videos found.");
        }

        const numberOfResults = videoData.length;

        const formattedVideoList = await FeedsApiVideos.generateVideoList(videoData);

        const jsonData = `{
            "version": "2.1",
            "encoding": "UTF-8",
            "feed": {
                "xmlns": "http://www.w3.org/2005/Atom",
                "xmlns$media": "http://search.yahoo.com/mrss/",
                "xmlns$openSearch": "http://a9.com/-/spec/opensearch/1.1/",
                "xmlns$gd": "http://schemas.google.com/g/2005",
                "xmlns$gml": "http://www.opengis.net/gml",
                "xmlns$yt": "http://gdata.youtube.com/schemas/2007",
                "xmlns$georss": "http://www.georss.org/georss",
                "gd$etag": "DkcESHk5fyp7I2A9WhBaGEQ",
                "id": {
                    "$t": "tag:youtube.com,2008:standardfeed:global:on_the_web"
                },
                "updated": {
                    "$t": "2013-05-30T06:06:49.727Z"
                },
                "category": [
                    {
                        "scheme": "http://schemas.google.com/g/2005#kind",
                        "term": "http://gdata.youtube.com/schemas/2007#video"
                    }
                ],
                "title": {
                    "$t": ""
                },
                "logo": {
                    "$t": "http://www.youtube.com/img/pic_youtubelogo_123x63.gif"
                },
                "link": [
                    {
                        "rel": "alternate",
                        "type": "text/html",
                        "href": "http://www.youtube.com/channel/HCRMDEFf63gNI"
                    },
                    {
                        "rel": "http://schemas.google.com/g/2005#feed",
                        "type": "application/atom+xml",
                        "href": "http://gdata.youtube.com/feeds/api/standardfeeds/on_the_web?v=2"
                    },
                    {
                        "rel": "http://schemas.google.com/g/2005#batch",
                        "type": "application/atom+xml",
                        "href": "http://gdata.youtube.com/feeds/api/standardfeeds/on_the_web/batch?v=2"
                    },
                    {
                        "rel": "self",
                        "type": "application/atom+xml",
                        "href": "http://gdata.youtube.com/feeds/api/standardfeeds/on_the_web?alt=json&start-index=1&max-results=7&v=2"
                    },
                    {
                        "rel": "service",
                        "type": "application/atomsvc+xml",
                        "href": "http://gdata.youtube.com/feeds/api/standardfeeds/on_the_web?alt=atom-service&v=2"
                    },
                    {
                        "rel": "next",
                        "type": "application/atom+xml",
                        "href": "http://gdata.youtube.com/feeds/api/standardfeeds/on_the_web?alt=json&start-index=8&max-results=7&v=2"
                    }
                ],
                "author": [
                    {
                        "name": {
                            "$t": "YouTube"
                        },
                        "uri": {
                            "$t": "http://www.youtube.com/"
                        }
                    }
                ],
                "generator": {
                    "$t": "YouTube data API",
                    "version": "2.1",
                    "uri": "http://gdata.youtube.com"
                },
                "openSearch$totalResults": {
                    "$t": ${numberOfResults}
                },
                "openSearch$startIndex": {
                    "$t": 1
                },
                "openSearch$itemsPerPage": {
                    "$t": 7
                },
                
                ${formattedVideoList} 
            
            }
        }`;
    
        const callback = req.query.callback;
    
        if (callback) {
            const jsonpResponse = `${callback}(${jsonData})`;
            return res.send(jsonpResponse);
        }
    
        return res.status(418).send("418 I'm a teapot: Callback is required for JSONP.");
    }
    
    
}


router.get('/feeds/api/videos', FeedsApiVideos.getVideos);

module.exports = router;
