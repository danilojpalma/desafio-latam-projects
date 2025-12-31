// Titulo: Estadisticas Centro Medico Ñuñoa
const titulo = document.getElementById('titulo');
titulo.innerHTML = '<p>Estadisticas Centro Medico Ñuñoa</p>';


// Crear array de objetos
const arrayRadiologia = [
    { Hora: "11:00", Especialista: "IGNACIO SCHULZ", Paciente: "FRANCISCA ROJAS", RUT: "9878782-1", Prevision: "FONASA"},
    { Hora: "11:30", Especialista: "FEDERICO SUBERCASEAUX", Paciente: "PAMELA ESTRADA", RUT: "15345241-3", Prevision: "ISAPRE"},
    { Hora: "15:00", Especialista: "FERNANDO WURTHZ", Paciente: "ARMANDO LUNA", RUT: "16445345-9", Prevision: "ISAPRE"},
    { Hora: "15:30", Especialista: "ANA MARIA GODOY", Paciente: "MANUEL GODOY", RUT: "17666419-0", Prevision: "FONASA"},
    { Hora: "16:00", Especialista: "PATRICIA SUAZO", Paciente: "RAMON ULLOA", RUT: "14989389-K", Prevision: "FONASA",
    },
  ];

  const arrayTraumatologia = [
    { Hora: "8:00", Especialista: "MARIA PAZ ALTUZARRA", Paciente: "PAULA SANCHEZ", RUT: "15554774-5", Prevision: "FONASA"},
    { Hora: "10:00", Especialista: "RAUL ARAYA", Paciente: "ANGÉLICA NAVAS", RUT: "15444147-9", Prevision: "ISAPRE"},
    { Hora: "10:30", Especialista: "MARIA ARRIAGADA", Paciente: "ANA KLAPP", RUT: "17879423-9", Prevision: "ISAPRE"},
    { Hora: "11:00", Especialista: "ALEJANDRO BADILLA", Paciente: "FELIPE MARDONES", RUT: "1547423-6", Prevision: "ISAPRE"},
    { Hora: "11:30", Especialista: "CECILIA BUDNIK", Paciente: "DIEGO MARRE", RUT: "16554741-K", Prevision: "FONASA"},
    { Hora: "12:00", Especialista: "ARTURO CAVAGNARO", Paciente: "CECILIA MENDEZ", RUT: "9747535-8", Prevision: "ISAPRE"},
    { Hora: "12:30", Especialista: "ANDRES KANACRI", Paciente: "MARCIAL SUAZO", RUT: "11254785-5", Prevision: "ISAPRE"},
  ];

  const arrayDental = [
    { Hora: "8:30", Especialista: "ANDREA ZUÑIGA", Paciente: "MARCELA RETAMAL", RUT: "11123425-6", Prevision: "ISAPRE"},
    { Hora: "11:00", Especialista: "MARIA PIA ZAÑARTU", Paciente: "ANGEL MUÑOZ", RUT: "9878789-2", Prevision: "ISAPRE"},
    { Hora: "11:30", Especialista: "SCARLETT WITTING", Paciente: "MARIO KAST", RUT: "7998789-5", Prevision: "FONASA"},
    { Hora: "13:00", Especialista: "FRANCISCO VON TEUBER", Paciente: "KARIN FERNANDEZ", RUT: "18887662-K", Prevision: "FONASA"},
    { Hora: "13:30", Especialista: "EDUARDO VIÑUELA", Paciente: "HUGO SANCHEZ", RUT: "17665461-4", Prevision: "FONASA"},
    { Hora: "14:00", Especialista: "RAQUEL VILLASECA", Paciente: "ANA SEPULVEDA", RUT: "14441281-0", Prevision: "ISAPRE"},
  ];


// Crear tabla radiologia

  const tablaRadiologia = document.getElementById('radiologia');
  const tHead = document.createElement('thead');
  const tRow = document.createElement('tr');
  
  // Crear encabezados
  const propiedades = Object.keys(arrayRadiologia[0]);

  propiedades.forEach((propiedad) => {
    const th = document.createElement('th');
    th.textContent = propiedad;
    tRow.appendChild(th);
  });
  
  tHead.appendChild(tRow);
  tablaRadiologia.appendChild(tHead);


let tBody1 = document.createElement('tbody');

for (const item of arrayRadiologia) {
    tBody1.innerHTML += `<tr>
                       <td>${item.Hora}</td>
                       <td>${item.Especialista}</td>
                       <td>${item.Paciente}</td>
                       <td>${item.RUT}</td>
                       <td>${item.Prevision}</td>
                       </tr>`;
                      
    }
    tablaRadiologia.appendChild(tBody1);

// Crear info radiologia

    const info1 = document.getElementById('info1');

    info1.innerHTML= `<p>Primera atención: ${arrayRadiologia[0].Paciente} - ${arrayRadiologia[0].Prevision} | Última atención: ${arrayRadiologia[arrayRadiologia.length - 1].Paciente} - ${arrayRadiologia[arrayRadiologia.length - 1].Prevision}</p>`;


// Crear tabla traumatologia

const tablaTraumatologia = document.getElementById('traumatologia');
const tHead2 = document.createElement('thead');
const tRow2 = document.createElement('tr');

  propiedades.forEach((propiedad) => {
    const th = document.createElement('th');
    th.textContent = propiedad;
    tRow2.appendChild(th);
  });
  
  tHead2.appendChild(tRow2);
  tablaTraumatologia.appendChild(tHead2);

  let tBody2 = document.createElement('tbody');

for (const item of arrayDental) {
    tBody2.innerHTML += `<tr>
                       <td>${item.Hora}</td>
                       <td>${item.Especialista}</td>
                       <td>${item.Paciente}</td>
                       <td>${item.RUT}</td>
                       <td>${item.Prevision}</td>
                       </tr>`;
                      
    }
    tablaTraumatologia.appendChild(tBody2);

// Crear info traumatologia
    const info2 = document.getElementById('info2');

    info2.innerHTML= `<p>Primera atención: ${arrayDental[0].Paciente} - ${arrayDental[0].Prevision} | Última atención: ${arrayDental[arrayDental.length - 1].Paciente} - ${arrayDental[arrayDental.length - 1].Prevision}</p>`;



// Crear tabla dental

const tablaDental = document.getElementById('dental');
const tHead3 = document.createElement('thead');
const tRow3 = document.createElement('tr');

  propiedades.forEach((propiedad) => {
    const th = document.createElement('th');
    th.textContent = propiedad;
    tRow3.appendChild(th);
  });
  
  tHead3.appendChild(tRow3);
  tablaDental.appendChild(tHead3);

  let tBody3 = document.createElement('tbody');

for (const item of arrayTraumatologia) {
    tBody3.innerHTML += `<tr>
                       <td>${item.Hora}</td>
                       <td>${item.Especialista}</td>
                       <td>${item.Paciente}</td>
                       <td>${item.RUT}</td>
                       <td>${item.Prevision}</td>
                       </tr>`;
                      
    }
    tablaDental.appendChild(tBody3);

// Crear info dental    

    const info3 = document.getElementById('info3');

    info3.innerHTML= `<p>Primera atención: ${arrayTraumatologia[0].Paciente} - ${arrayTraumatologia[0].Prevision} | Última atención: ${arrayTraumatologia[arrayTraumatologia.length - 1].Paciente} - ${arrayTraumatologia[arrayTraumatologia.length - 1].Prevision}</p>`;


    