import { describe, it, expect } from '@jest/globals';
import service from '../../src/services/exercicios';

//=============================================================//
//                           SOMAR                             //
//=============================================================//
describe("Teste para função somar", () => {

    // Teste Base (Fora da planilha oficial, mas mantido)
    it("[Teste Base] Deve somar dois números positivos 2 e 1, retornar 3", () => {
        const result = service.Somar(2, 1);
        expect(result).toBe(3);
    });

    // ALTERAÇÃO: Corrigido o corpo deste teste. 
    // Antes ele estava testando internamente se (2,1) era igual a 3. Agora valida (2, 95) retornando 97.
    it("CT01: Deve somar dois números positivos 2 e 95, retornar 97", () => {
        const result = service.Somar(2, 95);
        expect(result).toBe(97);
    });

    // --- CENÁRIOS COM NÚMEROS NEGATIVOS E DECIMAIS ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT02: Deve somar com um número negativo e positivo -5 e 10, retornar 5", () => {
        const result = service.Somar(-5, 10);
        expect(result).toBe(5);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT03: Deve somar um número positivo e um negativo 10 e -5, retornar 5", () => {
        const result = service.Somar(10, -5);
        expect(result).toBe(5);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // OBSERVAÇÃO DE ESTUDO: Corrigi o título deste teste que dizia "retornar 5" mas validava "-15" no expect.
    it("CT04: Deve somar com dois números negativos -5 e -10, retornar -15", () => {
        const result = service.Somar(-5, -10);
        expect(result).toBe(-15);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // EXPLICAÇÃO: O método 'toBeCloseTo' evita problemas com imprecisões de casas decimais inerentes ao JavaScript.
    it("CT05: Deve somar dois números decimais 0.5 e 1.7, retornar aproximadamente 2.2", () => {
        const result = service.Somar(0.5, 1.7);
        expect(result).toBeCloseTo(2.2);
    });

    // --- CENÁRIOS DE VALIDAÇÃO DE ERROS (Tipos) ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // EXPLICAÇÃO: Envolvemos a chamada em `() => { ... }` para o Jest capturar o erro lançado (throw) sem travar a execução.
    it("CT06: Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Somar('a', 1);
        }).toThrow("Enviar somente números");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT07: Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Somar(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // --- CENÁRIOS COM VALOR ZERO (ELEMENTO NEUTRO) ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT08: Deve somar zero e um número positivo 0 e 1, retornar 1", () => {
        const result = service.Somar(0, 1);
        expect(result).toBe(1);
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT09: Deve somar um número positivo e zero 1 e 0, retornar 1", () => {
        const result = service.Somar(1, 0);
        expect(result).toBe(1);
    });

    // --- CENÁRIOS DE VALIDAÇÃO DE ERROS (Omissão) ---

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    // EXPLICAÇÃO: 'undefined' simula a ausência de preenchimento de uma célula/campo.
    it("CT10: Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Somar(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT11: Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Somar(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    // ALTERAÇÃO: Movido para dentro do bloco describe principal.
    it("CT12: Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Somar();
        }).toThrow("Envie todos os campos!");
    });

});

//=============================================================//
//                         SUBTRAIR                            //
//=============================================================//
describe("Testes para a função subtrair", () => {

    it("[Teste Base] Deve subtrair dois números positivos 2 e 1, retornar 1", () => {
        const result = service.Subtrair(2, 1);
        expect(result).toBe(1);
    });

    it("CT13: Deve subtrair um número maior de um menor 2 e 95, retornar -93", () => {
        const result = service.Subtrair(2, 95);
        expect(result).toBe(-93);
    });

    it("CT14: Deve subtrair um número negativo de um positivo -5 e 10, retornar -15", () => {
        const result = service.Subtrair(-5, 10);
        expect(result).toBe(-15);
    });

    // EXPLICAÇÃO: Na matemática, menos com menos dá mais. A conta vira 10 - (-5) = 10 + 5 = 15.
    it("CT15: Deve subtrair um número positivo e um negativo 10 e -5, retornar 15", () => {
        const result = service.Subtrair(10, -5);
        expect(result).toBe(15);
    });

    // EXPLICAÇÃO: Menos com menos dá mais no segundo termo. A conta vira -5 - (-10) = -5 + 10 = 5.
    it("CT16: Deve subtrair dois números negativos -5 e -10, retornar 5", () => {
        const result = service.Subtrair(-5, -10);
        expect(result).toBe(5);
    });

    // EXPLICAÇÃO: 0.5 - 1.7 = -1.2. Usamos 'toBeCloseTo' para evitar imprecisões de ponto flutuante do JS.
    it("CT17: Deve subtrair dois números decimais 0.5 e 1.7, retornar aproximadamente -1.2", () => {
        const result = service.Subtrair(0.5, 1.7);
        expect(result).toBeCloseTo(-1.2);
    });

    it("CT18: Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Subtrair('a', 1);
        }).toThrow("Enviar somente números");
    });

    it("CT19: Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Subtrair(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // EXPLICAÇÃO: 0 - 1 = -1. O zero no início mantém o valor do segundo termo negativo.
    it("CT20: Deve subtrair zero e um número positivo 0 e 1, retornar -1", () => {
        const result = service.Subtrair(0, 1);
        expect(result).toBe(-1);
    });

    // EXPLICAÇÃO: 1 - 0 = 1. Tirar zero de qualquer número não altera seu valor.
    it("CT21: Deve subtrair um número positivo e zero 1 e 0, retornar 1", () => {
        const result = service.Subtrair(1, 0);
        expect(result).toBe(1);
    });

    it("CT22: Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Subtrair(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    it("CT23: Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Subtrair(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    it("CT24: Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Subtrair();
        }).toThrow("Envie todos os campos!");
    });

});

//=============================================================//
//                        MULTIPLICAR                          //
//=============================================================//
describe("Testes para a função mult", () => {

    it("[Teste Base] Deve multiplicar dois números positivos 2 e 2, retornar 4", () => {
        const result = service.Multiplicar(2, 2);
        expect(result).toBe(4);
    });

    // EXPLICAÇÃO MATEMÁTICA (Caminho Feliz): 
    // Garante que a multiplicação básica positiva funciona perfeitamente (2 * 95 = 190).
    it("CT25: Deve multiplicar dois números positivos 2 e 95, retornar 190", () => {
        const result = service.Multiplicar(2, 95);
        expect(result).toBe(190);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a regra onde "Menos com Mais dá Menos". O resultado obrigatoriamente deve ser -50.
    it("CT26: Deve multiplicar um número negativo e um positivo -5 e 10, retornar -50", () => {
        const result = service.Multiplicar(-5, 10);
        expect(result).toBe(-50);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a mesma regra anterior, mas com as posições invertidas ("Mais com Menos dá Menos").
    it("CT27: Deve multiplicar um número positivo e um negativo 10 e -5, retornar -50", () => {
        const result = service.Multiplicar(10, -5);
        expect(result).toBe(-50);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a regra de ouro onde "Menos com Menos dá Mais". Multiplicar dois negativos gera um positivo (50).
    it("CT28: Deve multiplicar dois números negativos -5 e -10, retornar 50", () => {
        const result = service.Multiplicar(-5, -10);
        expect(result).toBe(50);
    });

    // EXPLICAÇÃO DE COMPUTAÇÃO (Ponto Flutuante): 
    // O JavaScript tem imprecisões ao multiplicar decimais. Usamos 'toBeCloseTo' para aceitar o valor aproximado (0.85).
    it("CT29: Deve multiplicar dois números decimais 0.5 e 1.7, retornar aproximadamente 0.85", () => {
        const result = service.Multiplicar(0.5, 1.7);
        expect(result).toBeCloseTo(0.85);
    });

    // VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
    // Passar uma letra no primeiro campo deve acionar o 'if' do código e disparar o erro esperado.
    it("CT30: Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Multiplicar('a', 1);
        }).toThrow("Enviar somente números");
    });

    // VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
    // Passar uma letra no segundo campo também deve ser barrado pela validação de tipo de dado.
    it("CT31: Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Multiplicar(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // EXPLICAÇÃO MATEMÁTICA (Elemento Nulo): 
    // O zero na multiplicação anula qualquer fator. Qualquer número vezes zero deve resultar em 0 (0 * 1 = 0).
    it("CT32: Deve multiplicar zero e um número positivo 0 e 1, retornar 0", () => {
        const result = service.Multiplicar(0, 1);
        expect(result).toBe(0);
    });

    // EXPLICAÇÃO MATEMÁTICA (Elemento Nulo): 
    // Garante o comportamento do elemento nulo com o zero posicionado no segundo parâmetro (1 * 0 = 0).
    it("CT33: Deve multiplicar um número positivo e zero 1 e 0, retornar 0", () => {
        const result = service.Multiplicar(1, 0);
        expect(result).toBe(0);
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
    // Deixar o primeiro parâmetro vazio (undefined) simula um campo esquecido. Deve retornar erro de campos.
    it("CT34: Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Multiplicar(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
    // Deixar o segundo parâmetro vazio deve impedir o cálculo incompleto e disparar o erro de campos.
    it("CT35: Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Multiplicar(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência Total de Dados): 
    // Chamar a função totalmente vazia deixa ambos como undefined. Deve disparar o erro de campos vazios.
    it("CT36: Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Multiplicar();
        }).toThrow("Envie todos os campos!");
    });

});

//=============================================================//
//                          DIVIDIR                            //
//=============================================================//
describe("Testes para a função div", () => {

    it("[Teste Base] Deve dividir dois números positivos 2 e 2, retornar 1", () => {
        const result = service.Dividir(2, 2);
        expect(result).toBe(1);
    })

    // Garante que a divisão básica positiva funciona respeitando a ordem dos parâmetros (2 / 95 ≈ 0.021).
    // Usamos 'toBeCloseTo' porque o resultado é uma dízima decimal.
    it("CT37: Deve dividir dois números positivos 2 e 95, retornar aproximadamente 0.021", () => {
        const result = service.Dividir(2, 95);
        expect(result).toBeCloseTo(0.021, 3);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a regra de sinais onde "Menos com Mais dá Menos". O resultado deve ser -0.5 (-5 / 10).
    it("CT38: Deve dividir um número negativo e um positivo -5 e 10, retornar -0.5", () => {
        const result = service.Dividir(-5, 10);
        expect(result).toBe(-0.5);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a mesma regra anterior com posições invertidas ("Mais com Menos dá Menos"). Resultado: -2 (10 / -5).
    it("CT39: Deve dividir um número positivo e um negativo 10 e -5, retornar -2", () => {
        const result = service.Dividir(10, -5);
        expect(result).toBe(-2);
    });

    // EXPLICAÇÃO MATEMÁTICA (Regra de Sinais): 
    // Valida a regra onde "Menos com Menos dá Mais". Dividir dois negativos gera um positivo: 0.5 (-5 / -10).
    it("CT40: Deve dividir dois números negativos -5 e -10, retornar 0.5", () => {
        const result = service.Dividir(-5, -10);
        expect(result).toBe(0.5);
    });

    // EXPLICAÇÃO DE COMPUTAÇÃO (Ponto Flutuante): 
    // Evita problemas com arredondamentos binários bizarros do JavaScript ao dividir decimais (0.5 / 1.7 ≈ 0.294).
    it("CT41: Deve dividir dois números decimais 0.5 e 1.7, retornar aproximadamente 0.294", () => {
        const result = service.Dividir(0.5, 1.7);
        expect(result).toBeCloseTo(0.294, 3);
    });

    // VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
    // Enviar texto no primeiro parâmetro deve acionar o funil protetor e lançar o erro de tipo.
    it("CT42: Deve retornar um erro ao tentar enviar um texto no primeiro parâmetro", () => {
        expect(() => {
            service.Dividir('a', 1);
        }).toThrow("Enviar somente números");
    });

    // VALIDAÇÃO DE SEGURANÇA (Tipo de Dado Inválido): 
    // Enviar texto no segundo parâmetro também deve disparar o erro impedindo o cálculo com strings.
    it("CT43: Deve retornar um erro ao tentar enviar um texto no segundo parâmetro", () => {
        expect(() => {
            service.Dividir(1, 'a');
        }).toThrow("Enviar somente números");
    });

    // EXPLICAÇÃO MATEMÁTICA (Zero no Dividendo): 
    // Zero dividido por qualquer número sempre resulta em zero (0 / 1 = 0).
    it("CT44: Deve dividir zero e um número positivo 0 e 1, retornar 0", () => {
        const result = service.Dividir(0, 1);
        expect(result).toBe(0);
    });

    // REGRA MATEMÁTICA CRÍTICA (Divisão por Zero): 
    // Na matemática, a divisão por zero é uma operação indefinida. No código, o 'if (num2 === 0)' 
    // intercepta a operação e lança o erro exato para evitar que retorne 'Infinity' e quebre o sistema.
    it("CT45: Deve retornar um erro ao tentar dividir por zero (1 e 0)", () => {
        expect(() => {
            service.Dividir(1, 0);
        }).toThrow("Não é possível dividir por zero");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
    // Parâmetro ausente entra como 'undefined'. Deve disparar o erro de campos incompletos.
    it("CT46: Deve retornar um erro ao chamar a função sem o primeiro parâmetro", () => {
        expect(() => {
            service.Dividir(undefined, 1);
        }).toThrow("Envie todos os campos!");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência de Dados): 
    // Omitir o segundo parâmetro (divisor) impede a conclusão da operação e gera erro de campos.
    it("CT47: Deve retornar um erro ao chamar a função sem o segundo parâmetro", () => {
        expect(() => {
            service.Dividir(1, undefined);
        }).toThrow("Envie todos os campos!");
    });

    // VALIDAÇÃO DE SEGURANÇA (Ausência Total de Dados): 
    // Chamar a função sem nenhum valor aciona a validação de segurança logo na primeira linha do método.
    it("CT48: Deve retornar um erro ao chamar a função sem nenhum dos dois parâmetros", () => {
        expect(() => {
            service.Dividir();
        }).toThrow("Envie todos os campos!");
    });

});

//=============================================================//
//                         POTÊNCIA                            //
//=============================================================//
describe("Testes para a função potencia", () => {

    // CT49: Cenário de sucesso. Valida a exponenciação padrão (2³ = 8).
    it("CT49: Deve chamar a função potência, e enviar como primeiro parametro 2, como segundo parametro 3", () => {
        const result = service.Potencia(2, 3);
        expect(result).toBe(8);
    });

    // CT50: Valida a regra de sinais. Base negativa com expoente ímpar deve resultar em valor negativo (-2³ = -8).
    it("CT50: Deve chamar a função potência, e enviar como primeiro parametro -2, como segundo parametro 3", () => {
        const result = service.Potencia(-2, 3);
        expect(result).toBe(-8);
    });

    // CT51: Propriedade da potenciação: Qualquer número elevado a zero é igual a 1.
    it("CT51: Deve chamar a função potência, e enviar como primeiro parametro 5, como segundo parametro 0", () => {
        const result = service.Potencia(5, 0);
        expect(result).toBe(1);
    });

    // CT52: Propriedade da potenciação: Zero elevado a qualquer expoente positivo é 0.
    it("CT52: Deve chamar a função potência, e enviar como primeiro parametro 0, como segundo parametro 5", () => {
        const result = service.Potencia(0, 5);
        expect(result).toBe(0);
    });

    // CT53: Valida a potência com números fracionários (0.5² = 0.25).
    it("CT53: Deve chamar a função potência, e enviar como primeiro parametro 0.5, como segundo parametro 2", () => {
        const result = service.Potencia(0.5, 2);
        expect(result).toBe(0.25);
    });

    // CT54 & CT55: Validação de tipo (Input Validation). O sistema deve barrar entradas que não sejam números para evitar NaN (Not a Number).
    it("CT54: Deve chamar a função potência, e enviar como primeiro parametro 'a', como segundo parametro 2", () => {
        expect(() => service.Potencia('a', 2)).toThrow("Enviar somente números");
    });

    it("CT55: Deve chamar a função potência, e enviar como primeiro parametro 2, como segundo parametro 'a'", () => {
        expect(() => service.Potencia(2, 'a')).toThrow("Enviar somente números");
    });

    // CT56, CT57 & CT58: Validação de integridade. Testa a robustez da função ao receber parâmetros nulos ou indefinidos.
    it("CT56: Deve chamar a função potência sem o primeiro parâmetro", () => {
        expect(() => service.Potencia(undefined, 2)).toThrow("Envie todos os campos!");
    });

    it("CT57: Deve chamar a função potência sem o segundo parâmetro", () => {
        expect(() => service.Potencia(2, undefined)).toThrow("Envie todos os campos!");
    });

    it("CT58: Deve chamar a função potência sem os dois parâmetros", () => {
        expect(() => service.Potencia()).toThrow("Envie todos os campos!");
    });
});

//=============================================================//
//                           RAIZ                              //
//=============================================================//
describe("Testes para a função raiz", () => {

    // CT59 & CT60: Para raízes quadradas exatas (perfeitas).
    it("CT59: Deve chamar a função raiz, e enviar como parametro 9", () => {
        const result = service.Raiz(9);
        expect(result).toBe(3);
    });

    it("CT60: Deve chamar a função raiz, e enviar como parametro 100", () => {
        const result = service.Raiz(100);
        expect(result).toBe(10);
    });

    // CT61 & CT62: Casos de borda (Edge cases) para valores básicos que retornam eles mesmos.
    it("CT61: Deve chamar a função raiz, e enviar como parametro 0", () => {
        const result = service.Raiz(0);
        expect(result).toBe(0);
    });

    it("CT62: Deve chamar a função raiz, e enviar como parametro 1", () => {
        const result = service.Raiz(1);
        expect(result).toBe(1);
    });

    // CT63: Raiz quadrada de um número decimal exato.
    it("CT63: Deve chamar a função raiz, e enviar como parametro 0.25", () => {
        const result = service.Raiz(0.25);
        expect(result).toBe(0.5);
    });

    // CT64: Raiz inexata (irracional). Usamos toBeCloseTo devido à imprecisão de ponto flutuante do computador.
    it("CT64: Deve chamar a função raiz, e enviar como parametro 2", () => {
        const result = service.Raiz(2);
        expect(result).toBeCloseTo(1.414, 3); 
    });

    // CT65: Regra de Negócio Crítica. No conjunto dos números reais, não existe raiz de número negativo. O sistema deve tratar isso com erro.
    it("CT65: Deve chamar a função raiz, e enviar como parametro -9", () => {
        expect(() => service.Raiz(-9)).toThrow("Não é possível calcular a raiz de um número negativo");
    });

    // CT66 & CT67: Tratamento de erro para entradas inválidas (textos ou misturas de caracteres).
    it("CT66: Deve chamar a função raiz, e enviar como parametro 'a'", () => {
        expect(() => service.Raiz('a')).toThrow("Enviar somente números");
    });

    it("CT67: Deve chamar a função raiz, e enviar como parametro '9a'", () => {
        expect(() => service.Raiz('9a')).toThrow("Enviar somente números");
    });

    // CT68: Testa o comportamento da função quando nenhum parâmetro é fornecido.
    it("CT68: Deve chamar a função raiz sem o parâmetro", () => {
        expect(() => service.Raiz()).toThrow("Envie todos os campos!");
    });
});