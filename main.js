/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

let container = document.getElementById('user-input');
let submission = document.getElementById('submission');
let player = document.getElementById('music-player')

function searchTracks() {
  let string = submission.value;
  fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=' + string)
  .then(
    function(response) {
      if(response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return
      }
      response.json().then(function(data) {
        for(i=0; i < data.length; i++) {
        let markup = `
          <div id="user-input">
          <br>
          <img src=${data[i].artwork_url}>
           <p>${data[i].title}</p>
           <p>${data[i].user.username}</p>
           <p>
           <audio onclick id="music-player" controls="controls" src="${data[i].stream_url}"></audio>
           </p>
          </div>
`
        container.innerHTML += markup;
      }

    })})}
