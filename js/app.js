
$(function(){
  $("#nome").focus(function(){
      $(".escondido").css("display", "block");
      $("#mensagem").text("Nesse campo você deve escrever o seu nome completo");
  });

  $("#nome").blur(function(){
      $(".escondido").css("display", "none");
  });

  $("#elementoSelector").change(function(){
      $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
      $("#mensagem").text("Você mudou a opção do select");
  });

  $("#texto").select(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensagem").text("Você selecionou um texto!");
  });

  $("form").submit(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensagem").text("Você enviou o formulário!");
    event.preventDefault();
  });

});
