<?php

    function ver_array($array=[]){
        echo "<pre>";
        print_r($array);
        echo "</pre>";
    }

    function to_object( $array ){

        return json_decode( json_encode( $array ) );

    }