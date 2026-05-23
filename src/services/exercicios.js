class Service {
    Somar(num1, num2) {
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        return num1 * num2;
    }

    Dividir(num1, num2) {
        return num2 / num1;
    }
}

export default new Service()