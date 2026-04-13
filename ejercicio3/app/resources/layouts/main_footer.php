<?php

    function foot($args=null, $scripts=[]){

    
?>

</div>
<script src="<?=JS?>lib/jquery.min.js"></script>
<script src="<?=JS?>lib/bootstrap.bundle.min.js"></script>
<?php foreach($scripts as $script) : ?>
    <script src="<?=JS?>/views/<?=$script?>"><script>
<?php endforeach; ?>

</body>
</html>
<?php } ?>