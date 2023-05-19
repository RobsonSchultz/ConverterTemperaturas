function converterTemp() {
    var tempInput = document.getElementById('tempRange').value;
    document.getElementById('tempSpan').innerHTML = tempInput;

    var tempResultados = document.getElementById('resultados');
    tempResultados.innerHTML = '';

    var tempFahrenheit = Math.round(tempInput * 1.8 + 32);
    var tempKelvin = Math.round(parseFloat(tempInput) + 273);

    var imagem = document.getElementById('gato');
    var desc = document.getElementById('descricao')

    if (tempInput > 40) {
        document.body.style.backgroundColor = '#cf0a00';
        imagem.src = 'IMGs/gato_mucho_calor.gif'
        desc.innerHTML = 'O ventilador não é mais o suficiente. ABAIXE A TEMPERATURA!!!'
    }
    else if (tempInput <= 40 && tempInput > 30) {
        document.body.style.backgroundColor = '#ff7770';
        imagem.src = 'IMGs/gato_poco_calor.jpg'
        desc.innerHTML = 'O gatinho sente um pouco de calor, mas se esfria com seu ventilador.'
    }
    else if (tempInput <= 30 && tempInput > 20) {
        document.body.style.backgroundColor = '#FFFFFF';
        imagem.src = 'IMGs/gato_suavidad.png'
        desc.innerHTML = 'A temperatura está amena, o gatinho aprova a temperatura.'
    }
    else if (tempInput <= 20 && tempInput > 10) {
        document.body.style.backgroundColor = '#7dc7ff';
        imagem.src = 'IMGs/gato_poco_frio.png'
        desc.innerHTML = 'O gatinho sente um pouco de frio, mas se esquenta com sua cobertinha.'
    }
    else {
        document.body.style.backgroundColor = '#0091ff';
        imagem.src = 'IMGs/gato_mucho_frio.jpg'
        desc.innerHTML = 'O gatinho está congelando. AUMENTE A TEMPERATURA!!!'
    }

    tempResultados.innerHTML += 'Celsius: ' + tempInput + 'º Fahrenheit: ' + tempFahrenheit + 'º Kelvin: ' + tempKelvin + 'º';
}