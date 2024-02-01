function validarFormulario() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
  var heroi = document.getElementById('heroi').value;

  if (nome === '') {
    alert('Por favor, insira seu nome.');
    return false;
  }

  if (heroi == '') {
    alert('Por favor, insira seu heroi.');
    return false;
  }

  if (email === '') {
    alert('Por favor, insira seu e-mail.');
    return false;
  }

  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return false;
  }

  if (mensagem === '') {
    alert('Por favor, insira sua mensagem.');
    return false;
  }

  return true;
}

function acaoClique() {

  if (acaoClique == '')
  acaoClique = 'enviar';
  switch (acaoClique) {
    case 'limpar':
      limparCampos();
      break;
    case 'validar':
      validarFormulario();
      break;
    default:
      enviarDados(); 
  }
}

// Função para adicionar o evento de clique no botão
function acaoClique(){
  // Capturando o elemento que será utilizado como botão
  
  Swal.fire({
    title: "Contato",
    text: "Obrigado por nos contatar!",
    icon: "success"

  });
}
