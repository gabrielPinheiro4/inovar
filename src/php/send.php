<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" type="x-icon" href="../imgs/icon.png">
    <link rel="stylesheet" href="../bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <title>Formulário Enviado</title>

    <style>
        body{
            background-color: #040416;
        }

        h1{
            text-align: center;
            margin-top: 10rem;
            color: #fff
        }

        a{
            margin-top: 3rem;
            width: 15rem;
            background-color: #f60042;
            padding: 10px;
            border-radius: 25px;
            color: #fff;
            box-shadow: 0 0 20px #f60042;
            border: none;
            transition: ease-in-out .3s;
            text-decoration: none;
            text-align: center;
        }

        a:hover{
            color: #fff;
        }
    </style>
</head>
<body>

    <h1>Obrigado Por Entrar Em Contato</h1>

    <div class="d-flex justify-content-center">
    <a href="../../index.html">Voltar</a>
    </div>


    <script src="../bootstrap-5.0.2-dist/js/bootstrap.min.js"></script>
</body>
</html>


<?php
$nome = utf8_encode($_POST['nome']);
$mensagem = utf8_encode($_POST['msg']);
$tel = utf8_encode($_POST['numero']);
$objetivo = utf8_encode($_POST['obj']);
$email = utf8_encode($_POST['email']);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';

if(isset($_POST["enviar"])){
    $mail = new PHPMailer(true);

    $mail -> isSMTP();
    $mail -> Host = "smtp.gmail.com";
    $mail -> SMTPAuth = true;
    $mail -> Username = '';
    $mail -> Password = '';
    $mail -> SMTPSecure = 'ssl';
    $mail -> Port = 465;

    $mail -> setFrom($_POST["email"]);

    $mail -> addAddress('');

    $mail -> isHTML(true);

    $mail -> Subject = $_POST["nome"];
    $mail -> Body = "Você recebeu uma mensagem de $nome ($email)
                    <br><br>
                    Mensagem: $mensagem
                    <br><br>
                    Telefone: $tel
                    <br><br>
                    Objetivo: $objetivo";

    $mail -> send();

    // echo "<script> alert('send sucessfully') </script>";
}