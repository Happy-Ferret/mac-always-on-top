const { ipcRenderer, remote } = require('electron');

ipcRenderer.on('get-video-src', (event, props) => {
  // get existing iframe and destroy it
  // then create a new iframe with new video src before appending to the body
  let newIframe = document.createElement('iframe');
  let oldIframes = document.querySelectorAll('iframe');
  newIframe.setAttribute('src', props.url);
  newIframe.setAttribute('width', '100vw');
  newIframe.setAttribute('height', '100vh');
  newIframe.setAttribute('name', 'disable-x-frame-options');

  if ( oldIframes.length > 0) {
    for(var i=0; i< oldIframes.length; i++) {
      oldIframes[i].remove();
    }
  }
  document.body.appendChild(newIframe);
  remote.getCurrentWindow().show();
});