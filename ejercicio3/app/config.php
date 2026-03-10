<?php

    define('DS', DIRECTORY_SEPARATOR);
    define('ROOT', __DIR__ . DS);
    
    define('IS_LOCAL', in_array($_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1']) ? true : false);
    define('PORT', IS_LOCAL ? '80' : '8003');
    define('URL', IS_LOCAL ? '127.0.0.1:' . PORT . DS : 'app');
    define('DB_HOST', IS_LOCAL ? 'localhost' : 'db');
    define('DB_USER', IS_LOCAL ? 'root' : 'root');
    define('DB_PASS', IS_LOCAL ? '' : 'rootpassword');

    define ("CLASSES", ROOT . 'classes' . DS);