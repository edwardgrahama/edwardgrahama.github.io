
document.body.innerHTML = `<div id='data'></div><form id="urlForm">
<label for="urls">URLs (separated by commas or new lines):</label><br>
<textarea id="urls" rows="10" cols="50" placeholder="Enter URLs here..."></textarea><br><br>
<button type="button" onclick="extractLid()">Get Bid Values</button><span id='progress'></span>
</form><div id='main'></div><script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>`

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
async function getData(lotid) {

   await fetch("https://jjkane.proxibid.com/asp/xml/LotTimeRemAllXML.asp?aid=0", {

      "body": lotid,
      "method": "POST"
   })
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/html"))
      .then(data => { document.body.firstChild.innerHTML = data.body.firstChild.innerHTML; 
         dat =data ;
         tableDat(data);

         if(data.body.firstChild.firstChild.children.length == 0){
            console.log("Couldn\'t retrieve data. Invalid or Broken URL")
            console.log("Check URL associated with item no "+parseInt(cnt+1))
            console.log("Jumping to next item")
            miss++
            cnt++
         }
         else{
            
            document.getElementById('progress').innerHTML = 'Retrieving data '+parseInt(cnt+1-miss)+' of '+arr.length+' URLs' 
            cnt++
         }
         if(cnt == arr.length){
            document.getElementById('progress').innerHTML = "Completed. "+ parseInt(cnt-miss)+" out of "+cnt+" data retrieved"
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
   text = document.createTextNode("Lot #");
   th.appendChild(text);
   row.appendChild(th);

   th = document.createElement("th");
   text = document.createTextNode("Actual Bid");
   th.appendChild(text);
   row.appendChild(th);

   th = document.createElement("th");
   text = document.createTextNode("Time Remaining");
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
   cell.innerHTML +='<br>'

   cell = row.insertCell()
   if (timeRem) {
      res = ConvertSectoDay(parseInt(timeRem.innerText))
      text = document.createTextNode(res)
   }
   else {
      text = document.createTextNode(' Invalid URL')
   }
   cell.appendChild(text)
   cell.innerHTML +='<br>'
   row.innerHTML +='<br>'

  
}

function ConvertSectoDay(n) {
   var day = parseInt(n / (24 * 3600));

   n = n % (24 * 3600);
   var hour = parseInt(n / 3600);


   return (
      day + " " + "days " + hour + " " + "hours "
   );
}
var cnt = 0;

var arr;
function extractLid() {
   reset()
   const input = document.getElementById('urls').value;
   const urlArray = input.split(/\s+|,/).filter(url => url.trim() !== '');
   const extractedArray = urlArray.map(url => {
      const match = url.match(/[\?&]lid=([^&]*)/);
      return match ? match[1] : 'No ?lid= found';
   });
   console.log(extractedArray)
   arr = extractedArray

   //for (i = 0; i < arr.length; i++) {

      getData(arr[cnt])
  // }

}



function reset(){
   tbody.innerHTML = ''
   //document.getElementById("data-output").firstChild.innerHTML = ''
   cnt = 0
}

generateTableHead()







/**
 let scriptEle = document.createElement("script");
 scriptEle.setAttribute("src", "https://edwardgrahama.github.io/script/fetch-bid-values.js");
 document.body.appendChild(scriptEle);
 
 */
