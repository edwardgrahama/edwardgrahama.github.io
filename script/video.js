  var sdvid;
  var imgid;

  var viddiv =document.getElementById("div");
  var btndiv =document.getElementById("qbtn");
  var maindiv =document.getElementById("main");
  var url;
  var vid;
  var t = 0;

function loadVideo() {

    

  if (vid != null || t !== 0) {

   t = vid.currentTime;

}else{

  t = 0;

}

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



   

    var sdid;
    
    var vidID = imgid;
    
    

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
  sdbtn.setAttribute('onclick','SdVid(this.id);loadSdVideo()');
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

        fullscreen()


      btndiv.innerHTML="";
     // btndiv.innerHTML='<span class="likebtn-wrapper" site_id="6051c11a6fd08b7d1a2cab81" data-i18n_after_like="Liked" data-theme="custom" data-icon_l_c="#ffffff" data-icon_l_c_v="#080600" data-icon_d_c="#ffffff" data-icon_d_c_v="#060400" data-label_c="#faf7f7" data-counter_l_c="#fffdfd" data-bg_c="#ff0000" data-bg_c_v="#b90404" data-brdr_c="rgba(255,255,255,0)" data-ef_voting="buzz" data-white_label="true" data-rich_snippet="true" data-popup_disabled="true"></span>';  
      
     // var spn = document.querySelector(".likebtn-wrapper");
     // spn.setAttribute("data-identifier",vidID);
      
     // (function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");   

     // if (typeof(LikeBtn) != "undefined") {
     //   LikeBtn.init();
     // }  
      
     
      btndiv.appendChild(sdbtn);
      shrbtn.appendChild(shrspan);
      btndiv.appendChild(shrbtn);

      checkCloseBtn();
      AddCloseBtn();

      
        window.history.replaceState({}, document.title, "/" +"?v="+vidID);
       
      
       });

         

         
    }


    function loadSdVideo() {

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
  hdbtn.setAttribute("id",imgid);
  hdbtn.setAttribute('onclick','VidID(this.id);loadVideo()');
  hdbtn.setAttribute("class","Qbutton");


  var shrbtn = document.createElement("button");
  shrbtn.innerText = "Share";
  shrbtn.setAttribute("id",imgid);
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

       fullscreen()

      btndiv.innerHTML="";
      //btndiv.innerHTML='<span class="likebtn-wrapper" site_id="6051c11a6fd08b7d1a2cab81" data-i18n_after_like="Liked" data-theme="custom" data-icon_l_c="#ffffff" data-icon_l_c_v="#080600" data-icon_d_c="#ffffff" data-icon_d_c_v="#060400" data-label_c="#faf7f7" data-counter_l_c="#fffdfd" data-bg_c="#ff0000" data-bg_c_v="#b90404" data-brdr_c="rgba(255,255,255,0)" data-ef_voting="buzz" data-white_label="true" data-rich_snippet="true" data-popup_disabled="true"></span>';  
      
      //var spn = document.querySelector(".likebtn-wrapper");
     // spn.setAttribute("data-identifier",imgid);

      //(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");   

     // if (typeof(LikeBtn) != "undefined") {
      //  LikeBtn.init();
      //}  


      btndiv.appendChild(hdbtn);
      shrbtn.appendChild(shrspan);
      btndiv.appendChild(shrbtn);

     

      checkCloseBtn();
      AddCloseBtn();
      
      
      
      

                });




         
    }




    function  SdVid(clickID){

        sdvid = clickID;

    }


    function  VidID(clickID){

       
       imgid = clickID;

       

    }

    function  resetTime(){

       t = 0;
       
    }




    function AddCloseBtn(){



        var CloseBtn = document.createElement("button");
        CloseBtn.setAttribute("class","close-button");
        CloseBtn.setAttribute("id","CloseBtn");
        CloseBtn.setAttribute('onclick','CloseBtn();menuClose()');
        CloseBtn.innerText = "Close X";

        maindiv.appendChild(CloseBtn);


    }

    function checkCloseBtn(){

        var closebtn = document.getElementById("CloseBtn");

        if (closebtn != undefined) {

          closebtn.remove();

        }


    }


    function CloseBtn(){


       var clsbtn =  document.getElementById("CloseBtn");
    
        
        stopLoad();
        viddiv.innerHTML="";
        btndiv.innerHTML="";
        clsbtn.remove();

        window.history.replaceState({}, document.title, "/" +"");

    }

    function stopLoad(){



       vid = document.getElementById("video");

        if (vid != null) {

         
            vid.src="";
            vid.load();

          
        }
    }




    function player(){

     


    fluidPlayer(
        'video', {
  "layoutControls": {

    "controlBar": {
      "autoHideTimeout": 3,
      "animated": true,
      "autoHide": true
    },
    "htmlOnPauseBlock": {
      "html": null,
      "height": null,
      "width": null
    },

    "theatreSettings": {
      "width":     '100%', 
      "height":    '50%', 
      "marginTop": 50, 
      "horizontalAlign": 'center'
      }, 
    "autoPlay": false,
    "mute": true,
    "allowTheatre": false,
    "playPauseAnimation": true,
    "playbackRateEnabled": true,
    "allowDownload": false,
    "playButtonShowing": true,
    "fillToContainer": true,
    "primaryColor": "red",
    "posterImage": "",
    "layout": 'default'
   
  },
  "vastOptions": {
    "adList": [],
    "adCTAText": false,
    "adCTATextPosition": ""
  }
})

    var fldvid = document.getElementById("fluid_video_wrapper_video");

    fldvid.style.height = "50%";
    fldvid.style.width = "80%";





    }


    function fullscreen(){


    if ("orientation" in screen) {


        document.getElementById("video_fluid_control_fullscreen").setAttribute("onclick", "screen.orientation.lock('landscape-primary');exitFullscreen()");
  
        

    }
  }

   function exitFullscreen(){

        screen.orientation.unlock();
       // document.getElementById("video_fluid_control_fullscreen").setAttribute("onclick", "screen.orientation.unlock()");

        

    }









