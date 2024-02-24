
var altt = document.querySelector('#ialt')
var pesot = document.querySelector('#ipeso')
var idadet = document.querySelector('#iidade')


function saude(){
    var alt = Number(altt.value)
    var peso = Number(pesot.value) 
    var idade = Number(idadet.value)
    res2.style.display = "block" 
    res2.innerHTML = ''

    if((alt || peso) <= 0 || idade > 120){
        res2.innerHTML +=`Insira um valor válido.`

    } else {
        resultado = ''
        imc = peso / ((alt/100) ** 2)
        pesoi1 = 18.5 * ((alt/100) ** 2)
        pesoi2 = 24.9 * ((alt/100) ** 2)

        //Condições para IMC
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
        
        //quantidade de agua para: 
        //Jovem
        aguaJ = 0.040 * peso
        //Adulto
        aguaA = 0.035 * peso
        //Idoso min
        aguai1 = 0.025 * peso
        //Idoso max
        aguai2 = 0.035 * peso 

        if(idade >= 70){
            res2.innerHTML += `<p>Você deve beber de <strong>${aguai1.toFixed(1)}</strong> a <strong>${aguai2.toFixed(1)}</strong> litros de água por dia.</p>`
        } else if (idade >= 18){
            res2.innerHTML += `<p>Você deve beber <strong>${aguaA.toFixed(1)}</strong> litros de água por dia.</p>`
        } else if(idade >= 10){
            res2.innerHTML += `<p>Você deve beber <strong>${aguaJ.toFixed(1)}</strong> litros de água por dia.</p>`
            
        }
        
    }

}