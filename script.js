
var altt = document.querySelector('#ialt')
var pesot = document.querySelector('#ipeso')
var idadet = document.querySelector('#iidade')
var imagens = document.querySelector('#imagens')
var section = document.querySelector('#sec2')
var main2 = document.querySelector('#main2')
var msgIMC = document.querySelector('#msgIMC')

//Imagens
var abaixo = 'Imagens/abaixo.png'
var normal = 'Imagens/normal.png'
var sobrepes = 'Imagens/sobrepes.png'
var obes1 = 'Imagens/obes-1.png'
var obes2 = 'Imagens/obes-2.png'
var obes3 = 'Imagens/obes-3.png'



function saude(){
    var alt = Number(altt.value)
    var peso = Number(pesot.value) 
    var idade = Number(idadet.value)
    res2.style.display = "block" 
    res2.innerHTML = ''

    //Verificando se os inputs estão vázios.
    if((idadet.value || altt.value || pesot.value) === "" ){
        res2.innerHTML +=`Preencha todos os campos.`
        msgIMC.style.display = "none"
        imagens.style.display = "none"
        section.style.float = "none"
        section.style.marginRight = ""

    //Verificando se o usuário não inseriu valores irreais.
    } else if(idade > 120 || idade < 5 || alt < 80 || alt > 250 || peso < 20 || peso > 200){
        res2.innerHTML +=`Insira um valor válido.`

        //Realocar os elementos e tirar a imagem
        imagens.style.display = "none"
        section.style.float = "none"
        section.style.marginRight = ""
        msgIMC.style.display = "none"

    //Código principal.
    } else {
        //Cálculos para IMC
        resultado = ''
        imc = peso / ((alt/100) ** 2)
        pesoi1 = 18.5 * ((alt/100) ** 2)
        pesoi2 = 24.9 * ((alt/100) ** 2)

        //Condições para IMC
        if(imc >= 40 ){
            resultado = 'Obesidade Grau III'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`

            imagens.style.backgroundImage = 'url('+obes3+')'

            msgIMC.innerHTML = `Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.`

            msgIMC.style.fontSize = ".7em"
            imagens.style.height = "235px"

        } else if (imc >= 35){
            resultado = 'Obesidade Grau II'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`
            

            imagens.style.backgroundImage = 'url('+obes2+')'

            msgIMC.innerHTML = `Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.`

            msgIMC.style.fontSize = ".7em"
            imagens.style.height = "235px"

        } else if (imc >= 30){
            resultado = 'Obesidade Grau I'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`

            imagens.style.backgroundImage = 'url('+obes1+')'

            msgIMC.innerHTML = `Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.`

            msgIMC.style.fontSize = ".65em"
            imagens.style.height = "225px"

        } else if (imc >= 25){
            resultado = 'Sobrepeso'
            res2.innerHTML += `O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)} Kg</span> e <span class="verm">${pesoi2.toFixed(1)} Kg</span>.`

            imagens.style.backgroundImage = 'url('+sobrepes+')'

            msgIMC.innerHTML = `Isso é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.`

            msgIMC.style.fontSize = ".65em"
            imagens.style.height = "225px"


        } else if (imc >= 18.5){
            resultado = 'Peso Normal'

            imagens.style.backgroundImage = 'url('+normal+')'

            msgIMC.innerHTML = `Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.`

            imagens.style.height = "225px"

        } else if (imc < 18.5){
            resultado = 'Baixo Peso'
            res2.innerHTML += `<p>O peso ideal seria entre <span class="verm">${pesoi1.toFixed(1)}Kg</span> e <span class="verm">${pesoi2.toFixed(1)}Kg</span>.</p>`

            imagens.style.backgroundImage = 'url('+abaixo+')'
            msgIMC.innerHTML = `Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`


            imagens.style.height = "225px"

        }
        //Exibir o resultado IMC.
        res2.innerHTML += `<p id="p_res2">Seu <a href="https://pt.wikipedia.org/wiki/Índice_de_massa_corporal" target="_blank">IMC</a> é: ${imc.toFixed(1)} - ${resultado}</p>`
        
        //Quantidade de água para: 
        //Jovem:
        aguaJ = 0.040 * peso

        //Adulto:
        aguaA = 0.035 * peso

        //Idoso mín:
        aguaI1 = 0.025 * peso

        //Idoso max:
        aguaI2 = 0.035 * peso 

        //Condições para quantidade de água.
        if(idade >= 70){
            res2.innerHTML += `<p>Você deve beber de <strong>${aguaI1.toFixed(1)}</strong> a <strong>${aguaI2.toFixed(1)}</strong> litros de água por dia.</p>`
        } else if (idade >= 18){
            res2.innerHTML += `<p>Você deve beber <strong>${aguaA.toFixed(1)}</strong> litros de água por dia.</p>`
        } else if(idade >= 10){
            res2.innerHTML += `<p>Você deve beber <strong>${aguaJ.toFixed(1)}</strong> litros de água por dia.</p>`
        }
        
        //Posicionar elementos para inserir a imagem.
        imagens.style.display = "block"
        section.style.float = "left"
        section.style.marginRight = "10px"
        msgIMC.style.display = "block"




    }

}