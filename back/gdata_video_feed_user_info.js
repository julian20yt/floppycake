const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const router = express.Router();



class FeedsApiVideos {

    static async getYouTubeBrowseData(browseId) {
        try {
            
            const apiKey = 'AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8';
            const apiUrl = `https://www.googleapis.com/youtubei/v1/browse?key=${key}`;    

            const postData = {
                context: {
                    client: {
                        clientName: 'TVHTML5',
                        clientVersion: '7.20250205.16.00',
                        hl: 'en',
                        gl: 'US',
                    }
                },
                browseId: browseId 
            };
    
            const headers = {
                'Content-Type': 'application/json',
            };
    
            const response = await axios.post(apiUrl, postData, { headers });
    
            const browseData = response.data;

            if (browseData.contents) {

                const channelData = browseData.contents?.singleColumnBrowseResultsRenderer?.primaryContents?.sectionListRenderer?.contents;
                if (channelData && channelData.length > 0) {
       
                    const channelInfo = {
                        browseId: browseId,
                        title: channelData[0]?.channelRenderer?.title?.simpleText || "Unknown Channel",
                        description: channelData[0]?.channelRenderer?.description?.simpleText || "No Description Available",
                        thumbnail: channelData[0]?.channelRenderer?.thumbnail?.thumbnails[0]?.url || "Default Thumbnail URL"
                    };
    
                    return channelInfo;
                }
            }
    
            return null;
    
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Unauthorized: Invalid or expired access token.');
            }
            throw new Error(`Error fetching YouTube browse data: ${error.message}`);
        }
    }
    

    static async getVideos(req, res) {

        const logsDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir);
        }
        
        var username = req.params.username;

        if (!username) {
            return res.status(418).json({ error: "Missing username in request." });
        }
        
        if (!username.startsWith("UC")) {
            username = "UC" + username;
        }
        
        const timestamp = Date.now();
        const logFile = path.join(logsDir, `info_response_${timestamp}.json`);

        const userData = await FeedsApiVideos.getYouTubeChannelData(accessToken);

        const usernameReal = userData.length > 0 ? userData[0].username : null;
        const thumbnail = userData.length > 0 ? userData[0].thumbnail : null;
        const title = userData.length > 0 ? userData[0].title : null;  // Extract title
        
        console.log("Username:", username);
        console.log("Thumbnail:", thumbnail);
        console.log("Title:", title);  // Log the title        

        console.log("Extracted Channels:", userData);

        fs.writeFileSync(logFile, JSON.stringify(userData, null, 2));

        const jsonData = `{
        "version": "1.0",
        "encoding": "UTF-8",
        "entry": {
            "xmlns": "http://www.w3.org/2005/Atom",
            "xmlns$media": "http://search.yahoo.com/mrss/",
            "xmlns$gd": "http://schemas.google.com/g/2005",
            "xmlns$yt": "http://gdata.youtube.com/schemas/2007",
            "gd$etag": "DEYFQX47eCp7I2A9WhFTFUw",
            "id": {
            "$t": "tag:youtube.com,2008:user:TlUMB31ZAUK3ar4_HvGD-g"
            },
            "published": {
            "$t": "2013-01-04T14:18:24.000Z"
            },
            "updated": {
            "$t": "2013-06-06T10:55:10.000Z"
            },
            "category": [
            {
                "scheme": "http://schemas.google.com/g/2005#kind",
                "term": "http://gdata.youtube.com/schemas/2007#userProfile"
            }
            ],
            "title": {
            "$t": "${username}"
            },
            "summary": {
            "$t": "Summary"
            },
            "link": [
            {
                "rel": "alternate",
                "type": "text/html",
                "href": "http://www.youtube.com/channel${username}"
            },
            {
                "rel": "self",
                "type": "application/atom+xml",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}"
            }
            ],
            "author": [
            {
                "name": {
                "$t": "${usernameReal}"
                },
                "uri": {
                "$t": "http://gdata.youtube.com/feeds/api/users/akramouarour"
                },
                "yt$userId": {
                "$t": "${username}"
                }
            }
            ],
            "yt$channelId": {
            "$t": "${username}"
            },
            "gd$feedLink": [
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.subscriptions",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/subscriptions?v=2",
                "countHint": 49
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.liveevent",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/live/events?v=2",
                "countHint": 0
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.favorites",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/favorites?v=2",
                "countHint": 0
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.contacts",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/contacts?v=2",
                "countHint": 0
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.inbox",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/inbox?v=2"
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.playlists",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/playlists?v=2"
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.uploads",
                "href": "http://gdata.youtube.com/feeds/api/users/${username}/uploads?v=2",
                "countHint": 29
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.newsubscriptionvideos",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/newsubscriptionvideos?v=2"
            }
            ],
            "yt$firstName": {
            "$t": "${usernameReal}"
            },
            "yt$googlePlusUserId": {
            "$t": "1234567890"
            },
            "yt$lastName": {
            "$t": "Dover"
            },
            "yt$location": {
            "$t": "NL"
            },
            "yt$statistics": {
            "lastWebAccess": "1970-01-01T00:00:00.000Z",
            "subscriberCount": "44",
            "videoWatchCount": 0,
            "viewCount": "319",
            "totalUploadViews": "0"
            },
            "media$thumbnail": {
            "url": "${thumbnail}"
            },
            "yt$userId": {
            "$t": "TlUMB31ZAUK3ar4_HvGD-g"
            },
            "yt$username": {
            "$t": "retrofoxxo",
            "display": "${usernameReal}"
            }
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

router.get('/feeds/api/users/:username', (req, res) => {
    const username = req.params.username;
    
    if (username === "default") return; // Ignore "default" since it's handled elsewhere
  
    FeedsApiVideos.getVideos(req, res);
  });
  
module.exports = router;
