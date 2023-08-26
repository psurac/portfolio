/* data = [
    { week: 0, lab: '-', projects: 'Scratch', language: 'Scratch', img: '#', description: '...' },
    { week: 1, lab: 'Population', projects: 'Hello, Mario (More), Credit', language: 'C', img: '#', description: '...', },
    { week: 2, lab: 'Scrabble', projects: 'Readability, Wordle', language: 'C', img: '#', description: '...', },
    { week: 3, lab: 'Sort', projects: 'Plurality, Tideman', language: 'C', img: '#', description: '...', },
    { week: 4, lab: 'Volume', projects: 'Filter (More), Recover', language: 'C', img: '#', description: '...', },
    { week: 5, lab: 'Inheritance', projects: 'Speller', language: 'C', img: '#', description: '...', },
    { week: 6, lab: 'World Cup', projects: 'Sentimental / Hello, Sentimental / Mario (More), Sentimental / Credit, Sentimental / Readability, DNA', language: 'Python', img: '#', description: '...', },
    { week: 7, lab: 'Songs', projects: 'Movies, Fiftyville', language: 'SQL', img: '#', description: '...', },
    { week: 8, lab: 'Trivia', projects: 'Homepage', language: 'HTML, CSS, Javascript, Bootstrap', img: '#', description: '...', },
]; */


document.addEventListener('DOMContentLoaded', function () {

    function dataLoading(data) {
        const tBody = document.querySelector('#overview_table tbody');
        const cards = document.querySelector('#cards');
        const navUl = document.querySelector('#navbar-nav');

        data.forEach(item => {
            // First the table is loaded
            const row = tBody.insertRow();

            const weekCell = row.insertCell();
            weekCell.textContent = item.week;

            const labCell = row.insertCell();
            labCell.textContent = item.lab;

            const projectsCell = row.insertCell();
            projectsCell.textContent = item.projects;

            const languageCell = row.insertCell();
            languageCell.textContent = item.language;

            // Second the cards from the weeks are loaded
            const card = document.createElement('div');
            card.classList.add('card');
            card.id = `week${item.week}`;
            card.style.width = '80vw';
            cards.appendChild(card);

            const cardHeader = document.createElement('h2');
            cardHeader.classList.add('card-header');
            cardHeader.textContent = `Week ${item.week}`;
            card.appendChild(cardHeader);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);

            const cardTitle = document.createElement('h4');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = `Projects: ${item.projects}`;
            cardBody.appendChild(cardTitle);

            const subTitle = document.createElement('h6');
            subTitle.classList.add('card-subtitle');
            subTitle.textContent = `Written in ${item.language}`;
            cardBody.appendChild(subTitle);

            const cardText = document.createElement('span');
            cardText.classList.add('card-text');
            cardText.textContent = item.description;
            cardBody.appendChild(cardText);

            /* const cardImg = document.createElement('img')
            cardImg.classList.add('card-img-bottom');
            cardImg.src = item.img;
            cardImg.alt = item.projects;
            card.appendChild(cardImg); */

            // Third the navbar is loaded
            const navItem = document.createElement('li');
            navItem.classList.add('nav-item');
            navUl.appendChild(navItem);
            const aTag = document.createElement('a');
            aTag.classList.add('nav-link');
            aTag.textContent = `Week${item.week}`;
            aTag.href = `/week${item.week}`;
            aTag.id = `nav:week${item.week}`;
            aTag.onclick = (e) => {
                e.preventDefault();
                const targID = e.target.id.split(':')[1];
                const element = document.getElementById(targID);
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            };
            navItem.appendChild(aTag);
        });
    }

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            dataLoading(data);
        })
        .catch(err => {
            console.error('Error fetching or parsing JSON: ', err.massage);
        })
});