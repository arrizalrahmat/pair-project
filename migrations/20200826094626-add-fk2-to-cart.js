'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Carts', 'gameId', {
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
    return queryInterface.removeColumn('Carts', 'gameId')
  }
};
