'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'test1',
      password: 'admin',
      name: 'Andy Lau',
      address: 'Jalan Kenangan',
      email: 'andylau234567@gmail.com',
      birthDate: '1990-10-03',
      memberSince: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test2',
      password: 'admin',
      name: 'Kutilang',
      address: 'Jalan Jambu',
      email: 'jaljam7@gmail.com',
      birthDate: '1995-10-03',
      memberSince: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test3',
      password: 'admin',
      name: 'Kepiting Bakar',
      address: 'Jalan laut biru',
      email: 'kepitingbakar@gmail.com',
      birthDate: '1910-11-21',
      memberSince: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test4',
      password: 'admin',
      name: 'Rossa Rossa',
      address: 'Jalan Valentino',
      email: 'rosarosi7@gmail.com',
      birthDate: '1985-07-12',
      memberSince: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test5',
      password: 'admin',
      name: 'Michael Scott',
      address: 'Jalan Dunder Mifflin',
      email: 'mscottemulsion@gmail.com',
      birthDate: '1945-08-17',
      memberSince: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null)
  }
};
