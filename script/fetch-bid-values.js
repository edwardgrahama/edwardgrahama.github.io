
document.body.innerHTML = `<div id='data'></div><form id="urlForm">
<label for="urls">URLs (separated by commas or new lines):</label><br>
<textarea id="urls" rows="10" cols="50" placeholder="Enter URLs here..."></textarea><br><br>
<button type="button" onclick="extractLid()">Get Bid Values</button>
</form><div id='main'></div><script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>`

DIV = document.getElementById('main')
const TABLE = document.createElement('table')
var tbody = document.createElement('tbody')
TABLE.appendChild(tbody)
TABLE.id = "data-output"
DIV.appendChild(TABLE)

//lotID = 86300304
//auctionID = 264335
async function getData(lotid) {

   await fetch("https://jjkane.proxibid.com/asp/xml/LotTimeRemAllXML.asp?aid=0", {

      "body": lotid,
      "method": "POST"
   })
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/html"))
      .then(data => { document.body.firstChild.innerHTML = data.body.firstChild.innerHTML; tableDat(data) });

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

function tableDat() {
   itemData = document.getElementById('data').firstChild
   lot = itemData.children[6].innerText
   price = itemData.children[4].innerText
   timeRem = itemData.children[0].innerText

   let row = tbody.insertRow()
   let text;
   let cell;
   row.style.color = 'black !important'

   cell = row.insertCell()
   if (lot) {
      text = document.createTextNode(lot)

   }
   else {
      text = document.createTextNode('')
   }
   cell.appendChild(text)
   cell.innerHTML +='<br>'

   cell = row.insertCell()
   if (price) {
      text = document.createTextNode(price)
   }
   else {
      text = document.createTextNode('')
   }
   cell.appendChild(text)
   cell.innerHTML +='<br>'

   cell = row.insertCell()
   if (timeRem) {
      res = ConvertSectoDay(parseInt(timeRem))
      text = document.createTextNode(res)
   }
   else {
      text = document.createTextNode('')
   }
   cell.appendChild(text)
   cell.innerHTML +='<br>'
   row.innerHTML +='<br>'

   console.log(lot)
}

function ConvertSectoDay(n) {
   var day = parseInt(n / (24 * 3600));

   n = n % (24 * 3600);
   var hour = parseInt(n / 3600);


   return (
      day + " " + "days " + hour + " " + "hours "
   );
}


var arr;
function extractLid() {
   const input = document.getElementById('urls').value;
   const urlArray = input.split(/\s+|,/).filter(url => url.trim() !== '');
   const extractedArray = urlArray.map(url => {
      const match = url.match(/[\?&]lid=([^&]*)/);
      return match ? match[1] : 'No ?lid= found';
   });
   console.log(extractedArray)
   arr = extractedArray

   for (i = 0; i < arr.length; i++) {
      getData(arr[i])
   }
}

generateTableHead()



/**
 * let scriptEle = document.createElement("script");
 * scriptEle.setAttribute("src", "https://www.mywebsite.com/test.js");
 * document.body.appendChild(scriptEle);
 * 
 */
