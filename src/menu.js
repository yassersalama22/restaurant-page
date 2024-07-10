import sandwich1 from './pexels-milan-3053700-4637735.jpeg';
import sandwich2 from './pexels-mirkofabian-11975890.jpeg';
import sandwich3 from './pexels-valeriya-1639557.jpeg';

export default function loadMenu() {
    const main = document.createElement('main');
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu');

    const menuItems = [
        {
            img: sandwich1,
            title: 'Classic Hot Dog',
            description: 'A classic hot dog topped with mustard, ketchup, and fresh lettuce.',
            price: '$5.99'
        },
        {
            img: sandwich2,
            title: 'Chicken Sandwich',
            description: 'A crispy chicken sandwich served with fries and a side of ranch.',
            price: '$8.99'
        },
        {
            img: sandwich3,
            title: 'Cheese Burger',
            description: 'A juicy beef burger topped with cheddar cheese, lettuce, and tomato.',
            price: '$10.99'
        }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.img;
        img.title = item.title;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('span');
        price.textContent = item.price;

        menuItem.appendChild(img);
        menuItem.appendChild(title);
        menuItem.appendChild(description);
        menuItem.appendChild(price);

        menuSection.appendChild(menuItem);
    });

    main.appendChild(menuSection);
    return main;
}