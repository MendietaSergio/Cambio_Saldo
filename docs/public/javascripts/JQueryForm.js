
$( "button" ).click(function() {
  $('.caja-formulario').css({'margin-top':'0px'})
  $('.header-img').css({'width':'100%'})
  $('.caja-cambio').css({'margin': '0px'})
  $('.caja-info').css({'height':'auto','margin':'0px', 'margin-top':'24px'})
  $('.header').css({'height':'auto', 'margin-bottom':'0px'})
  $('#contenedor').removeClass('contenedor');
  $('#contenedor').addClass('contenedor_form');
  $("#caja-info" ).hide( "slow" );
  
  $('#caja-info').show(2000)
  $( "#caja-formulario" ).show( 2000 );

})