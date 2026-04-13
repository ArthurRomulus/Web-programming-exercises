<?php

    namespace app;

    use classes\Autoloader as Autoloader;
    use classes\Router as Router;

    error_reporting(E_ALL);
    ini_set('display_errors',1);
    
    class App {
        public function __construct(){
            $this -> init();
        }

        private function init(){
            $this -> initConfig();
            $this -> loadFunctions();
            $this -> initAutoloader();
            $this -> initRouter();
        }

        private function initConfig(){
            if(!file_exists(__DIR__ . "/config.php")){
                die("No se encuentra el archivo de configuración");
            }
            require_once __DIR__ . "/config.php";
            return;
        }

        private function loadFunctions(){
            if(!file_exists(FUNCTIONS . "/main_functions.php")){
                die("No se encuentra el archivo de funciones de usuario");
            }
            require_once FUNCTIONS . "/main_functions.php";
            return;
        }

        private function initAutoloader(){
            if(!file_exists(CLASSES . "/Autoloader.php")){
                die("No se encuentra el archivo Autoloader");
            }
            require_once CLASSES . "/Autoloader.php";
            Autoloader::register();
            return;
        }

        private function initRouter(){
            $router = new Router();
            $router -> route();
        }


        public static function run(){
            $app = new self();
            return;
        }
    }