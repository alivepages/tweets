const dataRows = [
  {
    name: 'Maria Hernandez',
    company: 'Telmex',
    identifyNumber: '12346789',
    identifyType: 'Pasaporte',
    pictureFile: '',
    inside: false
  },
  {
    name: 'Joel Fagundo',
    company: 'Muktek',
    identifyNumber: '5555555',
    identifyType: 'Pasaporte',
    pictureFile: '',
    inside: true
  },
  {
    name: 'Maria Suarez',
    company: 'Liverpool',
    identifyNumber: '22222222',
    identifyType: 'Credencial',
    pictureFile: '',
    inside: false
  },
  {
    name: 'Maria Sierra',
    company: 'Muktek',
    identifyNumber: '222222',
    identifyType: 'Credencial',
    pictureFile: '',
    inside: true
  },
  {
    name: 'Manuel Rodriguez',
    company: 'Google',
    identifyNumber: '3666456',
    identifyType: 'Pasaporte',
    pictureFile: '',
    inside: false
  },
  {
    name: 'Juan Muccio',
    company: 'Microsoft',
    identifyNumber: '7777',
    identifyType: 'Otra',
    pictureFile: '',
    inside: false
  },
  {
    name: 'Luisa Hernandez',
    company: 'Microsoft',
    identifyNumber: '777777',
    identifyType: 'Otro',
    pictureFile: '',
    inside: true
  },
  {
    name: 'Manolo Figueroa',
    company: 'Muktek',
    identifyNumber: '8789797989',
    identifyType: 'Pasaporte',
    pictureFile: '',
    inside: false
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guests')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('guests').insert(dataRows);
    });
};
