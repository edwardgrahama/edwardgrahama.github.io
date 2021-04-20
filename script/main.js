      var x;
      var token;

  x = Math.floor((Math.random() * 8) + 1);

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
   else if(x == 7){

    token = token7;
   }
   else {

    token = token8;
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

var thumbcheck;

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

              if (div.innerHTML != "") {

                      setTimeout(function(){

                      next.innerHTML="";
                      next.removeAttribute("class");
                      const button = document.createElement('button');
                      button.innerText = "Load More..";
                      next.appendChild(button);
                      button.setAttribute('onclick','thumbnails()');
                      button.setAttribute("type", "button");
                      button.setAttribute("class","button");


                      },2000);




              }



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
  '730556817568300/videos?access_token='+token+'&after='+after,
  'GET',


//2580737552232712 - download backup
//730556817568300 - movies

        {
          "fields":"thumbnails,id","limit":+limit

        },

  

  function(response) {




    for (var i = 0;  i < response.data.length; i++) {

      thumbcheck = response.data[i].thumbnails;
      

        
      clearTimeout(time);

      if (thumbcheck == null || thumbcheck == undefined) {

      }
      else{

      var thumburl = response.data[i].thumbnails.data[5].uri;
      var thumbID = response.data[i].id;

      var img = new Image();
      

     
      div.appendChild(img);
      

        img.src = thumburl;
        img.setAttribute("class","image");
        img.id = thumbID;
        img.setAttribute('onclick','VidID(this.id);loadVideo();resetTime()');
        img.setAttribute('onmouseenter','doMouseOver(this)');

        }
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









function doMouseOver(x){

  
  
  
  var id = x.id;






x.setAttribute("onmouseleave","doMouseOut(this)");
x.removeAttribute("onmouseenter");


setTimeout(function(){

  if (x.hasAttribute("onmouseleave")) {

FB.api(
  '/'+id+'?access_token='+token+'',
  'GET',
  {"fields":"thumbnails"},


  function(response) {

    var defsrc = response.thumbnails.data[5].uri;

    var i = 2;

   var interval =  setInterval(function(){  


      
    var thumbs = response.thumbnails.data[i].uri;
    

    

    x.src= thumbs;

      if (i<9) {

        i++;

      }else{

        i = 2;
        

      }

      
    },600);

    var stop = setInterval(function(){

      if (x.hasAttribute("onmouseenter")) {

        clearInterval(interval);

        setTimeout(function(){

          x.setAttribute("src",defsrc);

          clearInterval(stop);

        },500);
        


      }

    },100);


    

  }
);


}


},500);

  


}


function doMouseOut(x){



    x.setAttribute("onmouseenter","doMouseOver(this)");
    x.removeAttribute("onmouseleave");
    


}
