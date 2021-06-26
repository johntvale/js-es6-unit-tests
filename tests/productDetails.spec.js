const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array. - OK
    const testArray = () => {
      const result = Array.isArray(productDetails());
      if (result === true) {
        return true;
      }
    }

    assert.strictEqual(testArray(), true);

    // Teste que o array retornado pela função contém dois itens dentro. - OK
    const qtyItems = () => {return productDetails.length};
    assert.strictEqual(qtyItems(), 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos. - OK
    const testObjects = () => {
      const result1 = typeof (productDetails()[0]);
      const result2 = typeof (productDetails()[1]);
      
      if (result1 === 'object' && result2 == 'object') {
        return true;
      }
    }

    assert.strictEqual(testObjects(), true);

    // Teste que os dois objetos são diferentes entre si. - OK
    const checkValues = () => {
      const product = productDetails('Alcool Gel', 'Máscara');
      const name1 = product[0].name;
      const name2 = product[1].name;
      const detailProduct1 = product[0].details.productId;
      const detailProduct2 = product[1].details.productId;

      if (name1 !== name2 && detailProduct1 !== detailProduct2) {
        return true;
      }
    }

    assert.deepStrictEqual(checkValues(), true);

    // Teste que os dois productIds terminam com 123.
    const checkFinalNumbers = () => {
      const lastNumbers = productDetails('Alcool Gel', 'Máscara');
      const rule = /[1][2][3]{1}$/;
      const lastNumberP1 = lastNumbers[0].details.productId.match(rule);
      const lastNumberP2 = lastNumbers[1].details.productId.match(rule);

      if (lastNumberP1[0] === '123' && lastNumberP2[0] === '123') {
        return true;
      }
    }

    assert.deepStrictEqual(checkFinalNumbers(), true);

  });
});
