'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Carts', 'GameId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Carts', 'GameId')
  }
};
