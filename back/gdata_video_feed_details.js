const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const router = express.Router();

async function fetchNextData(videoId) {
    const apiKey = 'AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8';
    const apiUrl = `https://www.googleapis.com/youtubei/v1/next?key=${apiKey}`;

    const params = "qgMCZGG6AwoI5tiC0qjb9sRrugMKCNPa26_4mbGDJboDCgjYjIz7k73C8X26AwsIsuTT3PDW45rJAboDCgj_neig0riToyG6AwsI4Ifex42A0rbBAboDCwiBv8K9jND2_LkBugMLCJ6Oxdqf5r_QugG6AwsIiLTcqYLIvozQAboDCgi54P_p4OqE13m6AwsIkNCS1LL";

    if (!params || params.trim() === "") {
        throw new Error('"params" must be a non-empty string.');
    }

    const postData = {
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
    };

    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await axios.post(apiUrl, postData, { headers });

        return response.data;
    } catch (error) {
        console.error('Error fetching next data:', error.message);

        if (error.response && error.response.data) {
            console.error('Error Response Data:', JSON.stringify(error.response.data, null, 2));
        }

        throw new Error('Failed to fetch data from YouTube /next API.');
    }
}

function convertRelativeDate(relativeDate) {
    const now = new Date();
    const match = relativeDate.match(/(\d+)([a-z]+)/i);

    if (!match) return "Invalid date";

    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
        case "d": case "day": case "days":
            now.setDate(now.getDate() - value);
            break;
        case "w": case "week": case "weeks":
            now.setDate(now.getDate() - value * 7);
            break;
        case "mo": case "month": case "months":
            now.setMonth(now.getMonth() - value);
            break;
        case "y": case "year": case "years":
            now.setFullYear(now.getFullYear() - value);
            break;
        default:
            return "Invalid unit";
    }

    return now.toISOString(); 
}

class FeedsApiVideos {
    static async getVideos(req, res) {

        const logsDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir);
        }
        
        const videoId = req.params.videoId;

        if (!videoId) {
            return res.status(400).send('Video ID is required.');
        }
        
        const timestamp = Date.now();
        const logFile = path.join(logsDir, `next_response_${timestamp}.json`);

        const nextData = await fetchNextData(videoId);

        let video = null;
        let viewCount = "";
        let avatarUrl = "";
        let userName = "";
        let title = "";
        let date = "";
        let browseId = "";

        if (nextData &&
            nextData.contents &&
            nextData.contents.singleColumnWatchNextResults &&
            nextData.contents.singleColumnWatchNextResults.results &&
            nextData.contents.singleColumnWatchNextResults.results.results &&
            nextData.contents.singleColumnWatchNextResults.results.results.contents &&
            nextData.contents.singleColumnWatchNextResults.results.results.contents[0] &&
            nextData.contents.singleColumnWatchNextResults.results.results.contents[0].itemSectionRenderer &&
            nextData.contents.singleColumnWatchNextResults.results.results.contents[0].itemSectionRenderer.contents &&
            nextData.contents.singleColumnWatchNextResults.results.results.contents[0].itemSectionRenderer.contents[0] &&
            nextData.contents.singleColumnWatchNextResults.results.results.contents[0].itemSectionRenderer.contents[0].videoMetadataRenderer) {
        
            video = nextData.contents.singleColumnWatchNextResults.results.results.contents[0].itemSectionRenderer.contents[0].videoMetadataRenderer;
           
            avatarUrl = nextData.contents.singleColumnWatchNextResults.results.results.contents[1].itemSectionRenderer.contents[0].videoOwnerRenderer.thumbnail.thumbnails[0].url;
           
            browseId = nextData.contents.singleColumnWatchNextResults.results.results.contents[1].itemSectionRenderer.contents[0].videoOwnerRenderer.navigationEndpoint.browseEndpoint.browseId;

            userName = nextData.contents.singleColumnWatchNextResults.results.results.contents[1].itemSectionRenderer.contents[0].videoOwnerRenderer.title.runs[0].text;

            title = video.title && video.title.runs && video.title.runs[0] ? video.title.runs[0].text : 'Unknown Title';
            
            date = video.dateText && video.dateText.runs && video.dateText.runs[0] ? video.dateText.runs[0].text : 'Unknown Date';
            
            date = convertRelativeDate(date);

            viewCount = video.viewCountText && video.viewCountText.runs && video.viewCountText.runs[0] ? video.viewCountText.runs[0].text : '0';

            viewCount = viewCount.replace(/\D/g, '');
        
            console.log('Title:', title);
            console.log('Avatar URL:', avatarUrl);
            console.log('User Name:', userName);
            console.log('View Count:', viewCount);
            console.log('Video ID:', videoId);
        
        } else {
            console.error('The required video data is not available.');
        }
        

        fs.writeFileSync(logFile, JSON.stringify(nextData, null, 2));

        const jsonData = `{
        "version": "1.0",
        "encoding": "UTF-8",
        "entry": {
            "gd$etag": "DkYEQX47eCp7I2A9WhBaFkg",
            "id": {
            "$t": "tag:youtube.com,2008:video:ufsrgE0BYf0"
            },
            "published": {
            "$t": "${date}"
            },
            "updated": {
            "$t": "${date}"
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
            "$t": "${title}"
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
                "href": "http://gdata.youtube.com/feeds/api/users/jmJDM5pRKbUlVIzDYYWb6g?v=2"
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
                "$t": "${userName}"
                },
                "uri": {
                "$t": "http://gdata.youtube.com/feeds/api/users/${userName}"
                },
                "yt$userId": {
                "$t": "${avatarUrl}"
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
                "yt$display": "${userName}",
                "yt$type": "partner"
                }
            ],
            "media$description": {
                "$t": "d",
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
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/default.jpg",
                "height": 90,
                "width": 120,
                "time": "00:00:45.500",
                "yt$name": "default"
                },
                {
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/mqdefault.jpg",
                "height": 180,
                "width": 320,
                "yt$name": "mqdefault"
                },
                {
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/hqdefault.jpg",
                "height": 360,
                "width": 480,
                "yt$name": "hqdefault"
                },
                {
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/sddefault.jpg",
                "height": 480,
                "width": 640,
                "yt$name": "sddefault"
                },
                {
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/1.jpg",
                "height": 90,
                "width": 120,
                "time": "00:00:22.750",
                "yt$name": "start"
                },
                {
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/2.jpg",
                "height": 90,
                "width": 120,
                "time": "00:00:45.500",
                "yt$name": "middle"
                },
                {
                "url": "http://i.ytimg.com/vi/ufsrgE0BYf0/3.jpg",
                "height": 90,
                "width": 120,
                "time": "00:01:08.250",
                "yt$name": "end"
                }
            ],
            "media$title": {
                "$t": "Gravity - Official Teaser Trailer [HD]",
                "type": "plain"
            },
            "yt$aspectRatio": {
                "$t": "widescreen"
            },
            "yt$duration": {
                "seconds": "91"
            },
            "yt$uploaded": {
                "$t": "${date}"
            },
            "yt$uploaderId": {
                "$t": "${avatarUrl}"
            },
            "yt$videoid": {
                "$t": "${videoId || "null"}"
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
            "viewCount": "${viewCount || "null"}"
            },
            "yt$rating": {
            "numDislikes": "1439",
            "numLikes": "15678"
            }
        }
        }`;

        console.log('Avatar URL:', avatarUrl);

        const callback = req.query.callback;

        if (callback) {
            const jsonpResponse = `${callback}(${jsonData})`;
            res.send(jsonpResponse);
        } else {
            res.status(418).send('418 I\'m a teapot: Callback is required for JSONP.');
        }
    }
}

router.get('/feeds/api/videos/:videoId', FeedsApiVideos.getVideos);

module.exports = router;
