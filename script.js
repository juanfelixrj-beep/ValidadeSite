const date = document.querySelector("#data")
const verifyBTN = document.querySelector("#verify")
const result = document.querySelector("#result")
const container = document.querySelector(".image")
const today = document.querySelector("#today")

today.textContent = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_MED)

const dt = luxon.DateTime

const img = document.createElement("img")
img.style.width = "250px"
img.style.height = "250px"
img.src = "./images/resenha.jpeg"
container.appendChild(img)

function verificarData(dataISO){

    const hoje = dt.now().startOf("day")
    const data = dt.fromISO(dataISO).startOf("day")

    const diff = data.diff(hoje, "days").days

    if(diff < 0){
        return "vencido"
    }
    else if(diff === 0){
        return "hoje"
    }
    else if(diff > 0){
        return "valido"
    }

}

verifyBTN.addEventListener("click", ()=>{
    if(date.value === ""){
        result.textContent = "Digita a data né fi"
        
        img.src = "./images/calabreso.jpg"
        container.appendChild(img)
        return
    }

    let validade = verificarData(date.value)

    if(validade === "vencido"){
        result.textContent = "O produto esta vencido"
        alert("O produto esta vencido")
        img.src = "./images/brutal.jpeg"
        container.appendChild(img)
    }else if(validade === "hoje"){
        result.textContent = "O produto vence hoje"
        alert("O produto vence hoje")
        img.src = "./images/fim.jpeg"
        container.appendChild(img)
    }else if(validade === "valido"){
        result.textContent = "O produto está valido"
        alert("O produto está valido")
        img.src = "./images/visionario.jpeg"
        container.appendChild(img)
    }
})