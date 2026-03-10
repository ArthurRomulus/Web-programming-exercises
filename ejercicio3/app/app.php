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
            this -> initConfig();
            echo CONTROLLERS;
        }

        private function initConfig() {
            if (!file_exists(__DIR__ . "/config.php")){
                die ("Missing dependendec 'config.php'");
            }
        }
        public static function run(){
            $app = new self();
            return;
        }
    }

    
?>