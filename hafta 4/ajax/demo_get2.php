<?php
$isim = htmlspecialchars($_GET['fname']);
$soyisim = htmlspecialchars($_GET['name']);

echo "Merhaba " . $isim . " " . $soyisim;
?>