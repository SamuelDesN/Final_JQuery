$(function(){
  $.getJSON('https://random-data-api.com/api/v3/projects/0b417973-cd2b-4bf6-b495-9e29de469463?api_key=P3demypynVp7T_E7Rozzrg', function(data) {
    console.log(data.json_array[1]);
    for(let i=0;i<data.json_array.length;i++){
      let usuario=data.json_array
      var crearusuario = $(`<div class="carta"> <p class="nombre"><strong>${usuario[i]["first_name"]}</strong><br><br>${usuario[i]["last_name"]}</p> <p class="desc">Ciudad: ${usuario[i]["city"]}, ID: ${usuario[i]["ssn"]}</p> <img class=avatar src="${usuario[i]["avatar"]}"></div>`);
      $('#tarjetas').append(crearusuario);
    }
  })
})