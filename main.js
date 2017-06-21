/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

function playSound(genre) {
  SC.get('/tracks', {
    genres: genre,
    bpm: {
      from: 100
    }
  }, function(tracks) {
    var random = Math.floor(Math.random() * 49);
    SC.oEmbed(tracks[random].uri, { auto-play: true }, document.getElementById('')

    })
  }
)}
