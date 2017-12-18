<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    session_start();
    generateToken();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_POST = json_decode(file_get_contents('php://input'), true);
    if(!isset($_POST['token'])){
        echo json_encode(array('status' => False, 'message' => 'Verification Error'));
    }

    $secret = '6LdpbjoUAAAAAEIfuZKqUEt0klGrbOXOCn2Ey6iJ';

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
        $recieverEmail = 'bluehacks@compsat.org';
        $subject = 'Blue Hacks Message: ' . filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $senderEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        if(!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)){
            echo json_encode(array('status' => False, 'message' => 'Your E-mail is invalid. Please try again.'));
            return;
        }
        mail($recieverEmail, $subject, $_POST['message'], 'From:'.$senderEmail);
        
        echo json_encode(array('status' => True, 'message' => 'Thank you! Your message has been sent.'));
    }
    else{
        echo json_encode(array('status' => False, 'message' => 'Please provide all necessary details.'));
    }
}

function generateToken(){
    if(empty($_SESSION['token_key'])){
        $_SESSION['token_key'] = bin2hex(random_bytes(32));
    }
    echo json_encode(array('token_key' => $_SESSION['token_key']));
}

function verifyToken($token){
    $val = hash_hmac('sha256', '/bh_form_handler.php', $_SESSION['token_key']);
    return hash_equals($val, $token);
}

function verifyRecaptcha($url, $secret, $response){
    $data = array(
        'secret' => $secret,
        'response' => $response
    );
    $query = http_build_query($data);
    $options = array(
        'http' => array(
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n".
                        "Content-Length: ".strlen($query)."\r\n",     
            'method' => 'POST',
            'content' => $query
        )
    );

    $context = stream_context_create($options);
    $result = json_decode(file_get_contents($url, false, $context));
    return $result->success;
}

?>
