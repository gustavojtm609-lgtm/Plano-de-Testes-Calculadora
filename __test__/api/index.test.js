import app from '../../src/index.js'
import request from 'supertest'
import { describe, it, expect } from '@jest/globals'

describe('Testes Completos da API - Calculadora', () => {

    // =========================================================
    // 1. SOMA (CT01 ao CT12)
    // =========================================================
    describe('POST /api/somar', () => {
        it("CT01: Deve somar 2 e 95 = 97", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 2, num2: 95 })
            expect(res.statusCode).toBe(200)
            expect(res.body.resultado).toBe(97)
        })
        it("CT02: Deve somar -5 e 10 = 5", async () => {
            const res = await request(app).post("/api/somar").send({ num1: -5, num2: 10 })
            expect(res.body.resultado).toBe(5)
        })
        it("CT03: Deve somar 10 e -5 = 5", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 10, num2: -5 })
            expect(res.body.resultado).toBe(5)
        })
        it("CT04: Deve somar -5 e -10 = -15", async () => {
            const res = await request(app).post("/api/somar").send({ num1: -5, num2: -10 })
            expect(res.body.resultado).toBe(-15)
        })
        it("CT05: Deve somar decimais 0.5 e 1.7 = 2.2", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 0.5, num2: 1.7 })
            expect(res.body.resultado).toBeCloseTo(2.2)
        })
        it("CT06: Erro ao tentar enviar texto no primeiro parâmetro", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 'a', num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT07: Erro ao tentar enviar texto no segundo parâmetro", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 1, num2: 'a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT08: Deve somar 0 e 1 = 1", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 0, num2: 1 })
            expect(res.body.resultado).toBe(1)
        })
        it("CT09: Deve somar 1 e 0 = 1", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 1, num2: 0 })
            expect(res.body.resultado).toBe(1)
        })
        it("CT10: Erro sem o primeiro parâmetro", async () => {
            const res = await request(app).post("/api/somar").send({ num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT11: Erro sem o segundo parâmetro", async () => {
            const res = await request(app).post("/api/somar").send({ num1: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT12: Erro sem nenhum parâmetro", async () => {
            const res = await request(app).post("/api/somar").send({})
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
    })

    // =========================================================
    // 2. SUBTRAÇÃO (CT13 ao CT24)
    // =========================================================
    describe('POST /api/subtrair', () => {
        it("CT13: Deve subtrair 2 e 95 = -93", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 2, num2: 95 })
            expect(res.statusCode).toBe(200)
            expect(res.body.resultado).toBe(-93)
        })
        it("CT14: Deve subtrair -5 e 10 = -15", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: -5, num2: 10 })
            expect(res.body.resultado).toBe(-15)
        })
        it("CT15: Deve subtrair 10 e -5 = 15", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 10, num2: -5 })
            expect(res.body.resultado).toBe(15)
        })
        it("CT16: Deve subtrair -5 e -10 = 5", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: -5, num2: -10 })
            expect(res.body.resultado).toBe(5)
        })
        it("CT17: Deve subtrair decimais 0.5 e 1.7 = -1.2", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 0.5, num2: 1.7 })
            expect(res.body.resultado).toBeCloseTo(-1.2)
        })
        it("CT18: Erro ao tentar enviar texto no primeiro parâmetro", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 'a', num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT19: Erro ao tentar enviar texto no segundo parâmetro", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 1, num2: 'a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT20: Deve subtrair 0 e 1 = -1", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 0, num2: 1 })
            expect(res.body.resultado).toBe(-1)
        })
        it("CT21: Deve subtrair 1 e 0 = 1", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 1, num2: 0 })
            expect(res.body.resultado).toBe(1)
        })
        it("CT22: Erro sem o primeiro parâmetro", async () => {
            const res = await request(app).post("/api/subtrair").send({ num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT23: Erro sem o segundo parâmetro", async () => {
            const res = await request(app).post("/api/subtrair").send({ num1: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT24: Erro sem nenhum parâmetro", async () => {
            const res = await request(app).post("/api/subtrair").send({})
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
    })

    // =========================================================
    // 3. MULTIPLICAÇÃO (CT25 ao CT36)
    // =========================================================
    describe('POST /api/multiplicar', () => {
        it("CT25: Deve multiplicar 2 e 95 = 190", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 2, num2: 95 })
            expect(res.statusCode).toBe(200)
            expect(res.body.resultado).toBe(190)
        })
        it("CT26: Deve multiplicar -5 e 10 = -50", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: -5, num2: 10 })
            expect(res.body.resultado).toBe(-50)
        })
        it("CT27: Deve multiplicar 10 e -5 = -50", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 10, num2: -5 })
            expect(res.body.resultado).toBe(-50)
        })
        it("CT28: Deve multiplicar -5 e -10 = 50", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: -5, num2: -10 })
            expect(res.body.resultado).toBe(50)
        })
        it("CT29: Deve multiplicar decimais 0.5 e 1.7 = 0.85", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 0.5, num2: 1.7 })
            expect(res.body.resultado).toBeCloseTo(0.85)
        })
        it("CT30: Erro ao tentar enviar texto no primeiro parâmetro", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 'a', num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT31: Erro ao tentar enviar texto no segundo parâmetro", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 1, num2: 'a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT32: Deve multiplicar 0 e 1 = 0", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 0, num2: 1 })
            expect(res.body.resultado).toBe(0)
        })
        it("CT33: Deve multiplicar 1 e 0 = 0", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 1, num2: 0 })
            expect(res.body.resultado).toBe(0)
        })
        it("CT34: Erro sem o primeiro parâmetro", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT35: Erro sem o segundo parâmetro", async () => {
            const res = await request(app).post("/api/multiplicar").send({ num1: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT36: Erro sem nenhum parâmetro", async () => {
            const res = await request(app).post("/api/multiplicar").send({})
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
    })

    // =========================================================
    // 4. DIVISÃO (CT37 ao CT48)
    // =========================================================
    describe('POST /api/dividir', () => {
        it("CT37: Deve dividir 2 e 95 = ~0.021", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 2, num2: 95 })
            expect(res.statusCode).toBe(200)
            expect(res.body.resultado).toBeCloseTo(0.021, 3)
        })
        it("CT38: Deve dividir -5 e 10 = -0.5", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: -5, num2: 10 })
            expect(res.body.resultado).toBe(-0.5)
        })
        it("CT39: Deve dividir 10 e -5 = -2", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 10, num2: -5 })
            expect(res.body.resultado).toBe(-2)
        })
        it("CT40: Deve dividir -5 e -10 = 0.5", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: -5, num2: -10 })
            expect(res.body.resultado).toBe(0.5)
        })
        it("CT41: Deve dividir decimais 0.5 e 1.7 = ~0.294", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 0.5, num2: 1.7 })
            expect(res.body.resultado).toBeCloseTo(0.294, 3)
        })
        it("CT42: Erro ao tentar enviar texto no primeiro parâmetro", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 'a', num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT43: Erro ao tentar enviar texto no segundo parâmetro", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 1, num2: 'a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT44: Deve dividir 0 e 1 = 0", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 0, num2: 1 })
            expect(res.body.resultado).toBe(0)
        })
        it("CT45: Erro de divisão por zero", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 1, num2: 0 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Não é possível dividir por zero")
        })
        it("CT46: Erro sem o primeiro parâmetro", async () => {
            const res = await request(app).post("/api/dividir").send({ num2: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT47: Erro sem o segundo parâmetro", async () => {
            const res = await request(app).post("/api/dividir").send({ num1: 1 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT48: Erro sem nenhum parâmetro", async () => {
            const res = await request(app).post("/api/dividir").send({})
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
    })

    // =========================================================
    // 5. POTÊNCIA (CT49 ao CT58)
    // =========================================================
    describe('POST /api/potencia', () => {
        it("CT49: Deve calcular potência de 2 e 3 = 8", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 2, num2: 3 })
            expect(res.statusCode).toBe(200)
            expect(res.body.resultado).toBe(8)
        })
        it("CT50: Deve calcular potência de -2 e 3 = -8", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: -2, num2: 3 })
            expect(res.body.resultado).toBe(-8)
        })
        it("CT51: Deve calcular potência de 5 e 0 = 1", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 5, num2: 0 })
            expect(res.body.resultado).toBe(1)
        })
        it("CT52: Deve calcular potência de 0 e 5 = 0", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 0, num2: 5 })
            expect(res.body.resultado).toBe(0)
        })
        it("CT53: Deve calcular potência decimal de 0.5 e 2 = 0.25", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 0.5, num2: 2 })
            expect(res.body.resultado).toBe(0.25)
        })
        it("CT54: Erro ao enviar texto no primeiro parâmetro", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 'a', num2: 2 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT55: Erro ao enviar texto no segundo parâmetro", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 2, num2: 'a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT56: Erro sem o primeiro parâmetro", async () => {
            const res = await request(app).post("/api/potencia").send({ num2: 2 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT57: Erro sem o segundo parâmetro", async () => {
            const res = await request(app).post("/api/potencia").send({ num1: 2 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
        it("CT58: Erro sem os dois parâmetros", async () => {
            const res = await request(app).post("/api/potencia").send({})
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
    })

    // =========================================================
    // 6. RAIZ (CT59 ao CT68)
    // =========================================================
    describe('POST /api/raiz', () => {
        it("CT59: Raiz quadrada de 9 = 3", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 9 })
            expect(res.statusCode).toBe(200)
            expect(res.body.resultado).toBe(3)
        })
        it("CT60: Raiz quadrada de 100 = 10", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 100 })
            expect(res.body.resultado).toBe(10)
        })
        it("CT61: Raiz quadrada de 0 = 0", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 0 })
            expect(res.body.resultado).toBe(0)
        })
        it("CT62: Raiz quadrada de 1 = 1", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 1 })
            expect(res.body.resultado).toBe(1)
        })
        it("CT63: Raiz quadrada de 0.25 = 0.5", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 0.25 })
            expect(res.body.resultado).toBe(0.5)
        })
        it("CT64: Raiz quadrada de 2 = ~1.414", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 2 })
            expect(res.body.resultado).toBeCloseTo(1.414, 3)
        })
        it("CT65: Erro de raiz negativa", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: -9 })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Não é possível calcular a raiz de um número negativo")
        })
        it("CT66: Erro ao enviar texto ('a')", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: 'a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT67: Erro ao enviar string mista ('9a')", async () => {
            const res = await request(app).post("/api/raiz").send({ num1: '9a' })
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Enviar somente números")
        })
        it("CT68: Erro sem enviar o parâmetro", async () => {
            const res = await request(app).post("/api/raiz").send({})
            expect(res.statusCode).toBe(500)
            expect(res.body.err).toBe("Envie todos os campos!")
        })
    })

})