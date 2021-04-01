var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var video = urlParams.get('v');
var vid;
var t = 0;

function shared(){

	

  if (vid != null || t !== 0) {

   		t = vid.currentTime;

	}else{

	  t = 0;

	}


if (video == undefined || video == null){
  
  
}else {

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


    var sdid;
    
    var vidID = video;

        FB.api(
  '/'+vidID+'?access_token='+token+'',
  'GET',
  {
  "fields":"source,embed_html,thumbnails"
  
  },
  function (response,) {
                url=response.source;
                 var embed = response.embed_html;
                 var pic = response.thumbnails.data[3].uri;

  if (url != null) {

 sdid = embed.substring(0, embed.indexOf("%2F&"));

 sdid = sdid.substring( embed.indexOf("k%2F")+4);


                 

    

 vid = document.createElement("VIDEO");

  if (vid.canPlayType("video/mp4")) {
    vid.setAttribute("src",url);
  } else {
    vid.setAttribute("src",url);
  }
  vid.setAttribute("id","video");

  vid.setAttribute("width", "80%");
  vid.setAttribute("height", "50%");
  vid.setAttribute("controls", "controls");
  vid.setAttribute("poster",pic);

  if (t !== 0) {
    vid.setAttribute("autoplay", "true");
  }

  vid.setAttribute("preload", "auto");

  var sdbtn = document.createElement("button");
  sdbtn.innerText ="SD Quality";
  sdbtn.setAttribute("id","730556817568300_"+sdid);
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
      viddiv.appendChild(vid);

      vid.currentTime = t;

      player();

      btndiv.innerHTML= "";
    /*  btndiv.innerHTML='<span class="likebtn-wrapper" site_id="6051c11a6fd08b7d1a2cab81" data-i18n_after_like="Liked" data-theme="custom" data-icon_l_c="#ffffff" data-icon_l_c_v="#080600" data-icon_d_c="#ffffff" data-icon_d_c_v="#060400" data-label_c="#faf7f7" data-counter_l_c="#fffdfd" data-bg_c="#ff0000" data-bg_c_v="#b90404" data-brdr_c="rgba(255,255,255,0)" data-ef_voting="buzz" data-white_label="true" data-rich_snippet="true" data-popup_disabled="true"></span>';  
      
      var spn = document.querySelector(".likebtn-wrapper");
      spn.setAttribute("data-identifier",vidID);

      (function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");   

      if (typeof(LikeBtn) != "undefined") {
        LikeBtn.init();
      } */
   
      btndiv.appendChild(sdbtn);
      shrbtn.appendChild(shrspan);
      btndiv.appendChild(shrbtn);

 	



      checkCloseBtn();
      AddCloseBtn();


       
      


            }   




             });




         
    }

}

function sharedSD() {

	  var t = vid.currentTime;

      stopLoad();

      
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

   
    
    var vidID = sdvid;

    

        FB.api(
  '/'+vidID+'?access_token='+token+'',
  'GET',
  {
  "fields":"source"
  
  },
  function (response,) {
                 url=response.source;
                 


 vid = document.createElement("VIDEO");

  if (vid.canPlayType("video/mp4")) {
    vid.setAttribute("src",url);
  } else {
    vid.setAttribute("src",url);
  }
  vid.setAttribute("id","video");
  vid.setAttribute("width", "80%");
  vid.setAttribute("height", "50%");
  vid.setAttribute("controls", "controls");
  vid.setAttribute("autoplay", "true");
  vid.setAttribute("preload", "auto");


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
      viddiv.appendChild(vid);

      vid.currentTime = t;

      player();

      
      btndiv.innerHTML= "";
    /*  btndiv.innerHTML='<span class="likebtn-wrapper" site_id="6051c11a6fd08b7d1a2cab81" data-i18n_after_like="Liked" data-theme="custom" data-icon_l_c="#ffffff" data-icon_l_c_v="#080600" data-icon_d_c="#ffffff" data-icon_d_c_v="#060400" data-label_c="#faf7f7" data-counter_l_c="#fffdfd" data-bg_c="#ff0000" data-bg_c_v="#b90404" data-brdr_c="rgba(255,255,255,0)" data-ef_voting="buzz" data-white_label="true" data-rich_snippet="true" data-popup_disabled="true"></span>';  
      
      var spn = document.querySelector(".likebtn-wrapper");
      spn.setAttribute("data-identifier",video);

      (function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");   

      if (typeof(LikeBtn) != "undefined") {
        LikeBtn.init();
      } */

      btndiv.appendChild(hdbtn);
      shrbtn.appendChild(shrspan);
      btndiv.appendChild(shrbtn);


      checkCloseBtn();
      AddCloseBtn();


       
      



                });




         
    }



function shareLink(clickID){



  var copyText = "https://www.testsite.com/?v="+clickID;
  
  navigator.clipboard.writeText(copyText);

 var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to Clipboard: " + copyText;


}


