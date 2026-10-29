fetch('data/cv.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not load cv.json');
        }

        return response.json();
    })
    .then(data => {
        document.getElementById('full-name').textContent =
            `${data.name} ${data.surname}`;

        document.getElementById('age').textContent = data.age;

        const email = document.getElementById('email');
        email.textContent = data.email;
        email.href = `mailto:${data.email}`;
    })
    .catch(error => console.error(error));


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