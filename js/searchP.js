$(document).ready(function() {
     $(".patientId").hide();
    
    $("#go").click(function() {
         if  ($(".cc").val()=="1") {

                   $(".patientId").fadeIn(1000);
                }
           else if ($(".cc").val() =="2") {
                    
                   $(".patientId").hide();
                   
                }
                else if ($(".cc").val() =="3") {
                    
                   $(".patientId").hide();
                   
                }
       
        
    });














});