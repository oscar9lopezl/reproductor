axios.get("https://leonardoapi.onrender.com/songs")
  .then(response => {
    const data = response.data.songs; // Los datos de la API
    const selectedSongs = data.slice(0, 9); // Obtén las primeras 7 canciones
    // Aquí puedes procesar los datos y agregarlos al contenedor
    const container = document.getElementById("song-list");
    selectedSongs.forEach(song => {
      const div = document.createElement("li");
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


// axios.get("https://leonardoapi.onrender.com/songs")
// .then(response => {
//   const data = response.data.songs;

//   // Crear una carpeta base para las canciones
//   const baseFolder = "canciones";

//   // Iterar sobre las canciones y crear carpetas
//   data.forEach((song, index) => {
//     const songFolder = `${baseFolder}/cancion${index + 1}`;
//     // Aquí puedes guardar la imagen de la canción en la carpeta correspondiente
//     // Por ejemplo: fs.writeFileSync(path.join(songFolder, "imagen.jpg"), song.imageData);
//   });

//   // Mostrar los nombres de las canciones en un contenedor
//   const songListContainer = document.getElementById("song-containers");
//   const songList = document.getElementById("song-list");
//   data.forEach(song => {
//     const li = document.createElement("li");
//     li.textContent = song.title;
//     songList.appendChild(li);
//   });
// })
// .catch(error => {
//   console.error("Error al obtener datos de la API:", error);
// });