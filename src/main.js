const spotifyApi = "https://spotify23.p.rapidapi.com/playlist_tracks/?id=5CjFkIeeYmBkWbGqRIYCbR&offset=0&limit=100";

const grid = null || document.getElementById("grid-container");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f795c979d9msh737fce69d2d0e2ap140ed4jsn705b07bcd026',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    return response.json()
}

(async()=>{
    try {
        const songs = await fetchData(spotifyApi);
        let view = `
        ${songs.items.map(song =>`
            <a href="./roi_videoclub.html" class="grid-element">
                <img class="covers" src="${song.track.album.images[1].url}">
                <div class="song-description">
                    <h1>${song.track.name}</h1> 
                    <h4>${song.track.artists[0]["name"]}</h4>
                </div>
            </a>
        `).join("")}   
        `;
        grid.innerHTML = view;
    }
    catch (error){
        console.error(error)
        grid.innerHTML = `An error has occurred: ${error}`
    }
})();
