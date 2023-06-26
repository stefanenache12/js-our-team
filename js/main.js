const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        profileImg: 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        profileImg: 'img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profileImg: 'img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profileImg: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        profileImg: 'img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profileImg: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

for (let index = 0; index < ourTeam.length; index++) {
        const element = ourTeam[index];

    for (const key in element) {
        console.log(key,element[key])

        let container = document.querySelector('.container');
        let card = document.createElement('div');
        container.append(card);
        card.innerHTML = `${key}: ${element[key]}`;
    };
};