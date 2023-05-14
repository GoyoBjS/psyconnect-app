import "dotenv/config";

export default{
    "expo": {
      "name": "psyconnect",
      "slug": "psyconnect",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/icon.png",
        "resizeMode": "contain",
        "backgroundColor": "#FDF9FF"
      },
      "plugins": [
        
      ],
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "package": "com.psyconnect.psyconnect",
        "versionCode": 1,
        "adaptiveIcon": {
          "foregroundImage": "./assets/icon.png",
          "backgroundColor": "#FFFFFF",
        }
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      
      "extra": {
        firebaseApiKey: process.env.FIREBASE_API_KEY,
        firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
        firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
        firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.FIREBASE_APP_ID
      }
    }
  }
  