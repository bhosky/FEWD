/**
 * Welcome to Keyboard Events Exercise
 * A couple of thing we want to do:
 * 
 * 1) First, let's display the most recent keyCode the user pressed. This will help you do the second
 *    exercise. 
 *
 * 2) Now, let's change the behavior of the "noVowels" textbox so that no vowels can
 *    be typed in it. 
 *    Hint, remeber what event.preventDefault() does? 
 */

 $('noVowels').keypress(function(event){
 	

 	var key = event.keyCode;

 	if (key == 'a' || key == 'A'){
 		event.preventDefault();
 	}

 	if (key == 37){
 		event.preventDefault();
 	}

 	if (key == 39){
 		event.preventDefault();
 	}
 		

 	$('justPressed').text(event.keyCode);
 });

(function($) 
{

    /* get key code */
    function getKeyCode(key)
    {
        //return the key code
        return (key == null) ? event.keyCode : key.keyCode;
    }
    
    /* get key character */
    function getKey(key)
    {
        //return the key
        return String.fromCharCode(getKeyCode(key)).toLowerCase();
    }

    $(document).ready(function()
    {
        $(document).keydown(function (eventObj)
        {
            /* display the key and character code for the key you pressed */
            alert("Key pressed: "+getKey(eventObj)+ " Code = "+getKeyCode(eventObj));
        });
    });
    
})(jQuery);


 
