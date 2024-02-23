var val1t = document.querySelector('#ival1')
var val2t = document.querySelector('#ival2')
    

function porcent(){
    var val1 = Number(val1t.value)
    var val2 = Number(val2t.value) 

    if ((val1 || val2) <= 0){
        res.innerHTML = `<p>Só valor positivo fazendo o favor.</p><p>Só valor positivo fazendo o favor.</p><p>Só valor positivo fazendo o favor.</p><p>Só valor positivo fazendo o favor.</p>`
    } else {
        

    res.innerHTML = ''
    res.innerHTML += `${val1 + val2} `
    }
}