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
            $this -> initConfig();
            $this -> loadFunctions();
            echo CONTROLLERS;
        }

        private function initConfig() {
            if (!file_exists(__DIR__ . "/config.php")){
                die ("Missing dependency 'config.php'");
            }

            require_once __DIR__ . "/config.php";
            return;
        }

        private function loadFunctions(){
            if (!file_exists(FUNCTIONS . "/main_functions.php")){
                die("Mising dependency main_functions.php");
            }
            require_once FUNCTIONS . "/main_functions";
            return;
        }


        public static function run(){
            $app = new self();
            return;
        }
    }

    
?>