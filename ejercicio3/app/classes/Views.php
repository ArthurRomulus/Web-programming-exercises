<?php

    namespace classes;

    class Views {
        public function __construct(){}

        public static function render($view, $data = []){
            $d = to_object( $data );
            require_once VIEWS . $view . '.view.php';
        }
    }