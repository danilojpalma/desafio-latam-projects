$(document).ready(function(){

// Ocultar la información del héroe al cargar la página
$('.infoHero').hide();

// Validar que el campo de búsqueda solo acepte números entre 1 y 731
$('#submitBtn').click(function() {
    
    
    let inputValue = $('#numberInput').val();
    
    var message = $('#message');
    var regex = /^[1-9][0-9]{0,2}$/; // Expresión regular para números del 1 al 731

    $('#message').removeClass('alert alert-success alert-danger'); // Elimina las clases de alerta

    if (regex.test(inputValue) && inputValue <= 731) {
        $('#message').addClass('alert alert-success');
        message.text('Búsqueda exitosa'); // Muestra el mensaje de éxito
    } else {
        $('#message').addClass('alert alert-danger');
        message.text('Este campo solo acepta números entre 1 y 731, intente de nuevo.');
        
        return false;

    }
 

// Petición AJAX para obtener la información del héroe
    $.ajax({
         type: "GET",
         url: "https://superheroapi.com/api.php/4905856019427443/" + inputValue,
         dataType: "json",
         success: function (data) {
            console.log(data)

           
        $('#nameHero').text('#' + data.id + ' ' + data.name);


    //Limpiar contenedor de información
    $('#infoContainer').empty();

    //Generar tarjeta
    let sections = ['biography', 'appearance', 'work', 'connections'];

    sections.forEach(function(section) {
        let sectionContent = '<div><h5 class="card-title">' + section.charAt(0).toUpperCase() + section.slice(1) + '</h5>';
        sectionContent += '<ul class="list-group list-group-flush">';

        for (let key in data[section]) {
            if (data[section].hasOwnProperty(key)) {
                let value = data[section][key];
                // Si el valor es un array, unir los elementos con comas
                if (Array.isArray(value)) {
                    value = value.join(', ');
                }
                sectionContent += '<li class="list-group-item"><p class="card-text">' + key.charAt(0).toUpperCase() + key.slice(1) + ': ' + value + '</p></li>';
            }
        }

        sectionContent += '</ul></div>';
        $('#infoContainer').append(sectionContent);
        $('.infoHero').show();
    });

    //Generar imagen
    $('#heroImage').attr('src', data.image.url);


    // Crear los data pints para el gráfico
    let dataPoints = [];
        for (let key in data.powerstats) {
            if (data.powerstats.hasOwnProperty(key)) { // Evitar que se muestren propiedades heredadas
        let value = parseInt(data.powerstats[key]);
        // Asegura que null, NaN, y undefined se conviertan a -1. Elegi -1 porque si todos los valores son 0, el gráfico no se mostrará.
        value = isNaN(value) || value === null || value === undefined ? -1 : value;
        dataPoints.push({ label: key, y: value });
        console.log(value)
    }
}

    //Generar gráfico
    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Powerstats of " + data.name,
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: 32,
            },
        data: [{
            // Cambiar el tipo de gráfico a "pie"
            type: "pie",
            startAngle: 240,
            yValueFormatString: "(##0)",
            indexLabel: "{label} {y}",
            dataPoints: dataPoints
            }]
            });
            chart.render();

            }
        });


    })
   
});


