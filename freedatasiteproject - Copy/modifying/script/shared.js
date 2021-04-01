var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var video = urlParams.get('v');


function shared(){


if (video != null || video !="") {

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

    var sdid;
    
    var vidID = video;

        FB.api(
  '/'+vidID+'?access_token='+token+'',
  'GET',
  {
  "fields":"source,embed_html"
  
  },
  function (response,) {
                url=response.source;
                 var embed = response.embed_html;

  if (url != null) {

 sdid = embed.substring(0, embed.indexOf("%2F&"));

 sdid = sdid.substring( embed.indexOf("k%2F")+4);


                 

    

 x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src",url);
  } else {
    x.setAttribute("src",url);
  }
  x.setAttribute("id","video");

  x.setAttribute("width", "80%");
  x.setAttribute("height", "50%");
  x.setAttribute("controls", "controls");
  x.setAttribute("autoplay", "true");
  x.setAttribute("preload", "auto");

  var sdbtn = document.createElement("button");
  sdbtn.innerText ="SD Quality";
  sdbtn.setAttribute("id","723002398151771_"+sdid);
  sdbtn.setAttribute('onclick','SdVid(this.id);sharedSD()');
  sdbtn.setAttribute("class","Qbutton");

  var shrbtn = document.createElement("button");
  shrbtn.innerText = "Share";
  shrbtn.setAttribute("id",vidID);
  shrbtn.setAttribute('onclick',"shareLink(this.id)");
  shrbtn.setAttribute("class","shrbutton");

  var shrspan = document.createElement("span");
  shrspan.setAttribute("class","tooltiptext");
  shrspan.setAttribute("id","myTooltip");
  shrspan.innerText="Copy Link";
  

      viddiv.innerHTML="";
      viddiv.appendChild(x);
      btndiv.innerHTML="";
      btndiv.appendChild(sdbtn);
      shrbtn.appendChild(shrspan);
      btndiv.appendChild(shrbtn);

 		

      checkCloseBtn();
      AddCloseBtn();


            }    });




         
    }

}

function sharedSD() {

      stopLoad();

      
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
    
    var vidID = sdvid;

    

        FB.api(
  '/'+vidID+'?access_token='+token+'',
  'GET',
  {
  "fields":"source"
  
  },
  function (response,) {
                 url=response.source;
                 


 x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src",url);
  } else {
    x.setAttribute("src",url);
  }
  x.setAttribute("id","video");
  x.setAttribute("width", "80%");
  x.setAttribute("height", "50%");
  x.setAttribute("controls", "controls");
  x.setAttribute("autoplay", "true");
  x.setAttribute("preload", "auto");


  var hdbtn = document.createElement("button");
  hdbtn.innerText ="HD Quality";
  hdbtn.setAttribute("id",video);
  hdbtn.setAttribute('onclick','VidID(this.id);shared()');
  hdbtn.setAttribute("class","Qbutton");


  var shrbtn = document.createElement("button");
  shrbtn.innerText = "Share";
  shrbtn.setAttribute("id",video);
  shrbtn.setAttribute('onclick',"shareLink(this.id)");
  shrbtn.setAttribute("class","shrbutton");

  var shrspan = document.createElement("span");
  shrspan.setAttribute("class","tooltiptext");
  shrspan.setAttribute("id","myTooltip");
  shrspan.innerText="Copy Link";
  

  

      viddiv.innerHTML="";
      viddiv.appendChild(x);
      btndiv.innerHTML="";
      btndiv.appendChild(hdbtn);
      shrbtn.appendChild(shrspan);
      btndiv.appendChild(shrbtn);


      checkCloseBtn();
      AddCloseBtn();

                });




         
    }



function shareLink(clickID){



  var copyText = "https://www.videoxhub.ml/?v="+clickID;
  
  navigator.clipboard.writeText(copyText);

 var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to Clipboard: " + copyText;


}