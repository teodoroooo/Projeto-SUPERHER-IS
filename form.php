<?php
    // Obtenha os valores do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Valide o endereço de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Endereço de email inválido.";
        exit();
    }

    // Envie o email usando a função mail() do PHP
    $to = "contato.gabrieldevfullstack@gmail.com"; // Substitua pelo seu endereço de email
    $subject = "Novo contato do site";
    $headers = "From: $email";
    $message = "Nome: $name\nEmail: $email\nMensagem:\n$message";
    if (mail($to, $subject, $message, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o email.";
    }
?>