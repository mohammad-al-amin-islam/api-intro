function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPost();
function displayPost(posts) {
    const section = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}<p>
        `
        section.appendChild(div);
    }
}

function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:'this is title',
            body: 'this is body',
            userId:1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data));
}
function addPost2(){
    fetch('https://jsonplaceholder.typicode.com/pusts', {
        method: 'POST',
        body: JSON.stringify({
            title:'this is title',
            body: 'this is body',
            userId:1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

