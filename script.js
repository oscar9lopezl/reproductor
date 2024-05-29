

axios.get("https://leonardoapi.onrender.com/songs")
  .then(response => {
    const data = response.data.songs; // Los datos de la API
    const selectedSongs = data.slice(0, 9); // Obtén las primeras 7 canciones
    // Aquí puedes procesar los datos y agregarlos al contenedor
    const container = document.getElementById("track-list");
    selectedSongs.forEach(song => {
      const div = document.createElement("div");
      div.classList.add("song");
      div.innerHTML = `
        <img src="${song.path.front}" alt="">
        <p>${song.title}</p>
        <button></button>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error al obtener datos de la API:", error);
  });


  axios.get("https://leonardoapi.onrender.com/songs")
  .then(response => {
    const data = response.data.songs;
    const songList = document.getElementById("song-list");
    data.forEach(song => {
      const li = document.createElement("li");
      li.textContent = song.title;
      songList.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error al obtener datos de la API:", error);
  });