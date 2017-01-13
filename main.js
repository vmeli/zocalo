// var i=0;

(function(){

	function clase(){
		$(".sprkflw_main.sprkflw_floating").removeClass("sprkflw_floating").addClass("sprkflw_default");
		console.log("aparte");	
	}
	clase();



})();


 function searchElementClass() {
	var divClass = $("div[class*='sprkflw_main sprkflw_']");
    if(divClass){
      divClass.css({"color":"red"});
      // console.log("dime"+i);
      // i++;
      if($("li.sprkflw_main").hasClass("sprkflw_floated")){
      		clearInterval(myvar);
      }
    }       
 }
 
var myvar = setInterval(searchElementClass, 1000);
// console.log("hola");