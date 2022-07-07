
// exemplo 1 fazendo teste com setTimeout() nesse exemplo devido jest intender q esta tratando de uma função síncrona pq n foi especificado com done() vai da um falso positivo 

/* test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  }); */

  // exemplo 2 ao colocar o done() sem sar try catch vai continuar dano erro pq n foi capiturado pelo catch

/*   test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
}); */

// exemplo 3 esse é teste correto com try se espera q se execute corretamente. caso n vai entra no catch q por seu parametro tem um callback q vai c o done().

/* test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done(error);
      }
    }, 500);
  }); */

//  exemplo 4
const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };
  
  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(6, 10, (result) => {
      try {
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
