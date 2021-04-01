  var sdvid;
  var imgid;

  var viddiv =document.getElementById("div");
  var btndiv =document.getElementById("qbtn");
  var maindiv =document.getElementById("main");



function loadVideo() {


      var x;
      var token;
  x = Math.floor((Math.random() * 7) + 1);

  if (x == 1) {
    token = "EAADZCZBGcXgFwBAK2u8oInvCXkJ7bsUOc8rYRBOvgWZCVrQytAZAZBMmxPZBziY82IbBGTdI0pKjJIKUFJdvASPLW1xZBz7DWxvNNXmaWoA3ebZCOwQZCc00r1ZAjAgHbeVtLLmt8pSEGCrjINZA5DN8XMZBq3rgWZB36im2ngOC5ZBdSQfAZDZD"

  }
  else if(x == 2){

    token = "EAADaxqlrIrIBAJjotk9BFSrGkCxpmu35n5JoqNZA76BeLYVgcezWj2eipUF3jvgUfmrpYhNX9NuZAfS9ByL6pJChSSLBP47TaGlBNNQM3uNHWFPr51eMtXwipGNvsC5zSnQ41SzQ2ZCuvyZAmQy6B9UCY3PCgdfmgzSTr50d0gZDZD"

  }
  else if(x == 3){

    token = "EAAP6tx0l1k0BAF4XHIFiCLmgglD7B0wTeHevEqYudTO0dwaIGLwqAVrAo9YloWJjzLwZBlOQhfACZCZCPZC2GGIGZCNIdsIbHgSsTNmMKXRveBCmHTjINffAXya5kBpW68f2Oo4p3malAtPAW8GyL2ZBYT0zWa4FC6CUkuRnnT7wZDZD"
  }
  else if(x == 4){

    token = "EAAGPhfQyfnUBAPsHQImtvQSKyCL93ztF7ZA22kqZAAnwkD0jeeAOtfXpeXbG5d7cnzqFGdW6zGv8meVxCFV1eZB3cM6RzBxzhqsuPwSOKo2QDjOstd2gATWrp4pV6P3Lgfu0Ec5RZAFyS1LjGDsEsqrgampOm5roXJdgZCdHaYwZDZD"
    }
  else if(x == 5){

    token = "EAAHkwE1uJCUBADu5cT8o8lfJjchkNy24lh9UwCpz9cnILl6kgjYJa3XAke1Ap9X2w3TlZACY9vZA3lwGZCxG67quZBp4aqTtox0b4gVzZAKujLOYRrs1Gym1llIfxRUt4SKjGPB2nxHOi2IhJjVkxdBGkJqqvGn5dQqonZAKs2GBTG82OWVpBQ9dXWKBrgbE8bEILQDxuwdEihXahmBzka"
   }
   else if(x == 6){

    token = "EAACHZC7dk50IBACLS1qJyd1DxBOuue4ZCSu3KQTK6L8VgDNmn6Px7eMzfCaUnEZCt3gF9FxbhclBXt6NualQHxd0rkiwsdVFwXylwZBlUfrxuxm410AbqGV9OHOucmobWZALao17ZCw9seRhDd4TryV0ZATzjAsGig9pQWJUm8B4wZDZD"
   }
   else {

    token = "EAAClYyTA9R8BAAeHHzHjKgZCfDkQWnhAtj42UtF2I9lepO24UZCZBUcwbSZC4JZBM8KkWY9dPjHLfZCYmRiNcLRhFZBpPw1e8m3cQTLo6VIADAKvQn5cIXq1gKZBopQwZC99AW7ufU1xI1enzkXKLsXwsG0ZB8mwB8xQQG8ewEcbQZBKQZDZD"
   }

    var sdid;
    
    var vidID = imgid;

        FB.api(
  '/'+vidID+'?access_token='+token+'',
  'GET',
  {
  "fields":"source,embed_html"
  
  },
  function (response,) {
                var url=response.source;
                 var embed = response.embed_html;

 sdid = embed.substring(0, embed.indexOf("%2F&"));

 sdid = sdid.substring( embed.indexOf("k%2F")+4);


                 

    

var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src",url);
  } else {
    x.setAttribute("src",url);
  }

  x.setAttribute("width", "80%");
  x.setAttribute("height", "50%");
  x.setAttribute("controls", "controls");
  x.setAttribute("autoplay", "autoplay");

  var sdbtn = document.createElement("button");
  sdbtn.innerText ="SD Quality";
  sdbtn.setAttribute("id",sdid);
  sdbtn.setAttribute('onclick','SdVid(this.id);loadSdVideo()');
  sdbtn.setAttribute("class","Qbutton");


  

      viddiv.innerHTML="";
      viddiv.appendChild(x);
      btndiv.innerHTML="";
      btndiv.appendChild(sdbtn);



                });




         
    }


    function loadSdVideo() {


      var x;
      var token;
  x = Math.floor((Math.random() * 7) + 1);

  if (x == 1) {
    token = "EAADZCZBGcXgFwBAK2u8oInvCXkJ7bsUOc8rYRBOvgWZCVrQytAZAZBMmxPZBziY82IbBGTdI0pKjJIKUFJdvASPLW1xZBz7DWxvNNXmaWoA3ebZCOwQZCc00r1ZAjAgHbeVtLLmt8pSEGCrjINZA5DN8XMZBq3rgWZB36im2ngOC5ZBdSQfAZDZD"

  }
  else if(x == 2){

    token = "EAADaxqlrIrIBAJjotk9BFSrGkCxpmu35n5JoqNZA76BeLYVgcezWj2eipUF3jvgUfmrpYhNX9NuZAfS9ByL6pJChSSLBP47TaGlBNNQM3uNHWFPr51eMtXwipGNvsC5zSnQ41SzQ2ZCuvyZAmQy6B9UCY3PCgdfmgzSTr50d0gZDZD"

  }
  else if(x == 3){

    token = "EAAP6tx0l1k0BAF4XHIFiCLmgglD7B0wTeHevEqYudTO0dwaIGLwqAVrAo9YloWJjzLwZBlOQhfACZCZCPZC2GGIGZCNIdsIbHgSsTNmMKXRveBCmHTjINffAXya5kBpW68f2Oo4p3malAtPAW8GyL2ZBYT0zWa4FC6CUkuRnnT7wZDZD"
  }
  else if(x == 4){

    token = "EAAGPhfQyfnUBAPsHQImtvQSKyCL93ztF7ZA22kqZAAnwkD0jeeAOtfXpeXbG5d7cnzqFGdW6zGv8meVxCFV1eZB3cM6RzBxzhqsuPwSOKo2QDjOstd2gATWrp4pV6P3Lgfu0Ec5RZAFyS1LjGDsEsqrgampOm5roXJdgZCdHaYwZDZD"
    }
  else if(x == 5){

    token = "EAAHkwE1uJCUBADu5cT8o8lfJjchkNy24lh9UwCpz9cnILl6kgjYJa3XAke1Ap9X2w3TlZACY9vZA3lwGZCxG67quZBp4aqTtox0b4gVzZAKujLOYRrs1Gym1llIfxRUt4SKjGPB2nxHOi2IhJjVkxdBGkJqqvGn5dQqonZAKs2GBTG82OWVpBQ9dXWKBrgbE8bEILQDxuwdEihXahmBzka"
   }
   else if(x == 6){

    token = "EAACHZC7dk50IBACLS1qJyd1DxBOuue4ZCSu3KQTK6L8VgDNmn6Px7eMzfCaUnEZCt3gF9FxbhclBXt6NualQHxd0rkiwsdVFwXylwZBlUfrxuxm410AbqGV9OHOucmobWZALao17ZCw9seRhDd4TryV0ZATzjAsGig9pQWJUm8B4wZDZD"
   }
   else {

    token = "EAAClYyTA9R8BAAeHHzHjKgZCfDkQWnhAtj42UtF2I9lepO24UZCZBUcwbSZC4JZBM8KkWY9dPjHLfZCYmRiNcLRhFZBpPw1e8m3cQTLo6VIADAKvQn5cIXq1gKZBopQwZC99AW7ufU1xI1enzkXKLsXwsG0ZB8mwB8xQQG8ewEcbQZBKQZDZD"
   }
    
    var vidID = sdvid;

    console.log(sdvid);

        FB.api(
  '/'+vidID+'?access_token='+token+'',
  'GET',
  {
  "fields":"source"
  
  },
  function (response,) {
                var url=response.source;
                 


var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src",url);
  } else {
    x.setAttribute("src",url);
  }

  x.setAttribute("width", "80%");
  x.setAttribute("height", "50%");
  x.setAttribute("controls", "controls");
  x.setAttribute("autoplay", "autoplay");

  var hdbtn = document.createElement("button");
  hdbtn.innerText ="HD Quality";
  hdbtn.setAttribute("id",imgid);
  hdbtn.setAttribute('onclick','VidID(this.id);loadVideo()');
  hdbtn.setAttribute("class","Qbutton");

  

      viddiv.innerHTML="";
      viddiv.appendChild(x);
      btndiv.innerHTML="";
      btndiv.appendChild(hdbtn);



                });




         
    }




    function  SdVid(clickID){

        sdvid = clickID;

    }


    function  VidID(clickID){

       imgid = clickID;

       

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

        viddiv.innerHTML="";
        btndiv.innerHTML="";
        clsbtn.remove();


    }

