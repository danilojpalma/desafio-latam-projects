// Funcion que se ejecuta al hacer click en el boton
const getPosts = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error('Error en la petición');
        }

        const container = document.getElementById('post-data');

        // Limpiar el contenedor
        container.innerHTML = '';

        resultado.forEach(post => {
            const listaDesordenada = document.createElement('ul');
            listaDesordenada.innerHTML = `
                <li><h2>${post.title}</h2></li>
                <p>${post.body}</p>
            `;
            container.appendChild(listaDesordenada);
        });

    } catch (error) {
        console.log("Error en la petición", error);
    }
}
