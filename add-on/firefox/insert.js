var videos = document.querySelectorAll('#player');

function addIconToVideo (videos) {
  for (var i=0; i< videos.length; i++) {
    videos[i].style.border='10px solid red';
  }
}