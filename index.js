function getDateTime() {
    var now     = new Date();
    var hour    = now.getHours();
   if(hour < 12){
      document.getElementById("display").innerHTML = "Good Morning";
   }
   else if (hour >= 12 && hour <= 17){
     document.getElementById("display").innerHTML = "Good Afternoon";
   }
   else if (hour >=17 && hour <= 24){
         document.getElementById("display").innerHTML = "Good Evening";
    }
}
