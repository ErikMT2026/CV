const images = ['man.avif', '2.jpeg', '3.jpeg'];
const targetImage = document.querySelector('.photo');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        targetImage.src = 'photo/' + images[i];
        i++;
        if (i >= images.length) {
            i = 0;

        }

targetImage.style.opacity = '1';

    }, 500);
});