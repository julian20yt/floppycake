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
    
    static async handleSubscriptionsRequest(req, res, accessToken) {


      const apiKey = 'AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8';
      const apiUrl = 'https://www.googleapis.com/youtubei/v1/browse';

      const postData = {
          context: {
              client: {
                  hl: "en",
                  gl: "US",
                  remoteHost: "67.144.118.91",
                  deviceMake: "Samsung",
                  deviceModel: "SmartTV",
                  visitorData: "CgsxVi1janRGNC02TSiRzqu9BjIKCgJVUxIEGgAgMQ%3D%3D",
                  userAgent: "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1,gzip(gfe)",
                  clientName: "TVHTML5",
                  clientVersion: "7.20250209.19.00",
                  osName: "Tizen",
                  osVersion: "5.0",
                  originalUrl: "https://www.youtube.com/tv?is_account_switch=1&hrld=1&fltor=1",
                  theme: "CLASSIC",
                  screenPixelDensity: 1,
                  platform: "TV",
                  clientFormFactor: "UNKNOWN_FORM_FACTOR",
                  webpSupport: false,
                  configInfo: {
                      appInstallData: "CJHOq70GELzRzhwQz7nOHBCS2c4cEL2KsAUQ9quwBRCazrEFEIS9zhwQrsHOHBC9mbAFEImwzhwQj8OxBRCKobEFEI7QsQUQiOOvBRCB1rEFEIeszhwQ6-j-EhCN1LEFEMTYsQUQntCwBRD-5f8SEKC_zhwQoqPOHBC4mc4cEJT8rwUQ3rzOHBDEu84cEJLLsQUQwsnOHBDtubEFEJS7zhwQjtTOHBDG2LEFEL22rgUQ-rjOHBDT4a8FEIWnsQUQgcOxBRDM364FELK-zhwQmY2xBRC8ss4cEN6tsQUQr8LOHBDRlM4cEMjYsQUQy5rOHBC36v4SEKLUsQUQ59DOHBDlubEFEOeazhwQg8OxBRCM0LEFEIfDsQUQmZixBRCIh7AFELTj_xIQ6sOvBRCEha8FEIHNzhwQkrjOHBDAt84cEObPsQUQ-KuxBRDJ968FEI7XsQUQ2dXOHBDJ5rAFEMHa_xIQwrfOHBCZ0v8SEIvUsQUQ48nOHBDftM4cEJT-sAUQ_LLOHBDK2LEFENCNsAUQwc2xBRCH5v8SKiBDQU1TRWhVSi1acS1EUHJpRVlISjJ3dm1vUWdkQnc9PQ%3D%3D"
                  },
                  screenDensityFloat: 2,
                  tvAppInfo: {
                      appQuality: "TV_APP_QUALITY_LIMITED_ANIMATION",
                      voiceCapability: {
                          hasSoftMicSupport: false,
                          hasHardMicSupport: false
                      },
                      useStartPlaybackPreviewCommand: false,
                      supportsNativeScrolling: false
                  },
                  userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
                  timeZone: "America/New_York",
                  browserName: "Safari",
                  browserVersion: "5.0",
                  acceptHeader: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                  deviceExperimentId: "ChxOelEyT0RVd056WTFOREV4TURJMk9EZzJNQT09EJHOq70GGKTwlb0G",
                  rolloutToken: "CJfLqI7Ivb_y1QEQnNWkuauwiwMYqPWjt7q4iwM%3D",
                  screenHeightPoints: 1050,
                  screenWidthPoints: 1920,
                  utcOffsetMinutes: -300
              },
              user: {
                  lockedSafetyMode: false
              },
              request: {
                  useSsl: true
              },
              clickTracking: {
                  clickTrackingParams: "IhMIqpfAovi6iwMVZgQVBR3TQjXr"
              }
          }
      };
        
      postData.browseId = "FEsubscriptions";

          
      const headers = {
        'Content-Type': 'application/json',
      };

      if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`;
      }
  
      try {
          const response = await axios.post(apiUrl, postData, {
              headers,
              params: { key: apiKey }
          });
  
          console.log("Raw response data:", JSON.stringify(response.data, null, 2));
  
          const logsDir = path.join(__dirname, 'logs');
          if (!fs.existsSync(logsDir)) {
              fs.mkdirSync(logsDir); 
          }
  
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
          const logFilePath = path.join(logsDir, `subscriptions-response-${timestamp}.json`);
          fs.writeFileSync(logFilePath, JSON.stringify(response.data, null, 2)); 
  
          let intermediateForm;
          try {
              intermediateForm = await this.convertToIntermediateFormBrowseSubs(response.data);
          } catch (convertError) {
              console.error("Error converting API response to intermediate form:", convertError);
              throw new Error('Failed to process API response.');
          }
  
          const logFilePathIni = path.join(logsDir, `subscriptions-intermediate-response-${timestamp}.json`);
          fs.writeFileSync(logFilePathIni, JSON.stringify(intermediateForm, null, 2)); 
  
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

              const ownerData = secondSection.find(item => item.videoOwnerRenderer);
              if (!ownerData || !ownerData.videoOwnerRenderer) {
                  console.error("Failed to find video owner data.");
                  return null;
              }

              const pfpUrl = ownerData.videoOwnerRenderer.thumbnail.thumbnails.pop().url; 

              console.log(`Video ID: ${videoId}`);
              console.log(`Profile Picture URL: ${pfpUrl}`);

              return pfpUrl;
          } catch (error) {
              console.error("Error fetching profile picture:", error);
          }
      }

      static async convertToIntermediateFormBrowseSubs(responseData) {
        const videos = [];
    
        console.log("Response Data:", JSON.stringify(responseData));
    
        const items = responseData?.contents?.tvBrowseRenderer?.content?.tvSecondaryNavRenderer?.sections?.[0]
            ?.tvSecondaryNavSectionRenderer?.tabs?.[0]?.tabRenderer?.content?.tvSurfaceContentRenderer?.content?.gridRenderer?.items;
    
        if (!Array.isArray(items)) {
            console.warn("No items found in gridRenderer.");
            return videos;
        }
    
        console.log("Extracted Items:", JSON.stringify(items));
    
        const videoPromises = items.map(async (item) => {
            const video = item?.tileRenderer;
    
            if (video) {
                console.log("Extracted Video:", JSON.stringify(video));
    
                const publishedText = video.metadata?.tileMetadataRenderer?.lines
                    ?.find(line => line.lineRenderer?.items
                        ?.some(item => item.lineItemRenderer?.text?.simpleText?.includes("ago")))
                    ?.lineRenderer?.items
                    ?.find(item => item.lineItemRenderer?.text?.simpleText?.includes("ago"))
                    ?.lineItemRenderer?.text?.simpleText || "Unknown Published Time";
    
                const formattedPublishedTime = FeedsApiVideos.convertRelativeDate(publishedText);
    
                const durationText = video.header?.tileHeaderRenderer?.thumbnailOverlays
                    ?.find(overlay => overlay.thumbnailOverlayTimeStatusRenderer)
                    ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText || "0";
                const formattedDurationText = FeedsApiVideos.convertTimeToSeconds(durationText);
    
                const authorText = video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.simpleText
                    || video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.runs?.[0]?.text
                    || "John Doe";
    
                const videoId = video.onSelectCommand?.watchEndpoint?.videoId || "Unknown Video ID";
    
                const pfpUrlPromise = this.getProfilePicture(videoId).catch(error => {
                    console.error(`Failed to fetch profile picture for Video ID: ${videoId}`, error);
                    return "https://yt3.ggpht.com/ytc/AIdro_mrBFeElQkp-3jLyFGRPGjkMkgY2ZC8D7IoaQGp0-U=s48-c-k-c0x00ffffff-no-rj"; // Default profile picture
                });
    
                const [pfpUrl, formattedPublished, seconds] = await Promise.all([
                    pfpUrlPromise,
                    formattedPublishedTime,
                    formattedDurationText
                ]);

                console.log(pfpUrl);
    
                return {
                    id: videoId,
                    author: authorText,
                    title: video.metadata?.tileMetadataRenderer?.title?.simpleText || "Unknown Title",
                    etag: video.etag || "null",
                    published: formattedPublished || "2013-05-10T00:00:01.000Z",
                    updated: video.updatedTimeText?.simpleText || "Unknown Updated Time",
                    category: video.category || "Unknown Category",
                    categoryLabel: video.categoryLabel || "Unknown Category Label",
                    seconds: seconds,
                    pfp: pfpUrl
                };
            }
    
            return null;
        });
    
        const resolvedVideos = await Promise.all(videoPromises);
        return resolvedVideos.filter(video => video !== null); 
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
                    "href": "http://gdata.youtube.com/feeds/api/users/${pfpURL}"
                  },
                  {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/ufsrgE0BYf0?v=2"
                  }
                ],
                "author": [
                  {
                    "name": {
                      "$t": "${author}"
                    },
                    "uri": {
                      "$t": "http://gdata.youtube.com/feeds/api/users/WarnerBrosPictures"
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
                      "$t": "warnerbrospictures",
                      "role": "uploader",
                      "scheme": "urn:youtube",
                      "yt$display": "${author}",
                      "yt$type": "partner"
                    }
                  ],
                  "media$description": {
                    "$t": "",
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
                      "url": "https://i.ytimg.com/sb/lED5XdHdNMc/storyboard3_L0/default.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgji6b-8Bg==&sigh=rs$AOn4CLDT3Ekl3CvXX1gVvESsl9fLTXeLiA",
                      "height": 90,
                      "width": 120,
                      "time": "00:00:22.750",
                      "yt$name": "start"
                    },
                    {
                      "url": "https://i.ytimg.com/sb/lED5XdHdNMc/storyboard3_L0/default.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgji6b-8Bg==&sigh=rs$AOn4CLDT3Ekl3CvXX1gVvESsl9fLTXeLiA",
                      "height": 90,
                      "width": 120,
                      "time": "00:00:45.500",
                      "yt$name": "middle"
                    },
                    {
                      "url": "https://i.ytimg.com/sb/lED5XdHdNMc/storyboard3_L0/default.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgji6b-8Bg==&sigh=rs$AOn4CLDT3Ekl3CvXX1gVvESsl9fLTXeLiA",
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

    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    static async getVideos(req, res) {

        const accessToken = req.query.access_token;

        if (!accessToken) {
            return res.status(418).json({ error: "Missing access_token in request." });
        }
        
        let videoData;
 

        videoData = await FeedsApiVideos.handleSubscriptionsRequest(req, res, accessToken);

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
            res.send(jsonpResponse);
        } else {
            res.status(418).send('418 I\'m a teapot: Callback is required for JSONP.');
        }
    }
}

router.get('/feeds/api/users/default/newsubscriptionvideos', FeedsApiVideos.getVideos);

module.exports = router;
