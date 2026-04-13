<?php

    namespace classes;

    use controllers\ErrorController as ErrorController;

    class Router {

        private $uri = "";

        public function __construct(){}

        public function route(){
            $this -> filterRequest();
            $controller = $this -> getController();
            $action = $this -> getAction();
            $params = $this -> getParams();

            if( class_exists( $controller ) ){
                $controller = new $controller();
            }else{
                $controller = new ErrorController();
                $action = "error404";
                $controller -> $action();
            }
        }

        private function filterRequest(){

            $petition = filter_input_array(INPUT_GET);
            if( isset( $petition['uri'] ) ){
                $this -> uri = $petition['uri'];
                $this -> uri = rtrim( $this -> uri,'/');
                $this -> uri = filter_var( $this -> uri, FILTER_SANITIZE_URL);
                $this -> uri = explode('/',ucfirst(strtolower( $this -> uri )));

            }

        }

        private function getController(){
            //ver_array( $this -> uri);
            $controller = 'Home';
            if( isset( $this -> uri[0] )){
                $controller = $this -> uri[0];
                unset( $this -> uri[0] );
            }
            $controller = ucfirst( $controller );
            $controller =  "controllers\\" . $controller . "Controller";
            // ver_array( $this -> uri);
            // echo $controller;die;
            return $controller;
        } 

        private function getAction(){
            $action = 'index';
            if( isset( $this -> uri[1] ) ){
                $action = $this -> uri[1];
                unset( $this -> uri[1] );
            }
            return $action;
        }

        private function getParams(){
            $params = [];
            if( !empty( $this -> uri ) ){
                $params = $this -> uri;
            }
            return $params;
        }

    }