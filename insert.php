 <?php 
 $name = $_POST'name'];
 $job= $_POST['job'];
 $contact = $_POST['contact'];
 $arr = array('name' => $name , 'job' => $job, 'contact' => $contact);

 $array=json_encode($arr);

 $file = 'index.json';
// Ouvre un fichier pour lire un contenu existant
 $current = file_get_contents($file);
// Ajoute une personne
 $current .= $array."\n";
// Écrit le résultat dans le fichier
 file_put_contents($file, $current);
 ?>















