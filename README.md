
# Module 19 Challenge: PWA Just Another Text Editor (J.A.T.E.) ![icon](./client/favicon.ico)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


##  Description:

This is a simple single-page text editor that runs in a browser and saves text typed in (after a period of time) in the localStorage and indexedDb. This data storage redundancy ensures that the application is supported even if one of the options is not available on the user's browser. The application can be installed locally, can work offline and is also deployed in Heroku.

The deployed website is:

https://wirsing-jate.herokuapp.com/


##  Table of Contents 
1. [Installation](#installation)
2. [Usage and Features](#usage-and-features)  
3. [Screenshots](#screenshots)
4. [Contributing](#contributing) 
5. [Test](#test) 
6. [Questions](#questions)
7. [License](#license)

## Installation 

LOCAL:
1. Download files in local folder and unzip.
2. Open folder in terminal.
3. Use `npm i` to install the modules needed for the project.
4. Type `npm run start` to build and run the app.
5. Open browser and navigate url to `http://localhost:3000/`.

HEROKU
1. Navigate to https://wirsing-jate.herokuapp.com/

## Usage and Features

This app can be used locally via installation or online via the Heroku link (https://wirsing-jate.herokuapp.com/).

It enables the user to generate notes or snippets of code regardless of their connection status.

The technologies used for this were: JavaScript (JS), Cascading Style Sheets (CSS), Hypertext Markup Language (HTML), Webpack with Service Worker/Manifest, localStorage, IndexedDB, Node, Express, Babel, CSS-loader, HTML-webpack plugin, Code-Mirror and many others.

## Screenshots

Localhost or Heroku J.A.T.E. App:
![jate](./assets/jate.png)

Install prompt:
![install](./assets/Install-prompt.png)

Locally installed app:
![installed](./assets/local-install.png)

Manifest:
![manifest](./assets/manifest.png)

Service Worker:
![service worker](./assets/sw.png)

IndexedDB
![idb](./assets/idb.png)


## Contributing 

Ask the author and use according to the MIT license.

## Test 

The following are ways to test the app:
1. Type in text and wait some time before refreshing.
2. Refresh and the text should be reloaded.
3. Inspect the localStorage and IndexedDb.
4. Install the app and test it (repeat 1 and 2).
5. Disconnect app from network and test its offline mode.
 
## Questions? 

Please contact me through any of the following:

1. My [Github](https://github.com/iwirsing).
2. Email: <a href="mailto:ivymolina@gmail.com">ivymolina@gmail.com</a>

## License
    
The project in covered under the [MIT](https://opensource.org/licenses/MIT) license

