const current = document.querySelector('.main__img');
const images = [document.querySelectorAll('.imgs img')];

// get function started
window.setInterval('changeImg()', 2000);


// replace Image from stack, can be folder, array or DOM

function changeImg() {
    images.map(img => {
    let randNum = Math.floor(Math.random() * img.length);
    let oldImg = document.querySelector('.main__img img');
    let newImg = img[randNum];
    current.classList.add('fade-in');
    // dont forget replaceChild needs two values 
    // https://developer.mozilla.org/de/docs/Web/API/Node/replaceChild
    
    current.replaceChild(newImg, oldImg);
    });
}


