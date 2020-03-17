<?php


$images = glob("*.png");



foreach($images as $image)
{

  echo $str = str_replace("4_styletype","10_styletype",$image);

  if (!copy($image, $str)) {
    echo "failed to copy";
  }
}

?>
