<?php

$resultToPrint = [];
$i = 0;

$url = 'https://edua.ua.es/es/informacion/estudiantes/preinscripcion-y-matricula/resolucion-preinscripcion/2022-23/acceso-resultados-preinscripcion-1a-fase-2022-23.html';



  $curl = curl_init();
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_URL, $url);
  $result = curl_exec($curl);

  curl_close($curl);

  echo $result;

  $mails = [
    'eutj.694@gmail.com',
  ];

  if ($domainStatus !== 'ocupado') {
    foreach ($mails as $mail) {
      mail(
        $mail,
        "Cambios web UA",
        '',
        "Content-Type: text/html; charset=UTF-8"
      );
    }
  }


echo "
<style>
*:not(pre *) {
  color: #e9e9f4 !important;
}
*:not(pre *, nav *) {
  background-color: #282936;
}

code {
border: 0.5px solid rgb(216, 216, 216);
border-radius: 10px;
}

img:not([src$='.svg']) {
max-width: 90vw;
border-radius: 10px;
margin: 0px ;
}

@media screen and (min-width: 900px) {
img:not([src$='.svg']) {
  max-width: 50%;
}
}

img{
max-width: 100%;
margin-bottom: 20px;
}


h1{
text-align: center;
font-size: 40px;
}

h2{
font-size: 40px;
color: #d63384 !important;
}

h3{
font-size: 30px;
color: #b45bcf !important;
}

h4{
font-size: 20px;
color: #ebff87 !important;
}
h5{
font-size: 20px;
color: #62d6e8 !important;
}
h6{
color: #039aab !important;
}

p{
margin-left: 15px;
}

.hljs{
background-color: #1a1a21
}

.titulo-home{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.logo-principal{
width: 200px;
}

@media screen and (max-width: 360px) {
.titulo-home{
  flex-direction: column;
}
</style>";