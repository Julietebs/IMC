function calcular(){
    form = document.querySelector('.form')
    const pesoinput = form.querySelector('#peso')
    const alturainput = form.querySelector('#altura')
    const res = document.querySelector('.res')
    let peso = Number(pesoinput.value)
    let altura = Number(alturainput.value)
    const imc = peso/(altura**2)
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)}. `
    if(peso == '' || altura == ''){ 
        res.innerHTML = 'Preencha todos os campos.'
    }else if(imc>=40){
        res.innerHTML += `Obesidade grau 3. ALERTA!`
    }else if(imc>=35){
        res.innerHTML += `Obesidade grau 2. ATENÇÃO!`
    }else if(imc>=30){
        res.innerHTML += `Obesidade grau 1. CUIDADO!`
    }else if(imc>=25){
        res.innerHTML += `Sobrepeso!`
    } else if(imc>=18.5){
        res.innerHTML += `Peso normal!`
    } else if(imc<18.5){
        res.innerHTML += `Abaixo do peso!`
    }else{
        res.innerHTML ='Erro! Tente novamente.'
    }

}