var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '31987079999',
      address: {
        postalcode: '32185160',
        street: 'Rua Felipe dos Santos',
        number: '990',
        details: 'Proximo ao rua sete de setembro',
        district: 'Nacional',
        city_state: 'Contagem/MG'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }
    return data
  }
}