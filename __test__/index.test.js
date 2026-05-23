import { describe, it, expect } from '@jest/globals';
import service from '../src/services/exercicios';
 
describe("Teste para função somar", () => {
 
    it("Deve somar dois números positivos 2 e 1, retornar 3", () => {
        const result =  service.Somar(2,1);
        expect(result).toBe(3);
    })

    
    it("Deve somar dois números positivos 2 e 95, retornar 97", () => {
        const result =  service.Somar(2,1);
        expect(result).toBe(3);
    })
})

      it("Deve somar com um número negativo e positivo -5 e 10, retornar 5", () => {
        const result =  service.Somar(-5,10);
        expect(result).toBe(5);
    })

      it("Deve somar com um número positivo e negativo 10 e -5, retornar 5", () => {
        const result =  service.Somar(-5,10);
        expect(result).toBe(5);
    })    

    it("Deve somar com um número positivo e negativo 10 e -5, retornar 5", () => {
        const result =  service.Somar(-5,10);
        expect(result).toBe(5);
    }) 

    
    
    

 //=============================================================//
 //                          SUBTRAIR
 //============================================================//
describe("Testes para a função subtrair", ()=> {
 
      it("Deve subtrair dois números positivos 2 e 1, retornar 1", () => {
        const result =  service.Subtrair(2,1);
        expect(result).toBe(1);
})
 
})
 
describe("Testes para a função div", ()=> {
 
      it("Deve dividir dois números positivos 2 e 2, retornar 1", () => {
        const result =  service.Dividir(2,2);
        expect(result).toBe(1);
})
 
})
 
describe("Testes para a função mult", ()=> {
 
      it("Deve multiplicar dois números positivos 2 e 2, retornar 4", () => {
        const result =  service.Multiplicar(2,2);
        expect(result).toBe(4);
})
 
})
 
 
 
 