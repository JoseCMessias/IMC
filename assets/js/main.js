// Capturar o envio de formulário

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválido", false);
        return;
    }

    const imc = getImc(peso, altura);
    const clasificaIMC = getclassificaIMC(imc);

    const msg = `Seu IMC é ${imc} (${clasificaIMC}).`

    setResultado(msg, true);
});

const getclassificaIMC = (imc) => {
    const clasifica = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau 1",
        "Obesidade grau 2",
        "Obesidade grau 3",
    ];

    if (imc >= 39.9) return clasifica[5];

    if (imc >= 34.9) return clasifica[4];

    if (imc >= 29.9)  return clasifica[3];

    if (imc >= 24.9) return clasifica[2];

    if (imc >= 18.5) return clasifica[1];

    if (imc < 18.5) return clasifica[0];

};

const getImc = (peso, altura) => {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

const criaP = () => {
    const p = document.createElement("p");
    return p;
};

const setResultado = (msg, isValid) => {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};
