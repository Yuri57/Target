function verificaFibonacci() {
    const inputFibonacci = document.querySelector('.fibonacci');
    const botaoFibonacci = document.querySelector('.verificaFibonacci');
    const resultado = document.querySelector('.resultado');

    botaoFibonacci.addEventListener('click', function(e) {
        const numeroInformado = parseInt(inputFibonacci.value);
        const sequenciaFibonacci = fibonacci(numeroInformado);
        if (sequenciaFibonacci.includes(numeroInformado)) {
            resultado.textContent = `O número ${numeroInformado} pertence à sequência de Fibonacci.`;
        } else {
            resultado.textContent = `O número ${numeroInformado} não pertence à sequência de Fibonacci.`;
        }
    });

    function fibonacci(n) {
        let fib = [0, 1];
        while (fib[fib.length - 1] < n) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
        return fib;
    }
}

verificaFibonacci();
