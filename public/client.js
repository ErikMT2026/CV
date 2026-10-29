const targetImage = document.querySelector('.photo');

if (targetImage) {
    const imageFolder = targetImage.getAttribute('src').replace(/[^/]*$/, '');
    const images = ['man.avif', '2.jpeg', '3.jpeg'];
    let imageIndex = 0;

    targetImage.addEventListener('click', () => {
        targetImage.style.opacity = '0';

        setTimeout(() => {
            imageIndex = (imageIndex + 1) % images.length;
            targetImage.src = imageFolder + images[imageIndex];
            targetImage.style.opacity = '1';
        }, 200);
    });
}
