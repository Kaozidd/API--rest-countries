const request = superagent;
const URL = "https://restcountries.eu/rest/v2/all";
request
  	.get(URL)
  	.then(function(data){
  		const countArr = data.body;
      const mainCont = document.querySelector(".countries-container")
      console.log(data.body.length)
      console.log(mainCont)
  		for (let i=0; i<countArr.length; i++){
        var divCont = document.createElement("div")
        divCont.classList.add("country-card")
        var imgItm = document.createElement("img")
        var flagSrc = countArr[i].flag
        imgItm.setAttribute("src", flagSrc)
        var name = document.createElement("h4")
        name.textContent = countArr[i].name
        name.classList.add("country-name")
        var capital = document.createElement("p")
        capital.textContent = countArr[i].capital
        capital.classList.add("country-capital")

        divCont.appendChild(imgItm)
        divCont.appendChild(name)
        divCont.appendChild(capital)
        mainCont.appendChild(divCont)
      }
  	})
