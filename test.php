<?php
// $hex1 = 0;
// $cont = 0;

// $arquivo = fopen('cores.txt','w');
// if ($arquivo == false) die('Não foi possível criar o arquivo.');


// while($hex1 < 16){
//     $hex2 = 0;
//     while($hex2 < 16){
//         $hex3 = 0;
//         while($hex3 < 16){
//             $hex4 = 0;
//             while($hex4 < 16){
//                 $hex5 = 0;
//                 while($hex5 < 16){
//                     $hex6 = 0;
//                     while($hex6 < 16){
//                             $cont++;
                            
//                             $texto = dechex($hex1).dechex($hex2).dechex($hex3).dechex($hex4).dechex($hex5).dechex($hex6)."  ";
//                             fwrite($arquivo, $texto);
//                             $hex6++;
//                     }
//                         $hex5++;
//                 }
//                     $hex4++;
//             }
//                 $hex3++;
//         }
//         $hex2++;
//     }
//     $hex1++;
// }

// $array_cores;
// if ($fh = fopen('cores.txt', 'r')) {
//     while (!feof($fh)) {
//         $line = fgets($fh);
//         $array_cores = explode("  ",$line);
//     }
//     fclose($fh);
// }
// $arquivo = fopen('cores.html','w');
// if ($arquivo == false) die('Não foi possível criar o arquivo.');

// set_time_limit(0);
// $cont2 = 0 ;
// $limitDigitos = 185;
// $limitLinhas =89240;
// $total = 0;
// //89240

// while($cont2 < $limitLinhas){
//    $cont = 0;
//    while ($cont < $limitDigitos){
//         // echo "<font color='".$array_cores[$total]."'>a</font>";
//         $texto = "<font color='".$array_cores[$total]."'>a</font>\r\n";
//         fwrite($arquivo, $texto);
        
//         $cont++;
//         $total++;
//     }
//     fwrite($arquivo, '<br>');
//    $cont2++;
// }
// fclose($arquivo);