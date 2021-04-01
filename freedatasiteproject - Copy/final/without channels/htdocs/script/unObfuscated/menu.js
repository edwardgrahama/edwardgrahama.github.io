
      var menudiv = document.getElementById("menu");
          var menubtn = document.getElementById("menubtn");

          var span1 = document.getElementById("span1");
          var span2 = document.getElementById("span2");
          var span3 = document.getElementById("span3");
          var span4 = document.getElementById("span4");
          var span5 = document.getElementById("span5");

          var cat = document.querySelectorAll("[name='category']"); 
          

          
          

        function menuOpen(){

          

         var x = document.querySelectorAll(".menuspan");

         for(var i = 0;i<x.length;i++){ 
          
            x[i].classList.remove("menuspan");
            x[i].classList.add("menuspan-visible");

          }


          menubtn.removeAttribute("onclick");
          menubtn.setAttribute("onclick","menuClose()");
          menubtn.setAttribute("class","fa fa-arrow-left")
          span2.setAttribute("onclick","showCategories()");

            document.getElementById("overlay").setAttribute("class","overlay");
            document.getElementById("overlay").setAttribute("onclick","menuClose()");
          
          


        }


        function menuClose(){

      var span6 = document.getElementById("span6");
      document.getElementById("overlay").removeAttribute("class");
      document.getElementById("overlay").removeAttribute("onclick");


          var x = document.querySelectorAll(".menuspan-visible");

         for(var i = 0;i<x.length;i++){ 
          
            x[i].classList.remove("menuspan-visible");
            x[i].classList.add("menuspan");

          }

          menubtn.removeAttribute("onclick");
          menubtn.setAttribute("onclick","menuOpen()");
          menubtn.setAttribute("class","fa fa-bars")
          
          menubtn.innerText="";


         for (var i = 0; i < cat.length ; i++) {

            cat[i].setAttribute("class","catspan");

        }

        

      }


        function showCategories(){

        //  span3.setAttribute("class","menuspan");
        //  span4.setAttribute("class","menuspan");
        //  span5.setAttribute("class","menuspan");

        

          for (var i = 0; i < cat.length ; i++) {

            cat[i].setAttribute("class","cat-menu");
            cat[i].setAttribute("onclick","loadCategory(this.id);catTitle(this.innerText)");

        }
          
          
          

          

          span2.setAttribute("onclick","closeCategory()");



        }

        function catTitle(text){

          var title = document.getElementById("title");
          var titlespan = document.createElement("span");
          title.innerHTML="";

          titlespan.textContent = text;
          titlespan.setAttribute("style","font-size:20px");
          title.appendChild(titlespan);



        }

        function closeCategory(){

        //  span3.setAttribute("class","menuspan-visible");
        //  span4.setAttribute("class","menuspan-visible");
        //  span5.setAttribute("class","menuspan-visible");


          for (var i = 0; i < cat.length ; i++) {

            cat[i].setAttribute("class","catspan");

        }
          

          

          span2.setAttribute("onclick","showCategories()");

        }


        function loadCategory(catId){


          

          var div = document.getElementById("thumb");
          var next = document.getElementById('navigation');
          div.innerHTML="";
          next.innerHTML="";

          const span = document.createElement('span');
              var txt = document.createTextNode("Loading..");
              span.setAttribute("class","span");
              span.appendChild(txt);
              next.appendChild(span);

          setTimeout(function(){


        if (span.innerText == "Loading..") {

          span.innerText ="Error Loading..! Check Your Connection & Try Again..";
        }


      },20000);  


     var category = catId;

       var after = "";  


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

        


            FB.api(
        '/723002398151771/videos?access_token='+token+'&after='+after,
        'GET',
              {
                "fields":"picture,id,description","limit":300
              },

        

        function(response) {


          var res = response; 
          var desc;
          var cat_pos;


          for (var i = 0;  i < response.data.length; i++) {

                desc = response.data[i].description;
            var thumburl = response.data[i].picture;
            var thumbID = response.data[i].id;
                

          if (desc != undefined) {

            cat_pos = desc.indexOf(""+category+"");

           if (cat_pos > -1) {


              var img = new Image();
              
        
              
              div.appendChild(img);
              

                img.src = thumburl;
                img.setAttribute("class","image");
                img.id = thumbID;
                img.setAttribute('onclick','VidID(this.id);loadVideo();setTimeout(checkCloseBtn,1999);setTimeout(AddCloseBtn, 2000)');
            }

         
            }


       


    

       } 

       var check = response.paging.next;

              after = response.paging.cursors.after;

            

              if (check !== undefined) {

            
              
              next.innerHTML="";
              const button = document.createElement('button');
              button.innerText = "Load More..";
              next.appendChild(button);
              button.setAttribute('onclick','loadCategory()');
              button.setAttribute("type", "button");
              button.setAttribute("class","button");

            }

            else{
              next.innerHTML="";
              const span = document.createElement('span');
              var txt = document.createTextNode("No More Videos to load.. Check Back later");
              span.setAttribute("class","span2");
              span.appendChild(txt);
              next.appendChild(span); 

    

       }



        });



      }
