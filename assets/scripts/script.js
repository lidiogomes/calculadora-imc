const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value.replace(',', '.'));
    const altura = Number(inputAltura.value.replace(',', '.'));

    //Ferifica se peso está vazio
    if (!peso || peso === NaN) {
        setResultado('Peso inválido', false);
        return;
    }
    //Verifica se altura estpa vazio
    if (!altura || altura === NaN) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelImc(imc);

    const mensagem = `O seu IMC é ${imc} (${nivelIMC})`;
    setResultado(mensagem, true);
});

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('error');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}