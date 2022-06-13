const { sum, myRemove, myFizzBuzz } = require("./sum")

test('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);

});

/* ---------------------------------- */

it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
})

it("se o elemento item caso ele exista no array vai c o retorno", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

/* -------------------------------------------------- */

    test("num divisível por 3 e 5 resorno fizzbuzz", () => {
        expect(myFizzBuzz(15)).toBe   ("fizzbuzz");
         expect(myFizzBuzz(3)).toBe("fizz");
         expect(myFizzBuzz(25)).toBe("buzz");
         expect(myFizzBuzz(4)).toBe(4);
         expect(myFizzBuzz(4)).toBe(4);
         expect(myFizzBuzz("2")).toBe(false);
    });



  // implemente seus testes aqui

/* test("adds 5.1 + 6.55  to equal 11,65", () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});
 */