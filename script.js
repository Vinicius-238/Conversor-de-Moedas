const taxas = {
    USD: 0.20, // 1 real = 0.20 dólares
    EUR: 0.18, // 1 real = 0.18 euros
    ARS: 48.00 // 1 real = 48 pesos argentinos
};

const bandeiras = {
    USD: "https://flagcdn.com/us.svg",
    EUR: "https://flagcdn.com/it.svg",
    ARS: "https://flagcdn.com/ar.svg"
};

function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const moeda = document.getElementById("moeda").value;
    const resultado = document.getElementById("resultado");
    const bandeiraImg = document.getElementById("img-bandeira");

    if (!moeda || isNaN(valor)) {
        resultado.textContent = "Por favor, preencha todos os campos.";
        bandeiraImg.style.display = "none";
        return;
    }

    const valorConvertido = valor * taxas[moeda];
    resultado.textContent = `R$ ${valor.toFixed(2)} = ${valorConvertido.toFixed(2)} ${moeda}`;

    bandeiraImg.src = bandeiras[moeda];
    bandeiraImg.style.display = "inline-block";
}