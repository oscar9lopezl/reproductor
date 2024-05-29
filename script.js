// axios.get("https://leonardoapi.onrender.com/songs")
//   .then(response => {
//     const data = response.data.songs; // Los datos de la API
//     const selectedSongs = data.slice(0, 9); // Obtén las primeras 7 canciones
//     // Aquí puedes procesar los datos y agregarlos al contenedor
//     const container = document.getElementById("song-list");
//     selectedSongs.forEach(song => {
//       const div = document.createElement("li");
//       div.classList.add("song");
//       div.innerHTML = `
//         <img src="${song.path.front}" alt="">
//         <p>${song.title}</p>
//         <button></button>
//       `;
//       container.appendChild(div);

//       const li = document.createElement('li')
//       li.innerHTML = `
//         <img src="${song.path.front}" >
//       `
//       document.getElementById("song-list-2")
//         .appendChild(
//           li
//         )

//         ;


//     });
//   })
//   .catch(error => {
//     console.error("Error al obtener datos de la API:", error);
//   });

const container = document.getElementById('song-list')

axios.get("https://leonardoapi.onrender.com/songs")
  .then((res) => {
    res.data.songs.map((song) => {

      const div = document.createElement('div')
      div.classList.add('song')
      div.innerHTML = `
      <img src="${song.path.front}" alt="">
              <p>${song.title}</p>
            `

      div.addEventListener('click', () => {

        // document.getElementById
        // ('current-song-title').innerHTML = song.title

        // document.getElementById
        // ('current-song-img').setAttribute('src',
        // song.path.front)

        document.getElementById
          ('current-song-audio').setAttribute('src',
            song.path.audio)

      })

      container.appendChild(div)


    })

    document.getElementById('play').addEventListener('click', () => {

      const audio = document.getElementById('current-song-audio')


      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }



    })

  })