import { describe, it, expect } from '@jest/globals';
import service from '../src/services/exercicios';

describe("Teste para função somar", () => {

    it("Deve somar dois números positivos 2 e 1, retornar 3", () => {
        const result = service.Somar(2, 1);
        expect(result).toBe(3);
    });

    // ALTERAÇÃO: Corrigido o corpo deste teste. 
    // Antes ele estava testando internamente se (2,1) era igual a 3. Agora valida (2, 95) retornando 97.
    it("Deve somar dois números positivos 2 e 95, retornar 97", () => {
        const result = service.Somar(2, 95);
        expect(result).toBe(97);
    });

    // --- CENÁRIOS COM NÚMEROS NEGATIVOS E DECIMAIS ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve somar com um número negativo e positivo -5 e 10, retornar 5", () => {
        const result = service.Somar(-5, 10);
        expect(result).toBe(5);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve somar um número positivo e um negativo 10 e -5, retornar 5", () => {
        const result = service.Somar(10, -5);
        expect(result).toBe(5);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // OBSERVAÇÃO DE ESTUDO: Corrigi o título deste teste que dizia "retornar 5" mas validava "-15" no expect.
    it("Deve somar com dois números negativos -5 e -10, retornar -15", () => {
        const result = service.Somar(-5, -10);
        expect(result).toBe(-15);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // EXPLICAÇÃO: O método 'toBeCloseTo' evita problemas com imprecisões de casas decimais inerentes ao JavaScript.
    it("Deve somar dois números decimais 0.5 e 1.7, retornar aproximadamente 2.2", () => {
        const result = service.Somar(0.5, 1.7);
        expect(result).toBeCloseTo(2.2);
    });

    // --- CENÁRIOS COM VALOR ZERO (ELEMENTO NEUTRO) ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve somar zero e um número positivo 0 e 1, retornar 1", () => {
        const result = service.Somar(0, 1);
        expect(result).toBe(1);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve somar um número positivo e zero 1 e 0, retornar 1", () => {
        const result = service.Somar(1, 0);
        expect(result).toBe(1);
    });

    // --- CENÁRIOS DE VALIDAÇÃO DE ERROS ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // EXPLICAÇÃO: Envolvemos a chamada em `() => { ... }` para o Jest capturar o erro lançado (throw) sem travar a execução.
    it("Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Somar('a', 1);
        }).toThrow("Enviar somente números");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Somar(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // EXPLICAÇÃO: 'undefined' simula a ausência de preenchimento de uma célula/campo.
    it("Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Somar(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Somar(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Somar();
        }).toThrow("Envie todos os campos!");
    });

});
//=============================================================//
//                         SUBTRAIR                            //
//=============================================================//
describe("Testes para a função subtrair", () => {

    it("Deve subtrair dois números positivos 2 e 1, retornar 1", () => {
        const result = service.Subtrair(2, 1);
        expect(result).toBe(1);
    });

    // Teste Base 2 (Já existente no seu arquivo)
    it("Deve subtrair um número maior de um menor 2 e 95, retornar -93", () => {
        const result = service.Subtrair(2, 95);
        expect(result).toBe(-93);
    });

    // EXPLICAÇÃO: Na matemática, menos com menos dá mais. A conta vira 10 - (-5) = 10 + 5 = 15.
    it("Deve subtrair um número positivo e um negativo 10 e -5, retornar 15", () => {
        const result = service.Subtrair(10, -5);
        expect(result).toBe(15);
    });

    // EXPLICAÇÃO: Menos com menos dá mais no segundo termo. A conta vira -5 - (-10) = -5 + 10 = 5.
    it("Deve subtrair dois números negativos -5 e -10, retornar 5", () => {
        const result = service.Subtrair(-5, -10);
        expect(result).toBe(5);
    });

    // EXPLICAÇÃO: 0.5 - 1.7 = -1.2. Usamos 'toBeCloseTo' para evitar imprecisões de ponto flutuante do JS.
    it("Deve subtrair dois números decimais 0.5 e 1.7, retornar aproximadamente -1.2", () => {
        const result = service.Subtrair(0.5, 1.7);
        expect(result).toBeCloseTo(-1.2);
    });

    it("Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Subtrair('a', 1);
        }).toThrow("Enviar somente números");
    });

    it("Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Subtrair(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // 6. CENÁRIO: Elemento neutro zero no primeiro parâmetro (0 e 1)
    // EXPLICAÇÃO: 0 - 1 = -1. O zero no início mantém o valor do segundo termo negativo.
    it("Deve subtrair zero e um número positivo 0 e 1, retornar -1", () => {
        const result = service.Subtrair(0, 1);
        expect(result).toBe(-1);
    });

    // 7. CENÁRIO: Elemento neutro zero no segundo parâmetro (1 e 0)
    // EXPLICAÇÃO: 1 - 0 = 1. Tirar zero de qualquer número não altera seu valor.
    it("Deve subtrair um número positivo e zero 1 e 0, retornar 1", () => {
        const result = service.Subtrair(1, 0);
        expect(result).toBe(1);
    });

    // 8. CENÁRIO: Erro sem o primeiro parâmetro
    it("Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Subtrair(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    // 9. CENÁRIO: Erro sem o segundo parâmetro
    it("Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Subtrair(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    // 10. CENÁRIO: Erro sem nenhum dos dois parâmetros
    it("Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Subtrair();
        }).toThrow("Envie todos os campos!");
    });

});
//=============================================================//
//                          DIVIDIR                          //
//============================================================//

describe("Testes para a função div", () => {

    it("Deve dividir dois números positivos 2 e 2, retornar 1", () => {
        const result = service.Dividir(2, 2);
        expect(result).toBe(1);
    })

    // Garante que a divisão básica positiva funciona respeitando a ordem dos parâmetros (2 / 95 ≈ 0.021).
    // Usamos 'toBeCloseTo' porque o resultado é uma dízima decimal.
    it("Deve dividir dois números positivos 2 e 95, retornar aproximadamente 0.021", () => {
        const result = service.Dividir(2, 95);
        expect(result).toBeCloseTo(0.021, 3); // O número 3 indica a precisão de casas decimais
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a regra de sinais onde "Menos com Mais dá Menos". O resultado deve ser -0.5 (-5 / 10).
    it("Deve dividir um número negativo e um positivo -5 e 10, retornar -0.5", () => {
        const result = service.Dividir(-5, 10);
        expect(result).toBe(-0.5);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a mesma regra anterior com posições invertidas ("Mais com Menos dá Menos"). Resultado: -2 (10 / -5).
    it("Deve dividir um número positivo e um negativo 10 e -5, retornar -2", () => {
        const result = service.Dividir(10, -5);
        expect(result).toBe(-2);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a regra onde "Menos com Menos dá Mais". Dividir dois negativos gera um positivo: 0.5 (-5 / -10).
    it("Deve dividir dois números negativos -5 e -10, retornar 0.5", () => {
        const result = service.Dividir(-5, -10);
        expect(result).toBe(0.5);
    });

    // EXPLICAÇÃO DE COMPUTAÇÃO (Ponto Flutuante): 
    // Evita problemas com arredondamentos binários bizarros do JavaScript ao dividir decimais (0.5 / 1.7 ≈ 0.294).
    it("Deve dividir dois números decimais 0.5 e 1.7, retornar aproximadamente 0.294", () => {
        const result = service.Dividir(0.5, 1.7);
        expect(result).toBeCloseTo(0.294, 3);
    });

    // VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
    // Enviar texto no primeiro parâmetro deve acionar o funil protetor e lançar o erro de tipo.
    it("Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Dividir('a', 1);
        }).toThrow("Enviar somente números");
    });

    // VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
    // Enviar texto no segundo parâmetro também deve disparar o erro impedindo o cálculo com strings.
    it("Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Dividir(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // EXPLICAÇÃO MATEMÁTICA (Zero no Dividendo): 
    // Zero dividido por qualquer número sempre resulta em zero (0 / 1 = 0).
    it("Deve dividir zero e um número positivo 0 e 1, retornar 0", () => {
        const result = service.Dividir(0, 1);
        expect(result).toBe(0);
    });

    // REGRA MATEMÁTICA CRÍTICA (Divisão por Zero): 
    // Na matemática, a divisão por zero é uma operação indefinida. No código, o 'if (num2 === 0)' 
    // intercepta a operação e lança o erro exato para evitar que retorne 'Infinity' e quebre o sistema.
    it("Deve retornar um erro ao tentar dividir por zero (1 e 0)", () => {
        expect(() => {
            service.Dividir(1, 0);
        }).toThrow("Não é possível dividir por zero");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
    // Parâmetro ausente entra como 'undefined'. Deve disparar o erro de campos incompletos.
    it("Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Dividir(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
    // Omitir o segundo parâmetro (divisor) impede a conclusão da operação e gera erro de campos.
    it("Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Dividir(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência Total de Dados): 
    // Chamar a função sem nenhum valor aciona a validação de segurança logo na primeira linha do método.
    it("Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Dividir();
        }).toThrow("Envie todos os campos!");
    });

});

//=============================================================//
//                          MULTIPLICAR                       //
//============================================================//

describe("Testes para a função mult", () => {

    it("Deve multiplicar dois números positivos 2 e 2, retornar 4", () => {
        const result = service.Multiplicar(2, 2);
        expect(result).toBe(4);
    })
});

// EXPLICAÇÃO MATEMÁTICA (Caminho Feliz): 
// Garante que a multiplicação básica positiva funciona perfeitamente (2 * 95 = 190).
it("Deve multiplicar dois números positivos 2 e 95, retornar 190", () => {
    const result = service.Multiplicar(2, 95);
    expect(result).toBe(190);
});

// EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
// Valida a regra onde "Menos com Mais dá Menos". O resultado obrigatoriamente deve ser -50.
it("Deve multiplicar um número negativo e um positivo -5 e 10, retornar -50", () => {
    const result = service.Multiplicar(-5, 10);
    expect(result).toBe(-50);
});

// EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
// Valida a mesma regra anterior, mas com as posições invertidas ("Mais com Menos dá Menos").
it("Deve multiplicar um número positivo e um negativo 10 e -5, retornar -50", () => {
    const result = service.Multiplicar(10, -5);
    expect(result).toBe(-50);
});

// EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
// Valida a regra de ouro onde "Menos com Menos dá Mais". Multiplicar dois negativos gera um positivo (50).
it("Deve multiplicar dois números negativos -5 e -10, retornar 50", () => {
    const result = service.Multiplicar(-5, -10);
    expect(result).toBe(50);
});

// EXPLICAÇÃO DE COMPUTAÇÃO (Ponto Flutuante): 
// O JavaScript tem imprecisões ao multiplicar decimais. Usamos 'toBeCloseTo' para aceitar o valor aproximado (0.85).
it("Deve multiplicar dois números decimais 0.5 e 1.7, retornar aproximadamente 0.85", () => {
    const result = service.Multiplicar(0.5, 1.7);
    expect(result).toBeCloseTo(0.85);
});

// VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
// Passar uma letra no primeiro campo deve acionar o 'if' do código e disparar o erro esperado.
it("Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
    expect(() => {
        service.Multiplicar('a', 1);
    }).toThrow("Enviar somente números");
});

// VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
// Passar uma letra no segundo campo também deve ser barrado pela validação de tipo de dado.
it("Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
    expect(() => {
        service.Multiplicar(1, 'a');
    }).toThrow("Enviar somente números");
});

// EXPLICAÇÃO MATEMÁTICA (Elemento Nulo): 
// O zero na multiplicação anula qualquer fator. Qualquer número vezes zero deve resultar em 0 (0 * 1 = 0).
it("Deve multiplicar zero e um número positivo 0 e 1, retornar 0", () => {
    const result = service.Multiplicar(0, 1);
    expect(result).toBe(0);
});

// EXPLICAÇÃO MATEMÁTICA (Elemento Nulo): 
// Garante o comportamento do elemento nulo com o zero posicionado no segundo parâmetro (1 * 0 = 0).
it("Deve multiplicar um número positivo e zero 1 e 0, retornar 0", () => {
    const result = service.Multiplicar(1, 0);
    expect(result).toBe(0);
});

// VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
// Deixar o primeiro parâmetro vazio (undefined) simula um campo esquecido. Deve retornar erro de campos.
it("Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
    expect(() => {
        service.Multiplicar(undefined, 1);
    }).toThrow("Envie todos os campos!");
});

// VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
// Deixar o segundo parâmetro vazio deve impedir o cálculo incompleto e disparar o erro de campos.
it("Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
    expect(() => {
        service.Multiplicar(1, undefined);
    }).toThrow("Envie todos os campos!");
});

// VALIDAÇÃO DE SEGURANÇA (Ausência Total de Dados): 
// Chamar a função totalmente vazia deixa ambos como undefined. Deve disparar o erro de campos vazios.
it("Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
    expect(() => {
        service.Multiplicar();
    }).toThrow("Envie todos os campos!");
});





