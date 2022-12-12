var pLatitud = 0;
var pLongitud = 0;

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
      cad += `
      <div class="card border-danger mb-3" style="max-width: 18rem;">
       
              <h3>Nombre: ${elemento.title}</h2>
          <div class="cuerpo contenido-card">
              <h4>Grupo: ${elemento.description}</h4>
              <p>Tipo de Bici: ${elemento.technology}<p>  
              <p>Latitud: ${elemento.latitud}<p>  
              <p>Longitud: ${elemento.longitud}<p>    
              <p>Estado: SIN EMERGENCIA<p>  
              <a href="#">Mas datos...</a>
          </div>
        </div>`
        console.log( this.elemento);
    }
    cad += `</div>`
    document.getElementById("tarjetas").innerHTML = cad;

        var pLatitud = parseFloat(resultado[0].latitud)
        var pLongitud = parseFloat(resultado[0].longitud)
        console.log( "----mostrar latitud---");
        console.log(pLatitud);
        console.log( "----mostrar longitud---");
        console.log(pLongitud);
        console.log( "-------");

        iniciarMap(pLatitud,pLongitud)

}


  

  
  




function iniciarMap(pLatitud,pLongitud){

  const mapOptions = {
          lat: pLatitud,
          lng: pLongitud
    }
    console.log( "----mostrar mapoptions---");
    console.log(mapOptions);
    console.log( "-------");
  // -37.83601112394677, -57.67676095687907
  var coord = {lat:-37.83601112394677 ,lng: -57.67676095687907};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: mapOptions
  });
  var marker = new google.maps.Marker({
    position: mapOptions,
    map: map
  });

  var marker1 = new google.maps.Marker({
    position: coord,
    map: map
  });


// const directionsService = new google.maps.DirectionsService();
// const directionsRenderer = new google.maps.DirectionsRenderer();
// directionsRenderer.setMap(map);
// const request = {
//   origin: new google.maps.LatLng(-37.902225985651114, -57.6187984287453),
//   destination: new google.maps.LatLng(-38.004864573768636, -57.55002555888683),
//   travelMode: 'BICYCLING'
// };
// directionsService.route(request, response => {
//   directionsRenderer.setDirections(response);
// });
}


