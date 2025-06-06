'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('UserSwipe', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            swiperId: {
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: "CASCADE"
            },
            swipedId: {
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: "CASCADE"
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
        options.tableName = "UserSwipe";
        await queryInterface.dropTable('UserSwipe');
    }
};
