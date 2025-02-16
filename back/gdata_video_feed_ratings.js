const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const router = express.Router();

async function getAccessTokenFromHeaders(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new Error('Authorization header is missing.');
    }
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
        throw new Error('Access token is missing.');
    }
    return token;
}

function jsonToXml(jsonObj) {
    const builder = new xml2js.Builder();
    return builder.buildObject(jsonObj);
}

async function handleLikeAction(req, res) {
    const { videoId } = req.params;  

    if (!videoId || typeof videoId !== 'string' || !videoId.trim()) {
        return res.status(400).send(jsonToXml({
            error: 'Video ID is required and must be a non-empty string.',
        }));
    }

    let xmlData = '';
    req.on('data', chunk => {
        xmlData += chunk;
    });

    req.on('end', async () => {
        try {

            const parsedData = await xml2js.parseStringPromise(xmlData);
            const ratingValue = parsedData.entry['yt:rating'][0].$.value;

            console.log("ratingValue: " + JSON.stringify(parsedData));

            if (!ratingValue || !['like', 'dislike'].includes(ratingValue)) {
                return res.status(400).send(jsonToXml({
                    error: 'Invalid rating value. Only "like" or "dislike" are allowed.',
                }));
            }

            const accessToken = await getAccessTokenFromHeaders(req);

            let apiUrl = '';
            switch (ratingValue) {
                case 'like':
                    apiUrl = 'https://www.youtube.com/youtubei/v1/like/like';
                    break;
                case 'dislike':
                    apiUrl = 'https://www.youtube.com/youtubei/v1/like/dislike';
                    break;
            }

            const requestBody = {
                context: {
                    client: {
                        clientName: 'TVHTML5',
                        clientVersion: '5.20150715',
                        screenWidthPoints: 1632,
                        screenHeightPoints: 904,
                        screenPixelDensity: 1,
                        theme: 'CLASSIC',
                        webpSupport: false,
                        acceptRegion: 'US',
                        acceptLanguage: 'en-US',
                    },
                    user: {
                        enableSafetyMode: false,
                    },
                },
                target: {
                    videoId,
                },
            };

            const response = await axios.post(apiUrl, requestBody, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            const successXml = jsonToXml({
                message: `Video ${ratingValue}d successfully!`,
                data: response.data,
            });

            return res.status(200).send(successXml);
        } catch (error) {
            const errorXml = jsonToXml({
                error: error.message || 'Something went wrong while processing the request.',
            });
            return res.status(500).send(errorXml);
        }
    });
}

router.post('/feeds/api/videos/:videoId/ratings', handleLikeAction);

module.exports = router;
