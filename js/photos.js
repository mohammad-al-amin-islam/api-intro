fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => displayPhotos(data));

function displayPhotos(photos){
    const getContainer = document.getElementById('photo-container');
    for(const photo of photos){
        const div = document.createElement('div');
        div.innerHTML = `
        <img src ="${photo.url}"></img>
        `
        div.style.textAlign ="center";
        getContainer.appendChild(div);
    }
}