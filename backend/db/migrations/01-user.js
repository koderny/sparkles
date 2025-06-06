'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true,
        unique: true
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false
      },
      zodiacSign: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: false
      },
      gender: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false
      },
      profilePicture: { //url
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false
      },
      location: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false
      },
      lookingFor: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    await queryInterface.dropTable('Users');
  }
};
