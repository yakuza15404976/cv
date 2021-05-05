function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function getDateTime() {
    var now     = new Date();
    var hour    = now.getHours();
   if(hour < 12){
      document.getElementById("display").innerHTML = "Good Morning";
      document.getElementById("morning").src = "images/morning.png";
      document.getElementById("daynight").style.backgroundImage = "url('https://www.transparenttextures.com/patterns/cubes.png')";
   }
   else if (hour >= 12 && hour <= 17){
     document.getElementById("display").innerHTML = "Good Afternoon";
     document.getElementById("morning").src = "images/afternoon.png";
     document.getElementById("daynight").style.backgroundImage = "url('https://www.transparenttextures.com/patterns/cubes.png')";
   }

   else if (hour >=17 && hour <= 20 ){
 document.getElementById("display").innerHTML = "Good Evening";
 document.getElementById("morning").src = "images/evening.png";
 document.getElementById("daynight").style.backgroundImage = "url('https://www.transparenttextures.com/patterns/cubes.png')";

 // document.getElementById("daynight").style.backgroundPosition = "center";
 // document.getElementById("daynight").style.backgroundRepeat = "no-repeat";
 // document.getElementById("daynight").style.borderRadius = "50%";
// document.getElementById("daynight").style.textAlign ="center";
 // document.getElementById("daynight").style.backgroundSize = "100%";

    }
    else if (hour >= 20 && hour <= 24) {
      document.getElementById("display").innerHTML = "It's kind of late to be checking on my resume. Good Night.";
    document.getElementById("morning").src = "images/night.png";
      document.getElementById("daynight").style.backgroundImage = "url('https://www.transparenttextures.com/patterns/cubes.png')";
    }
}

function hover(element) {
  element.setAttribute('src', 'images/tiktok.png');
}

function unhover(element) {
  element.setAttribute('src', 'images/default2.png');
}
