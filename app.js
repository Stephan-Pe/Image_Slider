// Image Gallery with thumbnails

const current = document.querySelector('#current');
const images = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// set default animated thumbnail
images[0].style.opacity = opacity;
console.log(images[0]);

// EventListener on thumbnails 
images.forEach(img => img.addEventListener('click', changeImg
));

// ClickEvent on Thumbnails
function changeImg(e) {
    //reset imgs
    images.forEach(img => (img.style.opacity = 1));

    // Click Target
    current.src = e.target.src;
    // add animation
    current.classList.add('fade-in');
    // remove after click
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // opacity
    e.target.style.opacity = opacity;
}
