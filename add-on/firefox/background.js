let port;
 
function getYoutubeId (url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
      return match[2];
  } else {
      return 'error';
  }
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener((tab) => {
  if (!port) {
    port = browser.runtime.connectNative("aot");
  }

  let videoId = getYoutubeId(tab.url);
  let newSrc = {url: `https://www.youtube.com/embed/${videoId}`};
  console.log('add-on:', newSrc);
  port.postMessage(newSrc);
});

