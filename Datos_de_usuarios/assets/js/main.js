(async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    
    const users = data.results;

    users.forEach(user => {
      const { name, email, phone, picture } = user;
      console.log(name, email, phone, picture);

        //Crear la tarjeta del usuario
        const userCard = document.createElement('div');
        userCard.classList.add('card', 'm-2');
        userCard.style.width = '18rem';

        userCard.innerHTML = `
            <img src="${picture.large}" class="card-img-top" alt="${name.first}">
        `;

        //Crear la lista de los datos del usuario
        const ul = document.createElement('ul');
        ul.classList.add('list-group', 'list-group-flush');
        ul.innerHTML = `
            <li class="list-group-item">${name.first} ${name.last}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${phone}</li>
        `;
        userCard.appendChild(ul);

        //Crear el contendor padre
        const container = document.createElement('div');
        container.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center',);
        container.appendChild(userCard);
        
        document.body.appendChild(container);
    }
    );git
    
    } catch (error) {
        console.log(error);
    }
})();


