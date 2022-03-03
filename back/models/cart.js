const Sequelize = require('sequelize')

const db = require('../config')

const cart = db.define('cart',
    {   
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        product_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        product_price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        product_quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        product_image: {
            type:Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    }
    )

    module.exports = cart