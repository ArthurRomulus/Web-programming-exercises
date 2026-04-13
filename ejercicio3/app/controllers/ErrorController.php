<?php 

    namespace controllers;

    use classes\Views as View;

    class ErrorController extends Controller {
        public function __construct(){}
        

        public function error404(){

        $response = [
            'title' => "Error: no encontrado",
            'code' => 404
        ];
        
        View::render( 'error', $response);

        }
    }