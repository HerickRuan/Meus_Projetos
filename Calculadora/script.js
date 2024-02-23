var val1t = document.querySelector('#ival1')
var val2t = document.querySelector('#ival2')
    

function porcent(){
    var val1 = Number(val1t.value)
    var val2 = Number(val2t.value) 
    res.innerHTML = ''
      
    if ((val1 || val2) <= 0){
        res.innerHTML = `<p>Só valor positivo fazendo o favor.</p>`
    } else {
        var array = []
        array.push(Number(val1))
        array.push(Number(val2))
        array.sort()//Assim, sempre, na posição "0" estará o menor e no "1" o maior.

        var difer = 100 - ((array[0] * 100) / array[1])//Usei regra de tres aq
        res.innerHTML += `Diferença de: <strong>${difer.toFixed(1)}%</strong>`

    }
}