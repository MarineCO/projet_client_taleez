
// $(document).ready(function(){

// 	$("#save").click(function(){

// 		$.post(
//             'insert.php', // Un script PHP que l'on va créer juste après
//             {
//           name : $("#name").val(),  // Nous récupérons la valeur de nos input que l'on fait passer à connexion.php
//           job: $("#headline").val(),
//           contact :$("#linkedin").val()
//       },

//       function(data){

//       	if(data == 'Success'){
//                      // Le membre est connecté. Ajoutons lui un message dans la page HTML.

//                      alert("<p>Vous avez été connecté avec succès !</p>");
//                  }
//                  else{
//                      // Le membre n'a pas été connecté. (data vaut ici "failed")

//                      alert("<p>Erreur lors de la connexion...</p>");
//                  }

//              },

//              'html'
//              );

// 	});

// });
function ajax_post(){



			    // Create our XMLHttpRequest object
			    var hr = new XMLHttpRequest();
					    // Create some variables we need to send to our PHP file
					    var url = "insert.php";
					    var name=document.getElementById('name').value ;
					    var headline=document.getElementById('headline').value;
					    var email=document.getElementById('mail').value ;

					    var competence=document.getElementById('competence').value ;
					    var linkedin=document.getElementById('linkedin').value ;
					    var tel= document.getElementById('tel').value ;
					    var vars = "name=>"+name+" ; job=>"+ headline+" ; email=>"+ email+" ; competence=>"+ competence+" ; linkedin=>"+ linkedin+" ; tel=>"+ tel;
					    hr.open("POST", url, true);
					    // Set content type header information for sending url encoded variables in the request
					    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					    // Access the onreadystatechange event for the XMLHttpRequest object
					    // hr.onreadystatechange = function() {
					    // 	if(hr.readyState == 4 && hr.status == 200) {
					    // 		var return_data = hr.responseText;
					    // 		document.getElementById("status").innerHTML = return_data;
					    // 	}
					    // }
					    // Send the data to PHP now... and wait for response to update the status div
					    hr.send(vars); // Actually execute the request


					}