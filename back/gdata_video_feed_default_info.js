const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const router = express.Router();



class FeedsApiVideos {

    static async getYouTubeChannelData(accessToken) {
        try {
            const apiUrl = 'https://www.youtube.com/youtubei/v1/guide';
    
            const postData = {
                context: {
                    client: {
                        clientName: 'TVHTML5',
                        clientVersion: '7.20250205.16.00',
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
    
            const response = await axios.post(apiUrl, postData, { headers });
    
            const guideItems = response.data.items.map(section => section.guideSectionRenderer.items).flat();
    
            const channels = guideItems.map(item => {
                const guideAccount = item.guideAccountEntryRenderer;
                if (guideAccount && guideAccount.title && guideAccount.thumbnail) {
                    return {
                        username: guideAccount.title.simpleText,
                        thumbnail: guideAccount.thumbnail.thumbnails[0].url
                    };
                }
            }).filter(Boolean); 
    
            return channels;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Unauthorized: Invalid or expired access token.');
            }
            throw new Error(`Error fetching YouTube channel data: ${error.message}`);
        }
    }

    static async getVideos(req, res) {

        const logsDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir);
        }
        
        const accessToken = req.query.access_token;

        if (!accessToken) {
            return res.status(418).json({ error: "Missing access_token in request." });
        }
        
        const timestamp = Date.now();
        const logFile = path.join(logsDir, `info_response_${timestamp}.json`);

        const userData = await FeedsApiVideos.getYouTubeChannelData(accessToken);

        const username = userData.length > 0 ? userData[0].username : null;
        const thumbnail = userData.length > 0 ? userData[0].thumbnail : null;

        console.log("Username:", username);
        console.log("Thumbnail:", thumbnail);

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
                "href": "http://www.youtube.com/channel/UCTlUMB31ZAUK3ar4_HvGD-g"
            },
            {
                "rel": "self",
                "type": "application/atom+xml",
                "href": "http://gdata.youtube.com/feeds/api/users/TlUMB31ZAUK3ar4_HvGD-g?v=2"
            }
            ],
            "author": [
            {
                "name": {
                "$t": "${username}"
                },
                "uri": {
                "$t": "http://gdata.youtube.com/feeds/api/users/akramouarour"
                },
                "yt$userId": {
                "$t": "TlUMB31ZAUK3ar4_HvGD-g"
                }
            }
            ],
            "yt$channelId": {
            "$t": "UCTlUMB31ZAUK3ar4_HvGD-g"
            },
            "gd$feedLink": [
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.subscriptions",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/subscriptions?v=2",
                "countHint": 49
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.liveevent",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/live/events?v=2",
                "countHint": 0
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.favorites",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/favorites?v=2",
                "countHint": 0
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.contacts",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/contacts?v=2",
                "countHint": 0
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.inbox",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/inbox?v=2"
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.playlists",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/playlists?v=2"
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.uploads",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/uploads?v=2",
                "countHint": 29
            },
            {
                "rel": "http://gdata.youtube.com/schemas/2007#user.newsubscriptionvideos",
                "href": "http://gdata.youtube.com/feeds/api/users/akramouarour/newsubscriptionvideos?v=2"
            }
            ],
            "yt$firstName": {
            "$t": "Ben"
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
            "display": "${username}"
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

router.get('/feeds/api/users/default', FeedsApiVideos.getVideos);

module.exports = router;
