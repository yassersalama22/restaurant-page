// src/about.js
export default function loadAbout() {
    const main = document.createElement('main');
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about');

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Us';

    const aboutContent = document.createElement('p');
    aboutContent.textContent = 'Welcome to our restaurant, where we serve the finest dishes with the freshest ingredients. Our passion for food drives us to create an unforgettable dining experience. Our chefs are dedicated to crafting unique and delicious meals that will leave you wanting more.';

    const teamSection = document.createElement('div');
    teamSection.classList.add('team-section');

    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Meet Our Team';

    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Head Chef',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'John has over 20 years of experience in the culinary industry and specializes in Italian cuisine.'
        },
        {
            name: 'Jane Smith',
            role: 'Sous Chef',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Jane is an expert in French cooking techniques and has been with us for 5 years.'
        },
        {
            name: 'Emily Johnson',
            role: 'Pastry Chef',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Emily creates the most delectable desserts, making every meal end on a sweet note.'
        }
    ];

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');

        const memberImg = document.createElement('img');
        memberImg.src = member.imgSrc;
        memberImg.alt = member.name;

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const memberRole = document.createElement('p');
        memberRole.textContent = member.role;

        const memberDescription = document.createElement('p');
        memberDescription.textContent = member.description;

        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);
        memberDiv.appendChild(memberRole);
        memberDiv.appendChild(memberDescription);
        teamSection.appendChild(memberDiv);
    });

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutContent);
    aboutSection.appendChild(teamTitle);
    aboutSection.appendChild(teamSection);
    main.appendChild(aboutSection);

    return main;
}