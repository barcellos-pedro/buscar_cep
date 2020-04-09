$(()=>{
  $(".tooltip").tooltipster({
    trigger: 'custom',
    side: 'right',
    animation: 'fade'
  });
})

$(".btBuscar").hover(()=>{
  $(".tooltip").tooltipster("open");
  setTimeout(()=>{
    $(".tooltip").tooltipster("close");
  },1000)
})

$(".btBuscar").click(()=>{
    let cep = $("#cep").val()
    $.get("https://viacep.com.br/ws/"+ cep +"/json/", buscaCep)

    .fail(()=>{
      console.log("Falha na busca.");
      $("#erro").toggle();
      setTimeout(()=>{
        $("#erro").toggle()
      },2000)
    })

})

function buscaCep(data){
    $("#endereco").val(data.logradouro);
    $("#bairro").val(data.bairro);
    $("#complemento").val(data.complemento);
    $("#estado").val(data.uf);
    $("#cidade").val(data.localidade);
}
