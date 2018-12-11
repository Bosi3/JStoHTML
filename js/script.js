
const key = '9ad3da11-1ace-4033-b0f1-0659e0ea1fa1';

let monDiv = document.createElement('div');
let monH1 = document.createElement('h1');
/*let monUl = document.createElement('ul');
let monLi = document.createElement('li');*/

monH1.innerHTML= "Link to The Guardian";
//monUl.appendChild(monLi);
monDiv.setAttribute("id", "root");
monDiv.style.display = "flex";
monDiv.style.alignItems = "center";
monDiv.style.justifyContent = "space-between";
monDiv.style.marginRight = "auto";
monDiv.style.marginLeft = "auto";
monDiv.style.flexDirection = "column";
monDiv.style.height = "100%";
monDiv.style.width = "80%";
monDiv.style.fontFamily = "sans-serif";
monDiv.style.backgroundColor = "#e3e3e3";
body.style.backgroundColor ="#c9c9c9";
document.body.appendChild(monDiv);  
fetch(`https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=${key}`)
 .then(res => res.json())//response type
 .catch(function (err) {
    console.log("Something went wrong!", err);
    alert("OR there is no result,<br> OR there are too many results. Try again ")
})
.then(jsonData => resultList(jsonData));
 
    const resultList = (results) => {
    console.log("result", results);
    const $results = document.getElementById(`root`);
    console.log(results.response.results);
   /*  Avec Map*/

    $results.innerHTML = results.response.results.map((maMap) => {
       // console.log("map", maMap)
       return ` <h3 class="fc-item__title">${maMap.webTitle}</h3>
       <a href="${maMap.webUrl}" target="_blank">
       <img src="${maMap.fields.thumbnail}" alt="image"></a>
       <p>Pubied: ${maMap.webPublicationDate}</p>
       `;
     
    });
    var mesH3 = document.querySelectorAll('h3'), i;
    for (i = 0; i < mesH3.length; ++i) {
        mesH3[i].style.color = "#789681";
        mesH3[i].style.fontWeight = "bold";
        mesH3[i].style.margin = "20px";
      }
      var mesP = document.querySelectorAll('p'), i;
    for (i = 0; i < mesP.length; ++i) {
        mesP[i].style.color = "#968787";
        mesP[i].style.margin = "10px";
      }
} 
                 