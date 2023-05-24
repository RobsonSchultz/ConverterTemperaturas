function converterTemp() {
    var body = document.querySelector('body');
    var tempInput = parseFloat(document.getElementById('tempRange').value);
    document.getElementById('tempSpan').innerHTML = tempInput;

    var tempResultados = document.getElementById('resultados');
    tempResultados.innerHTML = '';

    var tempFahrenheit = Math.round(tempInput * 1.8 + 32);
    var tempKelvin = Math.round(parseFloat(tempInput) + 273);

    var imagem = document.getElementById('gato');
    var desc = document.getElementById('descricao');

    if (tempInput > 152) {
        imagem.src = 'IMGs/gato_mucho_calor.gif'
        desc.innerHTML = 'O ventilador não é mais o suficiente. ABAIXE A TEMPERATURA!!!'
    }
    else if (tempInput <= 151 && tempInput > 53) {
        imagem.src = 'IMGs/gato_poco_calor.jpg'
        desc.innerHTML = 'O gatinho sente um pouco de calor, mas se esfria com seu ventilador.'
    }
    else if (tempInput <= 52 && tempInput > -52) {
        imagem.src = 'IMGs/gato_suavidad.png'
        desc.innerHTML = 'A temperatura está amena, o gatinho aprova a temperatura.'
    }
    else if (tempInput <= -53 && tempInput > -151) {
        imagem.src = 'IMGs/gato_poco_frio.png'
        desc.innerHTML = 'O gatinho sente um pouco de frio, mas se esquenta com sua cobertinha.'
    }
    else {
        imagem.src = 'IMGs/gato_mucho_frio.jpg'
        desc.innerHTML = 'O gatinho está congelando. AUMENTE A TEMPERATURA!!!'
    }

    if (tempInput > 0) {
        var red = 255;
        var green = 255 - tempInput;
        var blue = 255 - tempInput;
        var alpha = 0.9

    }else {
        var red = 255 + tempInput;
        var green = 255 + (tempInput / 2);
        var blue = 255;
        var alpha = 0.9
    }

    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`


    tempResultados.innerHTML += 'Celsius: ' + tempInput + 'º Fahrenheit: ' + tempFahrenheit + 'º Kelvin: ' + tempKelvin + 'º';
}