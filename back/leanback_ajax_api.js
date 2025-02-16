const express = require('express');

const router = express.Router();

router.get('/leanback_ajax', (req, res) => {
    if (req.query.action_featured === '1') {
        const response = {
            "sets": [
                {
                    "title": "YouTube Trends",
                    "video_count": 4777,
                    "gdata_list_id": "STmost_popular_Trending",
                    "icon": "trends",
                    "gdata_url": "http://gdata.youtube.com/standardfeeds/US/most_popular_Trending",
                    "list_id": "LBpop,10,t,en_US",
                    "tab": "featured",
                    "thumbnail": "http://i1.ytimg.com/vi/6ravZzYKR34/hqdefault.jpg"
                },
                {
                    "title": "Music",
                    "video_count": 30,
                    "gdata_list_id": "STmost_popular_Music",
                    "icon": "music",
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Music?time=today",
                    "list_id": "LBpop,10,t,en_US",
                    "tab": "featured",
                    "thumbnail": "http://i1.ytimg.com/vi/ekdXzLxrMnY/hqdefault.jpg"
                },
                {
                    "title": "Gaming",
                    "video_count": 30,
                    "gdata_list_id": "STmost_popular_Games",
                    "icon": "gaming",
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Games?time=today",
                    "list_id": "LBpop,20,t,en_US",
                    "tab": "featured",
                    "thumbnail": "http://i1.ytimg.com/vi/7WJBJ9OI1ds/hqdefault.jpg"
                },
                {
                    "title": "Sports",
                    "video_count": 30,
                    "gdata_list_id": "STmost_popular_Sports",
                    "icon": "sports",
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Sports?time=today",
                    "list_id": "LBpop,17,t,en_US",
                    "tab": "featured",
                    "thumbnail": "http://i1.ytimg.com/vi/CxkUhVswF5U/hqdefault.jpg"
                },
                {
                    "title": "Film & Animation",
                    "video_count": 30,
                    "gdata_list_id": "STmost_popular_Film",
                    "icon": "film",
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Film?time=today",
                    "list_id": "LBpop,1,t,en_US",
                    "tab": "featured",
                    "thumbnail": "http://i1.ytimg.com/vi/DfSyyw8duQ0/hqdefault.jpg"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Entertainment?time=today",
                    "title": "Entertainment",
                    "tab": "featured",
                    "icon": "entertainment",
                    "gdata_list_id": "STmost_popular_Entertainment"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Comedy?time=today",
                    "title": "Comedy",
                    "tab": "featured",
                    "icon": "comedy",
                    "gdata_list_id": "STmost_popular_Comedy"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_News?time=today",
                    "title": "News & Politics",
                    "tab": "featured",
                    "icon": "news",
                    "gdata_list_id": "STmost_popular_News"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_People?time=today",
                    "title": "People & Blogs",
                    "tab": "featured",
                    "icon": "people",
                    "gdata_list_id": "STmost_popular_People"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Tech?time=today",
                    "title": "Science & Technology",
                    "tab": "featured",
                    "icon": "tech",
                    "gdata_list_id": "STmost_popular_Tech"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Howto?time=today",
                    "title": "Howto & Style",
                    "tab": "featured",
                    "icon": "howto",
                    "gdata_list_id": "STmost_popular_Howto"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Education?time=today",
                    "title": "Education",
                    "tab": "featured",
                    "icon": "education",
                    "gdata_list_id": "STmost_popular_Education"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular_Animals?time=today",
                    "title": "Pets & Animals",
                    "tab": "featured",
                    "icon": "animals",
                    "gdata_list_id": "STmost_popular_Animals"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/users/Y30JRSgfhYXA6i6xX1erWg/uploads",
                    "title": "Smosh",
                    "tab": "featured",
                    "gdata_list_id": "UUY30JRSgfhYXA6i6xX1erWg", /* take this in mind sadly because of youtube chnaged you'll need to
                     use this in an if statmment if(a == "yourid") and return the thumbnail image. Check in       function ug(a, b, c) {,
                     yeah youtube doesn't let you get it anymore easily*/ 
                    "thumbnail": "http://i1.ytimg.com/vi/1b1loWJfxaA/hqdefault.jpg"
                },
                {
                    "gdata_url": "http://gdata.youtube.com/feeds/api/users/aBf1a-dpIsw8OxqH4ki2Kg/uploads",
                    "title": "Geek & Sundry",
                    "tab": "featured",/* take this in mind sadly because of youtube chnaged you'll need to
                    use this in an if statmment if(a == "yourid") and return the thumbnail image. Check in       function ug(a, b, c) {,
                    yeah youtube doesn't let you get it anymore easily*/ 
                    "gdata_list_id": "UUaBf1a-dpIsw8OxqH4ki2Kg"
                },
                {
                    "title": "Most Popular",
                    "video_count": 30,
                    "gdata_list_id": "STmost_popular",
                    "icon": "popular",
                    "gdata_url": "http://gdata.youtube.com/feeds/api/standardfeeds/US/most_popular?time=today",
                    "list_id": "LBpop,0,t,en_US",
                    "tab": "featured", 
                    "thumbnail": "http://i1.ytimg.com/vi/1b1loWJfxaA/hqdefault.jpg"
                }
            ]
        };
        res.json(response);
    } 
    
    else if (req.query.action_player_template) {
        res.status(200).json({
                "version": "1.0",
                "encoding": "UTF-8",
                "entry": {
                    "xmlns": "http://www.w3.org/2005/Atom",
                    "xmlns$gd": "https://web.archive.org/web/20150326103611/http://schemas.google.com/g/2005",
                    "xmlns$yt": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007",
                    "xmlns$media": "https://web.archive.org/web/20150326103611/http://search.yahoo.com/mrss/",
                    "gd$etag": "W/\"A0cMRX47eCp7I2A9XRRUE0w.\"",
                    "id": {
                        "$t": "tag:youtube.com,2008:video:vdCY3QGoc8s"
                    },
                    "published": {
                        "$t": "2012-03-31T11:29:11.000Z"
                    },
                    "updated": {
                        "$t": "2015-03-25T21:31:24.000Z"
                    },
                    "category": [
                        {
                            "scheme": "https://web.archive.org/web/20150326103611/http://schemas.google.com/g/2005#kind",
                            "term": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007#video",
                            "label": "Film & Animation"
                        }
                    ],
                    "title": {
                        "$t": "Winx Club in Concerto - Un regno e una bambina"
                    },
                    "content": {
                        "type": "application/x-shockwave-flash",
                        "src": "https://web.archive.org/web/20150326103611/http://www.youtube.com/v/vdCY3QGoc8s?version=3&f=videos&app=youtube_gdata"
                    },
                    "link": [
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://web.archive.org/web/20150326103611/http://www.youtube.com/watch?v=vdCY3QGoc8s&feature=youtube_gdata"
                        },
                        {
                            "rel": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007#video.related",
                            "type": "application/atom+xml",
                            "href": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/feeds/api/videos/vdCY3QGoc8s/related?v=2"
                        },
                        {
                            "rel": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007#mobile",
                            "type": "text/html",
                            "href": "https://web.archive.org/web/20150326103611/http://m.youtube.com/details?v=vdCY3QGoc8s"
                        },
                        {
                            "rel": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007#uploader",
                            "type": "application/atom+xml",
                            "href": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/feeds/api/users/uDBNML7H8ER2w9n6BhdnCA?v=2"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/feeds/api/videos/vdCY3QGoc8s?v=2"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Ananna Anime"
                            },
                            "uri": {
                                "$t": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/feeds/api/users/ANANNA98"
                            },
                            "yt$userId": {
                                "$t": "uDBNML7H8ER2w9n6BhdnCA"
                            }
                        }
                    ],
                    "yt$accessControl": [
                        {
                            "action": "comment",
                            "permission": "moderated"
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
                            "rel": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007#comments",
                            "href": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/feeds/api/videos/vdCY3QGoc8s/comments?v=2",
                            "countHint": 5
                        }
                    },
                    "media$group": {
                        "media$category": [
                            {
                                "$t": "Film",
                                "label": "Film & Animation",
                                "scheme": "https://web.archive.org/web/20150326103611/http://gdata.youtube.com/schemas/2007/categories.cat"
                            }
                        ],
                        "media$content": [
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://www.youtube.com/v/vdCY3QGoc8s?version=3&f=videos&app=youtube_gdata",
                                "type": "application/x-shockwave-flash",
                                "medium": "video",
                                "isDefault": "true",
                                "expression": "full",
                                "duration": 151,
                                "yt$format": 5
                            },
                            {
                                "url": "rtsp://r7---sn-a5m7zu7z.c.youtube.com/CiILENy73wIaGQnLc6gB3ZjQvRMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                                "type": "video/3gpp",
                                "medium": "video",
                                "expression": "full",
                                "duration": 151,
                                "yt$format": 1
                            },
                            {
                                "url": "rtsp://r7---sn-a5m7zu7z.c.youtube.com/CiILENy73wIaGQnLc6gB3ZjQvRMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                                "type": "video/3gpp",
                                "medium": "video",
                                "expression": "full",
                                "duration": 151,
                                "yt$format": 6
                            }
                        ],
                        "media$credit": [
                            {
                                "$t": "ananna98",
                                "role": "uploader",
                                "scheme": "urn:youtube",
                                "yt$display": "Ananna Anime"
                            }
                        ],
                        "media$description": {
                            "$t": "Un regno e una bambina",
                            "type": "plain"
                        },
                        "media$keywords": {},
                        "media$license": {
                            "$t": "youtube",
                            "type": "text/html",
                            "href": "https://web.archive.org/web/20150326103611/http://www.youtube.com/t/terms"
                        },
                        "media$player": {
                            "url": "https://web.archive.org/web/20150326103611/http://www.youtube.com/watch?v=vdCY3QGoc8s&feature=youtube_gdata_player"
                        },
                        "media$thumbnail": [
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://i.ytimg.com/vi/vdCY3QGoc8s/default.jpg",
                                "height": 90,
                                "width": 120,
                                "time": "00:01:15.500",
                                "yt$name": "default"
                            },
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://i.ytimg.com/vi/vdCY3QGoc8s/mqdefault.jpg",
                                "height": 180,
                                "width": 320,
                                "yt$name": "mqdefault"
                            },
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://i.ytimg.com/vi/vdCY3QGoc8s/hqdefault.jpg",
                                "height": 360,
                                "width": 480,
                                "yt$name": "hqdefault"
                            },
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://i.ytimg.com/vi/vdCY3QGoc8s/1.jpg",
                                "height": 90,
                                "width": 120,
                                "time": "00:00:37.750",
                                "yt$name": "start"
                            },
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://i.ytimg.com/vi/vdCY3QGoc8s/2.jpg",
                                "height": 90,
                                "width": 120,
                                "time": "00:01:15.500",
                                "yt$name": "middle"
                            },
                            {
                                "url": "https://web.archive.org/web/20150326103611/http://i.ytimg.com/vi/vdCY3QGoc8s/3.jpg",
                                "height": 90,
                                "width": 120,
                                "time": "00:01:53.250",
                                "yt$name": "end"
                            }
                        ],
                        "media$title": {
                            "$t": "Winx Club in Concerto - Un regno e una bambina",
                            "type": "plain"
                        },
                        "yt$duration": {
                            "seconds": "151"
                        },
                        "yt$uploaded": {
                            "$t": "2012-03-31T11:29:11.000Z"
                        },
                        "yt$uploaderId": {
                            "$t": "UCuDBNML7H8ER2w9n6BhdnCA"
                        },
                        "yt$videoid": {
                            "$t": "vdCY3QGoc8s"
                        },
                        "gd$rating": {
                            "average": 4.754386,
                            "max": 5,
                            "min": 1,
                            "numRaters": 114,
                            "rel": "https://web.archive.org/web/20150326103611/http://schemas.google.com/g/2005#overall"
                        },
                        "yt$statistics": {
                            "favoriteCount": "0",
                            "viewCount": "41718"
                        },
                        "yt$rating": {
                            "numDislikes": "7",
                            "numLikes": "107"
                        }
                    }
                }
        });    
    } else {
        res.status(400).json({ error: 'Invalid action_featured value' });
    }
});

module.exports = router;
