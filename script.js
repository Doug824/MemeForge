document.addEventListener("DOMContentLoaded", function() {
    const memeForm = document.getElementById("memeForm");
    const listGallery = document.querySelector(".gallery");

    memeForm.addEventListener("submit", function(e){
        e.preventDefault();

    const memeLi = document.createElement('li');
        memeLi.classList.add("meme-img");
        memeLi.addEventListener('click', remove);

    const topText = document.getElementById("text-top");
    const urlInput = document.getElementById('uploaded-img').value,
        src =  urlInput,
        img = document.createElement('img');
        img.src = src;

    const topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("text-top").value;

    const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("text-bottom").value;

        let removeDiv = document.createElement('div');
        removeDiv.classList.add("red-cross");
        removeDiv.innerText = "X";
        removeDiv.style.color = "red";
    
    listGallery.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topTextDiv);
    memeLi.appendChild(bottomTextDiv);
    memeLi.appendChild(removeDiv);
    memeForm.reset();
});
function remove(e)  {
    e.target.parentNode.remove();
}
});



// function start() {
//     const memeForm = document.getElementById("memeForm");
//     memeForm.addEventListener("submit", addMeme, false);
// }
// window.addEventListener("load", start, false);

//   // append new meme div to flexbox using template
// function addMeme() {
//     e.preventDefault();
//     const memeUrl = document.getElementById("uploaded-img").value;
//     const topTxt = document.getElementById("text-top").value;
//     const btmTxt = document.getElementById("text-bottom").value;
//     let newMeme = document.createElement("div");
//     newMeme.innerHTML = document.getElementById("memeTmplt").innerHTML;
//     newMeme.className = "meme-wrapper";
//     document.getElementById("meme-gallery").appendChild(newMeme);
//     newMeme.firstElementChild.src = memeUrl; // sets img src of newMeme div
//     newMeme.children[1].innerText = topTxt; // set val of top text input from form
//     newMeme.children[2].innerText = btmTxt; // set val of btm text input from form
//     newMeme.id = "meme"; // sets id of meme wrapper, can refer to delete later
//     // clear form after submit
//     memeForm.reset();
// }

//   // remove meme upon click
// function removeMeme() {
//     e.target.parentNode.remove();
// }
// newMeme.className = "meme-wrapper";