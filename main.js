
  let container = document.getElementById('user-input');
  let submission = document.getElementById('submission');
  let player = document.getElementById('music-player');
  let results = document.getElementById('results');

  function searchTracks() {
    document.getElementsByClassName('container')[0].style.marginTop = "0px";
    document.getElementsByClassName('container')[0].style.marginBottom = "-20px";
    document.getElementsByClassName('sub-title')[0].style.marginBottom = "-100px";
    document.getElementById('submission').style.display = "inline";
    document.getElementById('submission').style.width = "35vw";
    document.getElementById('submission').style.marginRight = "2vw";
    let string = submission.value;
    fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=' + string)
    .then(
      function(response) {
        if(response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return
        }
        response.json().then(function(data) {
          placeholder.innerHTML = "";
          for(i=0; i < data.length; i++) {
          if (data[i].artwork_url == null) {
             data[i].artwork_url = "record_placeholder.png";
          }
          let markup = `
            <div id="results">
              <img id="track-art" src="${data[i].artwork_url}">
              <a onclick="soloTrack()"><p id="title">${data[i].title}</p></a>
              <p id="userName">${data[i].user.username}</p>
              <p>
              <audio id="music-player" controls="controls" src="${data[i].stream_url}/?client_id=8538a1744a7fdaa59981232897501e04&"></audio>
              </p>
              <p id="trackid">${data[i].id}</p>
            </div>
        `
        placeholder.innerHTML += markup;
        }

      })})};

  function soloTrack() {
    let id = document.getElementById('trackid').innerHTML;
    fetch('https://api.soundcloud.com/tracks/' + id + '?client_id=8538a1744a7fdaa59981232897501e04')
    .then(
      function(response) {
        if(response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return
        }
        response.json().then(function(data) {
          placeholder.innerHTML = "";
          let markup = `
            <div id="results">
              <p class="title">${data.title}</p>
              <p class="userName">${data.user.username}</p>
            </div>
        `
        placeholder.innerHTML += markup;

      })})};
