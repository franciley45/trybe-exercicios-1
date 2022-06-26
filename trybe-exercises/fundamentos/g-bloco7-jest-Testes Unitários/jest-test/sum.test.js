const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee} = require("./sum")
/* --------------------------------------------------- */

describe("exercio1 A função sum(a, b) retorna a soma do parâmetro a com o b", () => {
    test('adds 4 + 5 to equal 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test("adds 5.1 + 6.55  to equal 11,65", () => {
        expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
    });

    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });

});
/* ---------------------------------------------------- */

describe("exercio2 A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array", () => {

    it("se o elemento item caso ele exista no array vai c o retorno", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});
/* -------------------------------------------------- */

describe("exercio3 funcão myFizzBuzz teste", () => {
    test("num divisível por 3 e 5 retorna fizzbuzz", () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
        expect(myFizzBuzz(3)).toBe("fizz");
        expect(myFizzBuzz(25)).toBe("buzz");
        expect(myFizzBuzz(4)).toBe(4);
        expect(myFizzBuzz(4)).toBe(4);
        expect(myFizzBuzz("2")).toBe(false);
    });

});
/* ----------------------------------------------------*/

describe("exercio4 teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {

    test("se a função encode realmente é uma função", () => {
        expect(typeof encode).toBe("function");
    });

    it('converte apenas a vogal "a" no número 1', () => {
        expect(encode('ana')).toEqual('1n1');
    });

    it('converte apenas a vogal "e" no número 2', () => {
        expect(encode('ele')).toEqual('2l2');
    });

    it('converte apenas a vogal "i" no número 3', () => {
        expect(encode('xixi')).toEqual('x3x3');
    });

    it('converte apenas a vogal "o" no número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });

    it('converte apenas a vogal "u" no número 5', () => {
        expect(encode("nu")).toEqual('n5');
    });

});
/* ---------------------------------------------------- */
describe("exercio5 a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;", () => {
    it('converte o número 1 na vogal "a" ', () => {
        expect(decode('1n1')).toBe('ana')
    })

    it('converte o número 2 na vogal "e"', () => {
        expect(decode('2l2')).toEqual('ele');
    });

    it('converte o número 3 na vogal "i"', () => {
        expect(decode('x3x3')).toEqual('xixi');
    });

    it('converte o número 4 na vogal "0"', () => {
        expect(decode('4v4')).toEqual('ovo');
    });

    it('converte o número 5 na vogal "u"', () => {
        expect(decode('n5')).toEqual('nu');
    });

    it('verifica passando uma string como paramentro retorna a quantidade de caracteres dessa string', () => {
        expect(decode('trybe').length).toEqual(5);
    });
});
/* ----------------------------------------------- */
describe("A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:", () => {
    describe('Testa a função techList', () => {
        it('Testa se a função techList é definida', () => {
            expect(techList).toBeDefined();
        });
        it('Testa se techList é uma função', () => {
            expect(typeof techList).toBe('function');
        });
        it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
            expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
                {
                    tech: 'CSS',
                    name: 'Lucas'
                },
                {
                    tech: 'HTML',
                    name: 'Lucas'
                },
                {
                    tech: 'JavaScript',
                    name: 'Lucas'
                },
                {
                    tech: 'Jest',
                    name: 'Lucas'
                },
                {
                    tech: 'React',
                    name: 'Lucas'
                }
            ]);
        });
        it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
            expect(techList([], 'Lucas')).toBe('Vazio!');
        });
    });
})

describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });

  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
});
it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
});


