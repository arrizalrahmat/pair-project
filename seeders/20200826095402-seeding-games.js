'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      name:'Tetris',
      genre:'Casual',
      platform:'Nintendo Switch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Red Dead Redemption 2',
      genre:'Adventure',
      platform:'Playstation 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Legend of Zelda: Breath of The Wild',
      genre:'Adventure',
      platform:'Nintendo Switch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Halo 3',
      genre:'Action',
      platform:'Xbox 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'The Witcher 3',
      genre:'Adventure',
      platform:'Nintendo Switch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Ace Combat 7',
      genre:'Adventure',
      platform:'Playstation 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'GT Sport',
      genre:'Racing',
      platform:'Play Station 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Mario Kart',
      genre:'Racing',
      platform:'Nintendo Switch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Hellblade: Sanuas Sacrifice',
      genre:'Adventure',
      platform:'Xbox 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Battlefield V',
      genre:'Adventure',
      platform:'Xbox 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
