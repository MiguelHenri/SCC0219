// Lendo dados do Web Service e atualizando HTML
fetch('https://potions-node.onrender.com/potions', {
    method: 'GET',
    }).then(response => {
        if(!response.ok) {
            throw new Error('Não foi possível conectar ao Web Service!');
        }
        return response.json();
    }).then(data => {
        const potionsContainer = document.getElementById('potions-container');

        data.forEach(potion => {

            // Lendo dados da poção e criando estrutura HTML
            const potionDiv = document.createElement('div');
            potionDiv.classList.add('col-6', 'potion');

            const potionImg = document.createElement('img');
            potionImg.src = potion.img;
            potionImg.alt = potion.name;

            const potionTitle = document.createElement('h2');
            potionTitle.textContent = potion.name;

            const potionDescription = document.createElement('p');
            potionDescription.textContent = potion.description;

            const potionPrice = document.createElement('p');
            potionPrice.classList.add('potion-price');
            potionPrice.textContent = `Preço: $${potion.price}`;

            potionDiv.appendChild(potionImg);
            potionDiv.appendChild(potionTitle);
            potionDiv.appendChild(potionDescription);
            potionDiv.appendChild(potionPrice);

            potionsContainer.appendChild(potionDiv);
        });
    }).catch(error => {
        console.error('Erro ao obter dados das poções!', error);
    });
