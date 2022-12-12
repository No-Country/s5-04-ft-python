
//  $.ajax({
//     type: 'GET',
//     url: 'https://drfsimplecrud-test-ktne.onrender.com/api/projects/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data)
//       latitud = parseFloat(data[0].latitud);
//       longitud = parseFloat(data[0].longitud);
//     }
// });


window.addEventListener('load', obtenerDatos);

function obtenerDatos(){

    const ruta = `https://drfsimplecrud-test-ktne.onrender.com/api/projects/`;
    
    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos(resultado){
    let cad = `<div class="container">`
    console.log(resultado)

    for (elemento of resultado) {
        
        console.log( this.elemento);

    }
    

}

