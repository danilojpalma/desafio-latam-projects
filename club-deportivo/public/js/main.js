  $(document).ready(function () {
    getData()
  })

  function getData() {
    $('#cuerpo').html('')
    axios.get('/deportes').then((data) => {
      let deportes = data.data.deportes
      deportes.forEach((d, i) => {
        $('#cuerpo').append(`
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${d.nombre}</td>
          <td>$${d.precio}</td>
          <td>
            <button class="btn btn-warning mx-2" onclick='preEdit("${d.nombre}","${d.precio}")' data-toggle="modal" data-target="#exampleModal">Editar</button>
            <button class="btn btn-danger mx-2" onclick='eliminar("${d.nombre}")'>Eliminar</button>
          </td>
        </tr>
        `)
      })
    })
  }

  function preEdit(nombre, precio) {
    $('#nombreModal').val(nombre)
    $('#precioModal').val(precio)
  }

  function agregar() {
    let nombre = $('#nombre').val()
    let precio = $('#precio').val()
    axios.get(`/agregar?nombre=${nombre}&precio=${precio}`).then(() => {
      alert("El item se ha agregado correctamente")
      getData()
    })
    $('#exampleModal').modal('hide')
  }

  function edit() {
    let nombre = $('#nombreModal').val()
    let precio = $('#precioModal').val()
    axios.get(`/editar?nombre=${nombre}&precio=${precio}`).then(() => {
      alert("El item se ha editado correctamente")
      getData()
    })
    $('#exampleModal').modal('hide')
  }

  function eliminar(nombre) {
    axios.get(`/eliminar?nombre=${nombre}`).then(() => {
      alert("El item se ha eliminado correctamente")
      getData()
    })
    $('#exampleModal').modal('hide')
  }
