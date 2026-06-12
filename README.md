# 🧮 Plano de Testes - Calculadora Blindada

Este projeto consiste em uma biblioteca de operações matemáticas básicas (Soma, Subtração, Multiplicação e Divisão) desenvolvida em JavaScript (ES6 Modules) e totalmente blindada utilizando testes unitários com **Jest**. 

O principal objetivo deste projeto foi aplicar os conceitos de **Qualidade de Software**, garantindo resiliência contra entradas inválidas (textos, campos vazios) e comportamentos matemáticos críticos (como a divisão por zero), simulando o comportamento rigoroso de células de uma planilha eletrônica.

---

## 🚀 Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Jest** (Framework de testes unitários)
* **Cross-env** (Gerenciamento de variáveis de ambiente entre sistemas)

---

## 📈 Indicadores de Qualidade (Coverage 100%)

Graças à estrutura rigorosa de cenários, o projeto atinge **100% de cobertura de código** em todos os critérios do Jest:

* **Statements (Instruções):** 100%
* **Branches (Condicionais `if`):** 100%
* **Functions (Funções):** 100%
* **Lines (Linhas):** 100%

---

## 🧠 Cenários Identificados e Testados

Para cada uma das quatro operações principais, foram mapeados e documentados **12 cenários de testes**, divididos em três pilares fundamentais:

### 1. Cenários Matemáticos Padrão
* **Caminho Feliz:** Validação de cálculos tradicionais com números positivos.
* **Regra de Sinais:** Testes exaustivos cruzando valores positivos e negativos (Mais com Menos, Menos com Menos) para garantir resultados matemáticos corretos.
* **Ponto Flutuante (Decimais):** Uso do método `toBeCloseTo` do Jest para contornar as imprecisões binárias de precisão decimal inerentes ao JavaScript.

### 2. Comportamentos de Elementos Especiais (Zero)
* **Elemento Neutro (Soma/Subtração):** Garante que operar com zero mantenha a integridade do valor real.
* **Elemento Nulo (Multiplicação):** Valida que qualquer fator multiplicado por zero seja anulado ($X \times 0 = 0$).
* **Divisão Crítica:** Validação do zero como dividendo ($0 / X = 0$) e o bloqueio matemático absoluto da **Divisão por Zero**, impedindo que o sistema retorne `Infinity`.

### 3. Barreiras de Segurança (Erros e Exceções)
* **Validação de Tipo (Type Checking):** Interpolação de strings/letras nos parâmetros para disparar a exceção `"Enviar somente números"`.
* **Ausência de Parâmetros (Omissão):** Envio de dados como `undefined` simulando campos esquecidos em formulários ou planilhas, disparando o erro `"Envie todos os campos!"`.

---

## 📦 Como Instalar e Executar o Projeto

Se você acabou de clonar o projeto (seja em casa ou no computador da faculdade), siga os passos abaixo no terminal:

### 1. Instalar as dependências (Criar a pasta node_modules)
```bash
npm install