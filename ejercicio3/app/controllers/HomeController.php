<?php
    namespace controllers;

    use classes\Views as View;

    class HomeController extends Controller {
        public function __construct() {
            parent::__construct();

        }
        public function index(){
            $response = [
                'title' => "MINI RS FIE";
                'code' => 200;

            ];
            View::render('home', $response);
        }


    }