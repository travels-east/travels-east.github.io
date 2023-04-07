var outButton = document.querySelector('.click'),
    pop = document.getElementById('click_button');
var main = document.getElementById("window");
var shadow = document.querySelector("container");
var hide = document.getElementById("closed");

function simulator_FB (){
  "use strict"
  main.style.display = "block";
  shadow.style.backgroundColor = "rgba(0, 0, 0, 0.38)"
}

function simulator_FB_close (){
  "use strict"
  main.style.display = "none";
   shadow.style.backgroundColor = "#FFF"

}














// Remove Items From Cart
$('a.remove').click(function(){
	event.preventDefault();
	$( this ).parent().parent().parent().hide( 400 );
   
  })
  
  // Just for testing, show all items
	$('a.btn.continue').click(function(){
	  $('li.items').show(400);
	})
  
	










	
