function consultaCep() {
  var cep = document.querySelector("#cep").value;

  if (cep.length !== 8) {
    swal({
      title: "Oopa!",
      text: "CEP incorreto!",
      icon: "error",
    });
    return;
  }

  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      mostrarResultado(data);
    });
  });
}
function mostrarResultado(dados) {
  var resultado = document.querySelector("#resultado");
  if (dados.erro) {
    resultado.innerHTML = " Não foi localizado seu CEP!";
    resultado.style.color = "red";
    resultado.style.fontFamily = "Arial, sans-serif";
    resultado.style.fontSize = "16px";
    resultado.style.margin = "10px";
  } else {
    resultado.innerHTML = `<p> Endereço: ${dados.logradouro}</p>
    <p>Complemento: ${dados.complemento}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>DDD: ${dados.ddd}</p>
    <p>Ciudade: ${dados.localidade} - ${dados.uf}</p>`;
  }
}
