/// <reference types="Cypress" />

import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', () => {

  // before(function () {
  //   cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
  // })

  // beforeEach(function () {
  //   cy.log('Tudo aqui é executado sempre ANTES de CADA casos de teste')
  // })

  // after(function () {
  //   cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
  // })

  // afterEach(function () {
  //   cy.log('Tudo aqui é executado sempre DEPOIS de CADA casos de teste')
  // })

  // beforeEach(function () {
  //   cy.fixture('deliver').then((d) => {
  //     this.deliver = d
  //   })
  // })

  it('User should be deliver', function () {

    var deliver = signupFactory.deliver()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.modalContentShoulBe(expectedMessage);

  })

  it('Incorrect document', function () {

    var deliver = signupFactory.deliver()

    deliver.cpf = '000999111pp'

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! CPF inválido');

  })

  it('Incorrect email', function () {

    var deliver = signupFactory.deliver()

    deliver.email = 'leolpc.com.br'

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! Emails com formato inválido.');

  })

  context('Required fields', function () {

    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    before(function () {
      SignupPage.go()
      SignupPage.submit()
    })

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        SignupPage.alertMessageShouldBe(msg.output)
      })
    })
  })

  // it('Required fields', function () {

  //   SignupPage.go()
  //   SignupPage.submit()

  //   SignupPage.alertMessageShouldBe('É necessário informar o nome')
  //   SignupPage.alertMessageShouldBe('É necessário informar o CPF')
  //   SignupPage.alertMessageShouldBe('É necessário informar o email')
  //   SignupPage.alertMessageShouldBe('É necessário informar o CEP')
  //   SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
  //   SignupPage.alertMessageShouldBe('Selecione o método de entrega')
  //   SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')

  // })
});


