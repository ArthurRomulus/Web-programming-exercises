<?php

    define('DS', DIRECTORY_SEPARATOR); //! La definición de una constante evita incompatibilidad entre ejecutarlo en linux o windows
    define('ROOT', __DIR__ . DS);

    define('IS_LOCAL',in_array($_SERVER['REMOTE_ADDR'],['127.0.0.1','::1']) ? true : false);

    define('PORT', IS_LOCAL ? '80' : '8003');

    define('URL', IS_LOCAL ? '127.0.0.1:' . PORT . DS : 'app'); //* Los dos puntos son para concatenar el puerto y el DS

    define('DB_HOST', IS_LOCAL ? 'localhost' : 'db');
    define('DB_USER', IS_LOCAL ? 'root' : 'root');
    define('DB_PASS', IS_LOCAL ? '' : 'rootpassword');
    define('DB_PORT', IS_LOCAL ? '3306' : '3306');


    define('CLASSES',     ROOT . 'classes' . DS);
    define('CONTROLLERS', ROOT . 'controllers' . DS);
    define('RESOURCES',   ROOT . 'resources' . DS);
    define('ASSETS',      DS . 'assets' . DS);
    define('CSS',         ASSETS . 'css' . DS);
    define('JS',          ASSETS . 'js' . DS);
    define('LAYOUTS',     RESOURCES . 'layouts' . DS);
    define('VIEWS',       RESOURCES . 'views' . DS);
    define('FUNCTIONS',   RESOURCES . 'functions' . DS);
    define('IMAGES',      RESOURCES . 'post_images' . DS);