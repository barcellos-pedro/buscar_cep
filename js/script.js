$("#btBuscar").click(()=>{
    let cep = $("#cep").val()
    $.get("https://viacep.com.br/ws/"+ cep +"/json/", buscaCep)
})

function buscaCep(data){
    $("#endereco").val(data.logradouro);
    $("#bairro").val(data.bairro);
    $("#complemento").val(data.complemento);
    $("#estado").val(data.uf);
    $("#cidade").val(data.localidade);
}