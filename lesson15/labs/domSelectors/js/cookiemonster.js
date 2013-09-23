 $(function(){
 	$('h2').css('background-color','black');
 	$before = new DOMText('Newly prepended text');
// $before = $dom->createTextNode('Newly prepended text');
 $after = new DOMText('Newly appended text');
// $after = $dom->createTextNode('Newly appended text');

$body->appendChild($after);
$body->insertBefore($before, $body->firstChild);


 }


 
 


