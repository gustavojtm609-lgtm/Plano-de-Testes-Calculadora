class Service {
    
    // ============================================================== //
    //                             SOMAR                              //
    // ============================================================== //
    Somar(num1, num2) {
        // VALIDAÇÃO DE AUSÊNCIA: Bloqueia se o usuário esquecer de mandar algum valor ou a requisição vier vazia.
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        
        // VALIDAÇÃO DE TIPO: Garante que os valores são estritamente números. 
        // Na soma, isso é vital para o JavaScript não "juntar" os textos (exemplo: "2" + 1 virar "21" em vez de 3).
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        
        // Caminho feliz: Realiza a operação matemática.
        return num1 + num2;
    }

    // ============================================================== //
    //                           SUBTRAIR                             //
    // ============================================================== //
    Subtrair(num1, num2) {
        // VALIDAÇÃO DE AUSÊNCIA
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        
        // VALIDAÇÃO DE TIPO: Evita que a função tente subtrair letras, o que retornaria o erro 'NaN' (Not a Number).
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        
        // Caminho feliz.
        return num1 - num2;
    }

    // ============================================================== //
    //                          MULTIPLICAR                           //
    // ============================================================== //
    Multiplicar(num1, num2) {
        // VALIDAÇÃO DE AUSÊNCIA
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        
        // VALIDAÇÃO DE TIPO: Protege a integridade do cálculo contra caracteres textuais.
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        
        // Caminho feliz.
        return num1 * num2;
    }

    // ============================================================== //
    //                            DIVIDIR                             //
    // ============================================================== //
    Dividir(num1, num2) {
        // VALIDAÇÃO DE AUSÊNCIA
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }
        
        // VALIDAÇÃO DE TIPO
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        
        // REGRA MATEMÁTICA CRÍTICA: Bloqueia a divisão por zero. 
        // Sem essa trava, o JavaScript retornaria 'Infinity', o que poderia corromper banco de dados ou travar interfaces.
        if (num2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        
        // Caminho feliz.
        return num1 / num2;
    }

    // ============================================================== //
    //                           POTÊNCIA                             //
    // ============================================================== //
    Potencia(base, expoente) {
        // VALIDAÇÃO DE AUSÊNCIA: O operador ** exige dois lados da equação preenchidos.
        if (base === undefined || expoente === undefined || base === null || expoente === null) {
            throw new Error("Envie todos os campos!");
        }
        
        // VALIDAÇÃO DE TIPO
        if (typeof base !== 'number' || typeof expoente !== 'number') {
            throw new Error("Enviar somente números");
        }
        
        // Caminho feliz: Realiza o cálculo de exponenciação usando o operador ** (Poderia ser Math.pow também).
        return base ** expoente;
    }

    // ============================================================== //
    //                             RAIZ                               //
    // ============================================================== //
    Raiz(num) {
        // VALIDAÇÃO DE AUSÊNCIA: Como a raiz precisa de apenas 1 parâmetro, verificamos apenas a variável 'num'.
        if (num === undefined || num === null) {
            throw new Error("Envie todos os campos!");
        }
        
        // VALIDAÇÃO DE TIPO
        if (typeof num !== 'number') {
            throw new Error("Enviar somente números");
        }
        
        // REGRA MATEMÁTICA CRÍTICA: Nos números reais, não existe raiz quadrada de número negativo.
        // Interceptamos isso para não devolver 'NaN' ao usuário.
        if (num < 0) {
            throw new Error("Não é possível calcular a raiz de um número negativo");
        }
        
        // Caminho feliz: Usa a biblioteca nativa do JavaScript para calcular a raiz quadrada.
        return Math.sqrt(num);
    }
}

// Exporta uma instância da classe para ser consumida pelo Controller.
export default new Service();