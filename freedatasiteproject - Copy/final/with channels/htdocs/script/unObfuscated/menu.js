
      var menudiv = document.getElementById("menu");
          var menubtn = document.getElementById("menubtn");

          var span1 = document.getElementById("span1");
          var span2 = document.getElementById("span2");
          var span3 = document.getElementById("span3");
          var span4 = document.getElementById("span4");
          var span5 = document.getElementById("span5"); 

          var cat = document.querySelectorAll("[name='category']"); 
          var chnl = document.querySelectorAll("[name='channel']");
          

          
          

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
          span3.setAttribute("onclick","showChannels()");

            document.getElementById("overlay").setAttribute("class","overlay");
            document.getElementById("overlay").setAttribute("onclick","menuClose()");
          
          


        }


        function menuClose(){

      
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

         for (var i = 0; i < chnl.length ; i++) {

            chnl[i].setAttribute("class","catspan");

        }

        

      }

//categories


        function showCategories(){

            span3.setAttribute("class","menuspan");
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

            span3.setAttribute("class","menuspan-visible");
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

          
          next.setAttribute("class","loader");

 var time;


   time = setTimeout(function(){


    if (next.className == "loader") {

      
              next.removeAttribute("class");
              const span = document.createElement('span');
              var txt = document.createTextNode("Error Loading..! Please Reload");
              span.setAttribute("class","span");
              span.appendChild(txt);
              next.appendChild(span);
    }


  },20000);


     var category = catId;

       var after = "";  


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
        


            FB.api(
        '/723002398151771/videos?access_token='+token+'&after='+after,
        'GET',
              {
                "fields":"picture,id,description,comments","limit":300
              },

        

        function(response) {


          var res = response; 
          var desc;
          var com;
          var cat_pos;
          var comMsg;

          

          for (var i = 0;  i < response.data.length; i++) {

                desc = response.data[i].description;
                com = response.data[i].comments;
            var thumburl = response.data[i].picture;
            var thumbID = response.data[i].id;
                clearTimeout(time);

          if (desc != undefined) {

            cat_pos = desc.indexOf(""+category+"");

           if (cat_pos > -1) {


              var img = new Image();
              
        
              
              div.appendChild(img);
              

                img.src = thumburl;
                img.setAttribute("class","image");
                img.id = thumbID;
                img.setAttribute('onclick','VidID(this.id);loadVideo()');
            }

         
            }
           else if(com != undefined){

              comMsg = response.data[i].comments.data[0].message;

              if (comMsg != undefined) {

                cat_pos = comMsg.indexOf(""+category+"");

              if (cat_pos > -1) {


              var img = new Image();
              
        
              
              div.appendChild(img);
              

                img.src = thumburl;
                img.setAttribute("class","image");
                img.id = thumbID;
                img.setAttribute('onclick','VidID(this.id);loadVideo()');
            }

            }

            }

              
              


            


       } 






       var check = response.paging.next;

              after = response.paging.cursors.after;

            

              if (check !== undefined) {

            
              
              next.innerHTML="";
              next.removeAttribute("class");
              const button = document.createElement('button');
              button.innerText = "Load More..";
              next.appendChild(button);
              button.setAttribute('onclick','loadCategory()');
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



        });



      }


//Channels



        function showChannels(){

            
        //  span4.setAttribute("class","menuspan");
        //  span5.setAttribute("class","menuspan");

        

          for (var i = 0; i < chnl.length ; i++) {

            chnl[i].setAttribute("class","cat-menu");
            chnl[i].setAttribute("onclick","loadChannel(this.id);chnlTitle(this.innerText)");

        }
          
          
          

          

          span3.setAttribute("onclick","closeChannel()");
          span2.setAttribute("onclick","showCategories();closeChannel()");



        }

        function chnlTitle(text){

          var title = document.getElementById("title");
          var titlespan = document.createElement("span");
          title.innerHTML="";

          titlespan.textContent = text;
          titlespan.setAttribute("style","font-size:20px");
          title.appendChild(titlespan);



        }

        function closeChannel(){

            
        //  span4.setAttribute("class","menuspan-visible");
        //  span5.setAttribute("class","menuspan-visible");


          for (var i = 0; i < chnl.length ; i++) {

            chnl[i].setAttribute("class","catspan");

        }
          

          

          span3.setAttribute("onclick","showChannels()");

        }


        function loadChannel(chnlId){


          

          var div = document.getElementById("thumb");
          var next = document.getElementById('navigation');
          div.innerHTML="";
          next.innerHTML="";

          next.setAttribute("class","loader");

var time;


   time = setTimeout(function(){


    if (next.className == "loader") {

      
              next.removeAttribute("class");
              const span = document.createElement('span');
              var txt = document.createTextNode("Error Loading..! Please Reload");
              span.setAttribute("class","span");
              span.appendChild(txt);
              next.appendChild(span);
    }


  },20000); 


     var channel = chnlId;

       var after = "";  


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

        


            FB.api(
        '/723002398151771/videos?access_token='+token+'&after='+after,
        'GET',
              {
                "fields":"picture,id,description,comments","limit":300
              },

        

        function(response) {


          var res = response; 
          var desc;
          var com;
          var chnl_pos;
          var comMsg;

          

          for (var i = 0;  i < response.data.length; i++) {

                desc = response.data[i].description;
                com = response.data[i].comments;
            var thumburl = response.data[i].picture;
            var thumbID = response.data[i].id;
                clearTimeout(time);
                

          if (desc != undefined) {

            chnl_pos = desc.indexOf(""+channel+"");

           if (chnl_pos > -1) {


              var img = new Image();
              
        
              
              div.appendChild(img);
              

                img.src = thumburl;
                img.setAttribute("class","image");
                img.id = thumbID;
                img.setAttribute('onclick','VidID(this.id);loadVideo()');
            }

         
            }
           else if(com != undefined){

              comMsg = response.data[i].comments.data[0].message;

              if (comMsg != undefined) {

                chnl_pos = comMsg.indexOf(""+channel+"");

              if (chnl_pos > -1) {


              var img = new Image();
              
        
              
              div.appendChild(img);
              

                img.src = thumburl;
                img.setAttribute("class","image");
                img.id = thumbID;
                img.setAttribute('onclick','VidID(this.id);loadVideo()');
            }

            }

            }

              
              


            


       } 

       var check = response.paging.next;

              after = response.paging.cursors.after;

            

              if (check !== undefined) {

            
              
              next.innerHTML="";
              next.removeAttribute("class");
              const button = document.createElement('button');
              button.innerText = "Load More..";
              next.appendChild(button);
              button.setAttribute('onclick','loadChannel()');
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



        });



      }












