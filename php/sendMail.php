<?php

$user = json_decode(file_get_contents('php://input'));

$namePeople = $user->nameUserCntact;
$mailPeople = $user->mailUserContact;
$phonePeople = $user->telUserContact;
$msgPeople = $user->bodyMsgContact;

$to = "sistemas1@dalpher.com";
$subject = "Formulario contacto";
$txt = "Correo de: ".$namePeople."\n"."Teléfono: ".$phonePeople."\n"."Descripción del mensaje: ".$msgPeople;
$headers = "From: ".$mailPeople;

mail($to,$subject,$txt,$headers);

?> 