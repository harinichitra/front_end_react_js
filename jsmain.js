function clickme(){
   var a = document.getElementById("item1").value 
   var b = document.getElementById("item2").value 
   var c = document.getElementById("item3").value 
   var d = document.getElementById("item4").value 
   var e = document.getElementById("item5").value 
   var f = document.getElementById("item6").value 
   var g = document.getElementById("item7").value 
   var h = document.getElementById("item8").value 

   alert("this data has been saved "+"FirstName: "+a+" LastName: "+b+" Place "+c+" D.O.B "+d+" Email id "+e+" Mobile number "+f+" Vaccinated "+g);


} 



function click(){​​​​​​ 
     var a = document.getElementById("item1").value
     var b = document.getElementById("item2").value  
     var c = document.getElementById("name").value,  
     url = 'file:///C:/Users/hrajendiran/jsproject/htmlmain1.html?name=' + "name:" + encodeURIComponent(a) + encodeURIComponent(b) + encodeURIComponent(c);  
       document.location.href = url;
    }​​​​​​


