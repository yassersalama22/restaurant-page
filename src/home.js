export default function loadHome() {
    const main = document.createElement('main');
    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heroImage = document.createElement('img');
    heroImage.id = 'hero-image';
    heroImage.src = require('./pexels-pixabay-260922.jpg');
    heroImage.alt = 'Restaurant Interior';

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Exquisite Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Experience the finest dining with an ambiance that takes you to another world. Join us for an unforgettable culinary journey!';

    heroContent.appendChild(headline);
    heroContent.appendChild(description);
    heroSection.appendChild(heroImage);
    heroSection.appendChild(heroContent);
    main.appendChild(heroSection);

    return main;
}