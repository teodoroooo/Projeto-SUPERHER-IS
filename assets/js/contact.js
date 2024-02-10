document.getElementById('submitButton').addEventListener('click', function() {
    // Obtenha os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Valide o formato do email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    // Envie os dados do formulário para o script do lado do servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'form.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Mostre a mensagem de sucesso
            document.getElementById('messageSent').style.display = 'block';
        } else {
            alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
        }
    };
    xhr.send('name=' + name + '&email=' + email + '&message=' + message);
});
