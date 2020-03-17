<?php

$imgname = ".png";
$path = "media/men/generated_suit_images/";
$final_image = "final.png";

//get all parts
$actPartsColorGroup = array('shoe/style_1_view_1.png', 
                           'lining/1_styletype_1_view_1.png'
                           , 'collar/6_view_1.png'
                           , 'vestlining/6_view_1.png'
                           , 'vestcollar/6_view_1.png'
                           , 'men/style_1_view_1.png'
                           , 'shirt/style_1_view_1.png'
                           , 'tie/style_1_view_1.png'
                           , 'pantstyle/6_style_1_view_1.png'
                           , 'pantpockets/style_1_view_1.png'
                           , 'pantpleats/style_1_view_1.png'
                           , 'fastening/style_1_view_1.png'
                           , 'pantcuffs/6_style_1_view_1.png'
                           , 'pantfit/style_1_view_1.png'
                           , 'veststyle/style_1_view_1.png'
                           , 'vestedge/6_styletype_1_style_1_view_1.png'
                           , 'vestlapel/6_styletype_1_style_1_view_1.png'
                           , 'vestpockets/6_style_1_view_1.png'
                           , 'vestbreastpocket/6_style_1_view_1.png'
                           , 'vestbuttons/1_styletype_1_style_2_view_1.png'
                           , 'style/6_style_1_view_1.png'
                           , 'sleeves/6_view_1.png'
                           , 'pockets/6_styletype_1_style_1_view_1.png'
                           , 'fit/styletype_1_style_1_view_1.png'
                           , 'pocketsquare/1_view_1.png'
                           , 'breastpocket/6_view_1.png'
                           , 'lapel/6_styletype_1_style_1_upper_view_1.png'
                           , 'lapel/6_styletype_1_style_1_lower_view_1.png'
                           , 'threads/1_styletype_1_style_1_view_1.png'
                           , 'buttons/1_styletype_1_style_1_view_1.png');


                           
for ($p = 0; $p < sizeof($actPartsColorGroup); $p++) {

    //echo $actPartsColorGroup[$p] ." - ".$actPartsColorGroup[$p+1]."<br>";
    if($p == 0)
    {
      exec('composite -gravity center blank.png ' . $path.$actPartsColorGroup[$p].' ' . $final_image);
     // echo 'composite -gravity center blank.png ' . $path.$actPartsColorGroup[$p].' ' . $final_image."<br>";
    }else{
      exec('composite -gravity center ' . $path.$actPartsColorGroup[$p]. ' ' . $final_image. ' ' . $final_image);
    }
   
}

