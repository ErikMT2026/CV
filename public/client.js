const targetImage = document.querySelector('.photo');
const images = [
    '/photo/man.avif',
    '/photo/2.jpeg',
    '/photo/3.jpeg'
];

let imageIndex = 0;

if (targetImage) {
    targetImage.addEventListener('click', () => {
        targetImage.style.opacity = '0';

        setTimeout(() => {
            imageIndex = (imageIndex + 1) % images.length;
            targetImage.src = images[imageIndex];
            targetImage.style.opacity = '1';
        }, 200);
    });
}