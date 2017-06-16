'use strict';

const seleniumAssistant = require('selenium-assistant');

let forceDownload = false;
if (process.env.TRAVIS) {
  forceDownload = true;
}

const promises = [
  seleniumAssistant.downloadLocalBrowser('firefox', 'stable', forceDownload),
  seleniumAssistant.downloadLocalBrowser('firefox', 'beta', forceDownload),
  seleniumAssistant.downloadLocalBrowser('firefox', 'unstable', forceDownload),
  seleniumAssistant.downloadLocalBrowser('chrome', 'stable', forceDownload),
  seleniumAssistant.downloadLocalBrowser('chrome', 'beta', forceDownload),
  seleniumAssistant.downloadLocalBrowser('chrome', 'unstable', forceDownload)
];

Promise.all(promises)
.then(function() {
  console.log('Download complete.');
})
.catch(function(err) {
  console.error('Unable to download browsers.', err);
  process.exit(1);
});
