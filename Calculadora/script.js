var val1t = document.querySelector('#ival1')
var val2t = document.querySelector('#ival2')
var altt = document.querySelector('#ialt')
var pesot = document.querySelector('#ipeso')

    

function porcent(){
    var val1 = Number(val1t.value)
    var val2 = Number(val2t.value)
    res1.style.display = "block" 
    res1.innerHTML = ''
      
    if ((val1 || val2) <= 0){
        res1.innerHTML = `<p>Só valor positivo.</p>`
    } else {
        var array = []
        array.push(Number(val1))
        array.push(Number(val2))
        array.sort()//Assim, sempre, na posição "0" estará o menor e no "1" o maior.

        var difer = 100 - ((array[0] * 100) / array[1])//Usei regra de tres aq
        res1.innerHTML += `Diferença de: <strong>${difer.toFixed(1)}%</strong>`

    }
}

function saude(){
    var alt = Number(altt.value)
    var peso = Number(pesot.value) 
    res2.style.display = "block" 
    res2.innerHTML = ''

    if((alt || peso) <= 0 ){
        res2.innerHTML = `<p>Só valor positivo.</p> `

    } else {
        resultado = ''
        imc = peso / ((alt/100) ** 2)
        pesoi1 = 18.5 * ((alt/100) ** 2)
        pesoi2 = 24.9 * ((alt/100) ** 2)

        if(imc >= 40 ){
            resultado = 'Obesidade Grau III'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`
        } else if (imc >= 35){
            resultado = 'Obesidade Grau II'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`
        } else if (imc >= 30){
            resultado = 'Obesidade Grau I'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`
        } else if (imc >= 25){
            resultado = 'Sobrepeso'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`
        } else if (imc >= 18.5){
            resultado = 'Peso Normal'

        } else if (imc < 18.5){
            resultado = 'Baixo Peso'
            res2.innerHTML += `<p>O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)}Kg</span> e <span class="verm">${pesoi2.toFixed(1)}Kg</span>.</p>`
        }

        res2.innerHTML += `<p id="p_res2">Seu <a href="https://pt.wikipedia.org/wiki/Índice_de_massa_corporal" target="_blank">IMC</a> é: ${imc.toFixed(1)} - ${resultado}</p>`
          
    }

}