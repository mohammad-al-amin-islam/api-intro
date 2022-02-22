fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComment(data));

function displayComment(comments){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of comments){
        const h3 =document.createElement('h3');
        const p =document.createElement('p');
        const p2 =document.createElement('p2');
        h3.innerText=comment.name;
        p.innerText = comment.email;
        p2.innerText = comment.body;
        commentContainer.appendChild(h3);
        commentContainer.appendChild(p);
        commentContainer.appendChild(p2);
    }
}