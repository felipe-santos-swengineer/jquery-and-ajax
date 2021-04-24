function consultaCep(){
    $(".pg").show();
    var cep = document.getElementById("cep").value;
    console.log(cep);

    
    
    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            $("#ddd").html(response.ddd);
            $("#ibge").html(response.ibge);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".pg").hide();

        }
        
    });
    
}

$(function(){
    $(".cep").hide(); //sem # indica que é class, não id
    $(".pg").hide();
});