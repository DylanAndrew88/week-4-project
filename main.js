
  let container = document.getElementById('user-input');
  let submission = document.getElementById('submission');
  let player = document.getElementById('music-player');
  let results = document.getElementById('results');

  function searchTracks() {
    document.getElementsByClassName('container')[0].style.marginTop = "0px";
    document.getElementsByClassName('container')[0].style.marginBottom = "-20px";
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
               <p class="title">${data[i].title}</p>
               <p class="userName">${data[i].user.username}</p>
               <p>
               <audio id="music-player" controls="controls" src="${data[i].stream_url}/?client_id=8538a1744a7fdaa59981232897501e04&"></audio>
               </p>
            </div>
        `
        placeholder.innerHTML += markup;
        }

      })})}
