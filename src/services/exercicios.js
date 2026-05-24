class Service {
    Somar(num1, num2) {
        // ALTERAÇÃO: Validação de ausência de parâmetros para a Soma
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        // ALTERAÇÃO: Validação de tipo para garantir que são números na Soma
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        // ALTERAÇÃO: Adicionada a mesma proteção para a Subtração
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        // ALTERAÇÃO: Adicionada a mesma proteção para a Multiplicação
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        return num1 * num2;
    }

    Dividir(num1, num2) {
        // ALTERAÇÃO: Adicionada a mesma proteção para a Divisão
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }

        // CORREÇÃO CRÍTICA DE BUG: Regra do Divisor por Zero
        // Se o segundo parâmetro (o divisor) for 0, barramos a operação matemática inválida.
        if (num2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }

        // CORREÇÃO DE LÓGICA: No seu arquivo original estava `return num2 / num1`.
        // O correto para seguir a ordem dos parâmetros é o primeiro dividido pelo segundo.
        return num1 / num2;
    }
}

export default new Service();