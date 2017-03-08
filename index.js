
$(document).ready(function(){

	$("#save").click(function(){

		$.post(
            'insert.php', // Un script PHP que l'on va créer juste après
            {
            	name : $("#name").val(),  
            	job: $("#headline").val(),
            	contact :$("#mail").val()
            },

            function(data){

            	if(data == 'Success'){

            		$("#resultat").html("<p>les donner sont envoyer!</p>");
            	}
            	else{

            		$("#resultat").html("<p>Erreurn...</p>");
            	}

            },

            'html'
            );

	});

});
