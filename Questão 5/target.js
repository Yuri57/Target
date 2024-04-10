//Questão 5 Solução

function stringInvertida() {
    const inputInverte = document.querySelector('.inputInverte');
    const botaonInverte = document.querySelector('.inverte');
    const palavraInvertida = document.querySelector('.palavraInvertida');

    botaonInverte.addEventListener('click', function (e) {
        const stringOriginal = inputInverte.value;
        const stringInvertida = inverteString(stringOriginal);
        palavraInvertida.innerHTML = `Palavra invertida: ${stringInvertida}`;
    });

    function inverteString(str) {
        let strInvertida = "";
        for (let i = str.length - 1; i >= 0; i--) {
            strInvertida += str[i];
        }
        return strInvertida;
    }
}

stringInvertida();