
document.body.innerHTML = `
<div id='data'></div>
<div style="display:flex;flex-direction:row;gap:20px;height:30vh;margin-top:20px">

<form id="urlForm">
<label for="urls">URLs (separated by commas or new lines):</label><br>
<textarea id="urls" rows="10" cols="50" placeholder="Enter URLs here..."></textarea><br><br>
<button type="button" onclick="extractLid()">Get Bid Values</button>
<span id='progress'></span><br>
<button type="button" id="copyBtn" onclick="copyValues(this)" hidden>Copy All</button>
<button type="button" id="bidVal" value='Copy Bid' onclick="copyOneCol('bidVal','remTime')" hidden>Copy Bids</button>
<button type="button" id="remTime" value='Copy Time' onclick="copyOneCol('remTime','bidVal')" hidden>Copy Time</button>
</form>
<div style="height:100%">
<label>Error Log</label>
<span style="color:red;" id="error-log" > </span>
</div>
</div>
<div id='main'></div>
<table id='oneCol' hidden></table>   
<style>
td {
   outline: solid 1px #b6b6b6;
   padding: 5px
}
th {
   outline: solid 1px #b6b6b6;
   padding: 5px
}
button {
   margin: 5px;
   cursor: pointer;
}
lot {
   display:flex;
   gap: 5px
}
textarea {
   resize:none;
}
.error{
   color:red;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>`

DIV = document.getElementById('main')
const TABLE = document.createElement('table')
var tbody = document.createElement('tbody')
TABLE.appendChild(tbody)
TABLE.id = "data-output"
DIV.appendChild(TABLE)

//lotID = 86300304
//auctionID = 264335

var dat
var miss=0;
var log = document.getElementById('error-log')
async function getData(lotid) {

   await fetch("https://jjkane.proxibid.com/asp/xml/LotTimeRemAllXML.asp?aid=0", {

      "body": lotid,
      "method": "POST"
   })
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/html"))
      .then(data => { document.getElementById('data').innerHTML = data.body.firstChild.innerHTML; 
         dat =data ;
         tableDat(data);

         if(data.body.firstChild.firstChild.children.length == 0){
            console.log("Couldn\'t retrieve data. Invalid or Broken URL")
            console.log("Check URL associated with item no "+parseInt(cnt+1))
            console.log("Jumping to next item")
            
            log.innerHTML += `<p>Couldn\'t retrieve data for item no `+parseInt(cnt+1)+`. Invalid or Broken URL<br>
            Check URL associated with item no `+parseInt(cnt+1)+` <a target='_blank' href=`+urlArr[cnt]+`>HERE..</a><br>
            Jumping to next item<p>`
            miss++
            cnt++
         }
         else{
            
            document.getElementById('progress').innerHTML = 'Retrieving data '+parseInt(cnt+1-miss)+' of '+arr.length+' URLs' 
            cnt++
         }
         if(cnt == arr.length){
            document.getElementById('progress').innerHTML = "Completed. "+ parseInt(cnt-miss)+" out of "+cnt+" data retrieved"
            tbody.lastChild.lastChild.remove()
            let btn = document.getElementById('copyBtn')
            let btn2 = document.getElementById('bidVal')
            let btn3 = document.getElementById('remTime')
            btn.hidden = false
            btn2.hidden = false
            btn3.hidden = false
         }
         else{
            getData(arr[cnt])
         }
      });

}


function generateTableHead() {  //generate table head

   let table = document.getElementById("data-output")
   let thead = table.createTHead();
   let row = thead.insertRow();

   th = document.createElement("th");
   text = document.createTextNode(" Lot # ");
   th.appendChild(text);
   row.appendChild(th);

   th = document.createElement("th");
   text = document.createTextNode(" Actual Bid ");
   th.appendChild(text);
   row.appendChild(th);

   th = document.createElement("th");
   text = document.createTextNode(" Time Remaining ");
   th.appendChild(text);
   row.appendChild(th);


}

function tableDat(data) {
   itemData = data.body.firstChild.firstChild
   lot = itemData.children[6]
   price = itemData.children[4]
   timeRem = itemData.children[0]

   let row = tbody.insertRow()
   let text;
   let cell;
   row.style.color = 'black !important'

   cell = row.insertCell()
   if (lot) {
      text = document.createTextNode(lot.innerText)
      console.log(parseInt(cnt+1)+". "+lot.innerText)
   }
   else {
      text = document.createTextNode('Item no. ')
   }
   cell.appendChild(text)
   cell.innerHTML +='<br>'

   cell = row.insertCell()
   if (price) {
      text = document.createTextNode(price.innerText)
   }
   else {
      text = document.createTextNode(cnt+1)
   }
   cell.appendChild(text)
   cell.classList.add('bidVal')
   cell.innerHTML +='<br>'

   cell = row.insertCell()
   if (timeRem) {
      res = ConvertSectoDay(parseInt(timeRem.innerText))
      text = document.createTextNode(res)
   }
   else {
      text = document.createTextNode(' Invalid URL')
      row.classList.add('error')
   }
   cell.appendChild(text)
   cell.classList.add('remTime')
   cell.innerHTML +='<br>'
   row.innerHTML +='<br>'

  
}


function ConvertSectoDay(n) {
   var day = parseInt(n / (24 * 3600));

   x = n % (24 * 3600);
   var hour = parseInt(x / 3600);
   
   x = n % 3600;
   var minutes = x / 60;
   
   let d = 'days'
   let h = 'hours'
   let m = 'minutes'

   if(day == 1){
      d = 'day'
   }

   if(hour == 1){
      h = 'hour'
   }
   
   if(minutes.toFixed() == 1){
      m = 'minute'
   }
   

   return (
      day + " " +d+ " " + hour + " " + h + " " + minutes.toFixed() + " " + m
   )
}

var cnt = 0;

var arr;
var urlArr
function extractLid() {
   reset()
   const input = document.getElementById('urls').value;
   const urlArray = input.split(/\s+|,/).filter(url => url.trim() !== '');
   urlArr = urlArray
   const extractedArray = urlArray.map(url => {
      const match = url.match(/[\?&]lid=([^&]*)/);
      return match ? match[1] : 'No ?lid= found';
   });
   console.log(extractedArray)
   arr = extractedArray

   //for (i = 0; i < arr.length; i++) {
   if(arr.length > 0){
      getData(arr[cnt])
   }
   else{
      document.getElementById('urls').focus()
   }   
  // }

}

function copyValues(el){
   let vals = TABLE.outerHTML
   navigator.clipboard.writeText(vals)
   el.innerText = "Copied"
}

function copyOneCol(cls,sibl){
   let t = document.getElementById('oneCol')
   t.innerHTML = ''
   let tb = document.createElement('tbody')
   t.appendChild(tb)

   let el = document.querySelectorAll('.'+cls+'')

   for(i=0;i<el.length;i++){
      let row = tb.insertRow()
      let text;
      let cell;

      cell = row.insertCell()
      if (!tbody.children[i].classList.contains('error')) {
         cell.innerHTML = el[i].innerHTML
      }
      else {
         cell.innerHTML = ' <br>'
      }


   }

   navigator.clipboard.writeText(t.outerHTML)
   document.getElementById(cls).innerText = 'Copied'
   document.getElementById(sibl).innerText = document.getElementById(sibl).value

}

function reset(){
   tbody.innerHTML = ''
   //document.getElementById("data-output").firstChild.innerHTML = ''
   cnt = 0
   miss=0;
   log.innerHTML = ''
   let btn = document.getElementById('copyBtn')
   btn.hidden = true
   btn.innerText = 'Copy All'

   let btn2 = document.getElementById('bidVal')
   let btn3 = document.getElementById('remTime')
   btn2.hidden = true
   btn3.hidden = true
   btn2.innerText = 'Copy Bid'
   btn3.innerText = 'Copy Time'
}

generateTableHead()
