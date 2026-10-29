const targetImage = document.querySelector('.photo');
const images = ['photo/man.avif', 'photo/2.jpeg', 'photo/3.jpeg'];

let imageIndex = 0;

if (targetImage) {
    targetImage.style.cursor = 'pointer';

    targetImage.addEventListener('click', () => {
        imageIndex = (imageIndex + 1) % images.length;
        targetImage.src = images[imageIndex];
    });
}
