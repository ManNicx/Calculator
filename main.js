$(document).ready(function() {
  
  //button to display
  
    $(".b").click(function () {
        $(".display").val($(".display").val() +                  $(this).val());        
    });
    //delete numbers
 $(".clear").click(function () {
     $(".display").val("");

 });
 
 //compute equation 
  $(".equal").click(function () {
   
   exp = $(".display").val();
   if(exp.includes("x")){
       exp = exp.replace("x","*");
 }
   $(".display").val(eval(exp));           
  });  
  
     $(".del").click(function () {
     
     ex=$(".display").val();
    $(".display").val(ex.substring(0,ex.lenght - 1));
     
  });
         
});
