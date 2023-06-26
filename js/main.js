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

const container = document.querySelector('.row');

for (let index = 0; index < ourTeam.length; index++) {
        const element = ourTeam[index];

        let card = document.createElement('div');
        card.classList.add('flip-card','col-5');
        container.appendChild(card);

        let flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');
        card.appendChild(flipCardInner);

        let flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front');
        flipCardInner.appendChild(flipCardFront);

        let flipCardBack = document.createElement('div');
        flipCardBack.classList.add('flip-card-back');
        flipCardInner.appendChild(flipCardBack);
        
        for (const key in element) {

            if (key === 'profileImg') {
                
                let img = document.createElement('img');
                img.src = element[key];
                flipCardFront.appendChild(img);
            } 
            else if (key === 'name'){

                let nameContainer = document.createElement('h2');
                nameContainer.innerHTML = `${element[key]}`;
                flipCardBack.appendChild(nameContainer);
            }
            else {
                let roleContainer = document.createElement('p');
                roleContainer.innerHTML = `${element[key]}`;
                flipCardBack.appendChild(roleContainer);
            }
        }
};