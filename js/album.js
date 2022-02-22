function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbums();
function displayAlbums(albums){
    const albumsContainer = document.getElementById('all-albums');
    for(const album of albums){
        //console.log(albums);
        const p = document.createElement('p');
        p.innerText = album.title;
        p.style.textAlign = 'center';
        albumsContainer.appendChild(p);
    }
}