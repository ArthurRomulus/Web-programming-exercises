<?php 

    namespace classes;

    class Autoloader {
        public static function register(){
            spl_autoload_register([__CLASS__,'autoload']);
        }

        private static function autoload( $name ){
            $className = ROOT . str_replace("\\", DS, $name) . '.php';
            $controllerName = CONTROLLERS . str_replace("\\", DS, $name) . '.php';
            if( file_exists( $className )){
                require_once $className;
            }elseif( file_exists( $controllerName )){
                require_once $controllerName;
            }else{
                return false;
            }
            return;
        }
    }