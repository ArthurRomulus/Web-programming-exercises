<?php

    function foot(){


?>

</div>
    <script src="/public/assets/js/lib/jquery.min.js.js"></script>
    <script src="/public/assets/js/lib/bootstrap.bundle.min.js"></script>
    <?php foreach ($script as $script) {?>
            <script src="/public/assets/js/views/<?=$script?>"></script>
    <?php
    } ?>
</body>
</html>
<?php
    }
?>