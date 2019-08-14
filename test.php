<?php
   $var = shell_exec("git log -1 --pretty=format:'%h - %s (%ci)' --abbrev-commit `git merge-base projeto-grafico dev`");
   var_dump($var);
?>