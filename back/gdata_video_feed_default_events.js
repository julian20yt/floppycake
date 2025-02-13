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
    
            // Ensure the logs directory exists
            const logsDir = path.join(__dirname, 'logs');
            if (!fs.existsSync(logsDir)) {
                fs.mkdirSync(logsDir);
            }
    
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const logFilePath = path.join(logsDir, `guide-response-${timestamp}.json`);
            fs.writeFileSync(logFilePath, JSON.stringify(response.data, null, 2));
    
            // Ensure response.data.items exists and is an array
            if (!response.data.items || !Array.isArray(response.data.items)) {
                throw new Error('Invalid response: Missing "items" array.');
            }
    
            const guideItems = response.data.items
                .map(section => section.guideSectionRenderer?.items || [])
                .flat();
    
            const channels = guideItems
                .map(item => {
                    const guideAccount = item.guideAccountEntryRenderer;
                    if (guideAccount?.title?.simpleText && guideAccount?.thumbnail?.thumbnails?.[0]?.url) {
                        return {
                            username: guideAccount.title.simpleText,
                            thumbnail: guideAccount.thumbnail.thumbnails[0].url
                        };
                    }
                    return null;
                })
                .filter(Boolean); // Remove null values
    
            return channels;
        } catch (error) {
            console.error("Error fetching YouTube channel data:", error);
    
            if (error.response) {
                console.error("Response Data:", error.response.data);
            }
    
            if (error.response && error.response.status === 401) {
                throw new Error('Unauthorized: Invalid or expired access token.');
            }
    
            throw new Error(`Error fetching YouTube channel data: ${error.message}`);
        }
    }
  
    static async handleUploadsRequest(req, res, accessToken, username, thumbnail) {


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
        
      postData.browseId = "FEmy_videos";

          
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
          const logFilePath = path.join(logsDir, `my-videos-response-${timestamp}.json`);
          fs.writeFileSync(logFilePath, JSON.stringify(response.data, null, 2)); 
  
          let intermediateForm;
          try {
              intermediateForm = await this.convertToIntermediateFormBrowse(response.data, username, thumbnail);
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

    static async handleCommentsRequest(req, res, accessToken, username, thumbnail) {


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
        
      postData.browseId = "FEmy_videos";

          
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
          const logFilePath = path.join(logsDir, `history-response-${timestamp}.json`);
          fs.writeFileSync(logFilePath, JSON.stringify(response.data, null, 2)); 
  
          let intermediateForm;
          try {
              intermediateForm = await this.convertToIntermediateFormBrowse(response.data, username, thumbnail);
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
    
    static async handleFavouritesRequest(req, res, accessToken, username, thumbnail) {
   
   
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
   
           postData.browseId = "VLLL";
   
               
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
               const logFilePath = path.join(logsDir, `favourite-browse-response-${timestamp}.json`);
               fs.writeFileSync(logFilePath, JSON.stringify(response.data, null, 2)); 
       
               let intermediateForm;
               try {
                   intermediateForm = await this.convertToIntermediateFormBrowseLike(response.data, username, thumbnail);
               } catch (convertError) {
                   console.error("Error converting API response to intermediate form:", convertError);
                   throw new Error('Failed to process API response.');
               }
       
               const logFilePathIni = path.join(logsDir, `browse-intermediate-response-${timestamp}.json`);
               fs.writeFileSync(logFilePathIni, JSON.stringify(intermediateForm, null, 2)); 
       
               return intermediateForm;
       
           } catch (error) {
                 console.error("Error fetching data from YouTube API:", error.message);
                 return [];
             }
    }
   
    static async convertToIntermediateFormBrowseLike(responseData, username, thumbnail) {
      const videos = [];
  
      console.log("items yap", JSON.stringify(responseData));
  
      const items = responseData?.contents?.tvBrowseRenderer?.content?.tvSurfaceContentRenderer?.content?.twoColumnRenderer?.rightColumn?.playlistVideoListRenderer?.contents;
  
      if (Array.isArray(items)) {
          const videoDataPromises = items.map(async (item) => {
              const video = item?.tileRenderer;
              if (!video) return null;
  
              const publishedText = video.metadata?.tileMetadataRenderer?.lines
                  ?.find(line => line.lineRenderer?.items
                      ?.some(item => item.lineItemRenderer?.text?.simpleText?.includes("ago")))
                  ?.lineRenderer?.items
                  ?.find(item => item.lineItemRenderer?.text?.simpleText?.includes("ago"))
                  ?.lineItemRenderer?.text?.simpleText || "Unknown Published Time";
  
              const formattedPublishedTime = await FeedsApiVideos.convertRelativeDate(publishedText);
  
              const durationText = video.header?.tileHeaderRenderer?.thumbnailOverlays
                  ?.find(overlay => overlay.thumbnailOverlayTimeStatusRenderer)
                  ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText || "0";
              const formattedDurationText = await FeedsApiVideos.convertTimeToSeconds(durationText);
  
              const authorText = video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.simpleText
                  || video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.runs?.[0]?.text
                  || "John Doe";
  
              const videoId = video.onSelectCommand?.watchEndpoint?.videoId || null;

              console.log("evetns thumbnail " + thumbnail); 
  
              return { 
                  id: videoId || "Unknown Video ID",
                  author: username,
                  title: video.metadata?.tileMetadataRenderer?.title?.simpleText || "Unknown Title",
                  etag: video.etag || "null",
                  published: formattedPublishedTime || "2013-05-10T00:00:01.000Z",
                  updated: video.updatedTimeText?.simpleText || "Unknown Updated Time",
                  category: video.category || "Unknown Category",
                  categoryLabel: video.categoryLabel || "Unknown Category Label",
                  seconds: formattedDurationText,
                  pfp: thumbnail,
                  type: "VIDEO_FAVORITED"
              };
          });
  
          const resolvedVideos = await Promise.all(videoDataPromises);
          videos.push(...resolvedVideos.filter(video => video !== null));
      } else {
          console.warn("No items found in playlistVideoListRenderer.");
      }
  
      return videos;
  }

    static async convertToIntermediateFormBrowse(responseData, username, thumbnail) {
      const videos = [];
  
      console.log("items yap", JSON.stringify(responseData));
  
      const items = responseData?.contents?.tvBrowseRenderer?.content?.tvSurfaceContentRenderer?.content?.gridRenderer?.items;
  
      if (Array.isArray(items)) {
          for (const item of items) {
              const video = item?.tileRenderer;
  
              if (video) {
   
                  const publishedText = video.metadata?.tileMetadataRenderer?.lines
                      ?.find(line => line.lineRenderer?.items
                          ?.some(item => item.lineItemRenderer?.text?.simpleText?.includes("ago")))
                      ?.lineRenderer?.items
                      ?.find(item => item.lineItemRenderer?.text?.simpleText?.includes("ago"))
                      ?.lineItemRenderer?.text?.simpleText || "Unknown Published Time";
  
                  const formattedPublishedTime = await FeedsApiVideos.convertRelativeDate(publishedText);
  
                  const durationText = video.header?.tileHeaderRenderer?.thumbnailOverlays
                      ?.find(overlay => overlay.thumbnailOverlayTimeStatusRenderer)
                      ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText || "0";
                  const formatteddurationText = await FeedsApiVideos.convertTimeToSeconds(durationText);
  
                  const authorText = video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.simpleText
                      || video.metadata?.tileMetadataRenderer?.lines?.[0]?.lineRenderer?.items?.[0]?.lineItemRenderer?.text?.runs?.[0]?.text
                      || "John Doe";
           
                  const videoData = {
                      id: video.onSelectCommand?.watchEndpoint?.videoId || "Unknown Video ID",
                      author: username,
                      title: video.metadata?.tileMetadataRenderer?.title?.simpleText || "Unknown Title",
                      etag: video.etag || "null",
                      published: formattedPublishedTime || "2013-05-10T00:00:01.000Z",
                      updated: video.updatedTimeText?.simpleText || "Unknown Updated Time",
                      category: video.category || "Unknown Category",
                      categoryLabel: video.categoryLabel || "Unknown Category Label",
                      seconds: formatteddurationText,
                      pfp: thumbnail,
                      type: "VIDEO_UPLOADED"
                  };
  
                  videos.push(videoData);
              }
          }
      } else {
          console.error("No items found in responseData.");
      }
  
      return videos;
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

        const videoTerm = parsedVideoData.type || `null`;

    
        const videoTemplate = `
            {
                "gd$etag": "DkYEQX47eCp7I2A9WhBaFkg",
                "id": {
                  "$t": "tag:youtube.com,2008:event:VTE0MTEzNzc0MTExMzk4ODU4NDYyNjcwMjQ%3D"
                },
                "updated": {
                  "$t": "${published}"
                },
                "category": [
                  {
                    "scheme": "https://web.archive.org/web/20141028113403/http://schemas.google.com/g/2005#kind",
                    "term": "https://web.archive.org/web/20141028113403/http://gdata.youtube.com/schemas/2007#userEvent"
                  },
                  {
                    "scheme": "https://web.archive.org/web/20141028113403/http://gdata.youtube.com/schemas/2007/userevents.cat",
                    "term": "${videoTerm}"
                  }
                ],
                "title": {
                  "$t": "${escapedTitle}"
                },
                "link": [
                  {
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "https://web.archive.org/web/20141028113403/https://www.youtube.com"
                  },
                  {
                    "rel": "https://web.archive.org/web/20141028113403/http://gdata.youtube.com/schemas/2007#video",
                    "type": "application/atom+xml",
                    "href": "https://web.archive.org/web/20141028113403/https://gdata.youtube.com/feeds/api/videos/AAPMvjsHfQc?v=2"
                  },
                  {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "https://web.archive.org/web/20141028113403/https://gdata.youtube.com/feeds/api/events/VTE0MTEzNzc0MTExMzk4ODU4NDYyNjcwMjQ%3D?v=2"
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
        
        const userData = await FeedsApiVideos.getYouTubeChannelData(accessToken);

        const username = userData.length > 0 ? userData[0].username : null;
        const thumbnail = userData.length > 0 ? userData[0].thumbnail : null;

        console.log("yap thumbnail " + thumbnail)

        let videoData;
        let videoData2;
        let videoData3;


        // for the user upload part
        videoData = await FeedsApiVideos.handleUploadsRequest(req, res, accessToken, username, thumbnail);
        videoData2 = await FeedsApiVideos.handleFavouritesRequest(req, res, accessToken, username, thumbnail);
        videoData3 = await FeedsApiVideos.handleCommentsRequest(req, res, accessToken, username, thumbnail);

        let combinedVideos = [...videoData, ...videoData2, ...videoData3];

        combinedVideos.sort((a, b) => {
            // Convert the 'published' field (ISO 8601 format) to Date objects
            let dateA = new Date(a.published);
            let dateB = new Date(b.published);
            
            // Sort in descending order (newest first)
            return dateB - dateA;
        });

        if (combinedVideos.length === 0) {
            return res.status(404).send("No videos found.");
        }

        const numberOfResults = videoData.length;

        const formattedVideoList = await FeedsApiVideos.generateVideoList(combinedVideos);
        
        const jsonData = `{
        "version": "1.0",
        "encoding": "UTF-8",
        "feed": {
        "xmlns": "http://www.w3.org/2005/Atom",
        "xmlns$gd": "https://web.archive.org/web/20141028113403/http://schemas.google.com/g/2005",
        "xmlns$yt": "https://web.archive.org/web/20141028113403/http://gdata.youtube.com/schemas/2007",
            
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

router.get('/feeds/api/users/default/events', FeedsApiVideos.getVideos);

module.exports = router;
