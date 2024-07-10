import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function initializeWebsite() {
    const content = document.getElementById('content');
    content.append(loadHome());
}

document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();

    document.querySelector('nav button:nth-child(1)').addEventListener('click', () => {
        clearContent();
        initializeWebsite();
    });

    document.querySelector('nav button:nth-child(2)').addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadMenu());
    });

    document.querySelector('nav button:nth-child(3)').addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadAbout());
    });
});

console.log('JS is working OK!');