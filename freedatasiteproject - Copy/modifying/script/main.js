      var x;
      var token;

  x = Math.floor((Math.random() * 7) + 1);

  if (x == 1) {
    token = token1;

  }
  else if(x == 2){

    token = token2; 

  }
  else if(x == 3){

    token = token3;
  }
  else if(x == 4){

    token = token4;
    }
  else if(x == 5){

    token = token5;
   }
   else if(x == 6){

    token = token6;
   }
   else {

    token = token7;
   }




  var viddiv =document.getElementById("div");
  var btndiv =document.getElementById("qbtn");


  var after = "";

function reset(){

 if (urlParams != null || urlParams !="") {

    window.history.replaceState({}, document.title, "/" +"");
  }
    checkCloseBtn();
    stopLoad();

  viddiv.innerHTML="";
  btndiv.innerHTML="";
  

  window.stop();
  document.getElementById("thumb").innerHTML="";
  after = "";

}

function thumbnails(){



      var div = document.getElementById('thumb');

          var title = document.getElementById("title");
          var titlespan = document.createElement("span");
          title.innerHTML="";

          titlespan.textContent = "HOME";
          titlespan.setAttribute("style","font-size:20px");
          title.appendChild(titlespan);


      var next = document.getElementById('navigation');
      next.innerHTML="";

          next.setAttribute("class","loader");

var time;


	 time =	setTimeout(function(){


		if (next.className == "loader") {

			
              next.removeAttribute("class");
              const span = document.createElement('span');
              var txt = document.createTextNode("Error Loading..! Please Reload");
              span.setAttribute("class","span");
              span.appendChild(txt);
              next.appendChild(span);
		}


	},20000);








var limit;



if (WURFL.is_mobile === true && WURFL.form_factor === "Smartphone") {
   limit = 24;
} 
else if (WURFL.is_mobile === true && WURFL.form_factor === "Tablet") {
    limit = 60;
}
else if (WURFL.is_mobile === false && WURFL.form_factor === "Desktop") {
    limit = 72;
}
else {
	limit = 24;
}



  FB.api(
  '/723002398151771/videos?access_token='+token+'&after='+after,
  'GET',
        {
          "fields":"thumbnails,id","limit":+limit
        },

  

  function(response) {




    for (var i = 0;  i < response.data.length; i++) {
      var thumburl = response.data[i].thumbnails.data[5].uri;
      var thumbID = response.data[i].id;
        
      clearTimeout(time);


      var img = new Image();
      

     
      div.appendChild(img);
      

        img.src = thumburl;
        img.setAttribute("class","image");
        img.id = thumbID;
        img.setAttribute('onclick','VidID(this.id);loadVideo()');
    }




      check = response.paging.next;

      after = response.paging.cursors.after;

      


      if (check !== undefined) {

      
      
      next.innerHTML="";
      next.removeAttribute("class");
      const button = document.createElement('button');
      button.innerText = "Load More..";
      next.appendChild(button);
      button.setAttribute('onclick','thumbnails()');
      button.setAttribute("type", "button");
      button.setAttribute("class","button");

    }

    else{
      

      next.innerHTML="";
      next.removeAttribute("class");
      const span = document.createElement('span');
      var txt = document.createTextNode("No More Videos to load.. Check Back later");
      span.setAttribute("class","span2");
      span.appendChild(txt);
      next.appendChild(span);

 
    }

  }



);

}

