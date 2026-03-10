<?php

    namespace app;
    error_reporting(E_ALL);
    init_set('display_errors', 1);

    class App{
        public function __construct(){
            $this -> init();

        }

        private function init(){
            print_r($_GET);
        }

        public static function run(){
            $app = new self();
            return;
        }
    }

    
?>