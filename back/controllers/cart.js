const Cart = require('../models/cart')

exports.addProduct = (req, res, next) => {
    const cart = new Cart({
        product_name: req.body.item.name,
        product_price: req.body.item.price,
        product_quantity: req.body.item.nbAddToCart,
        product_image: req.body.item.image
    })
    cart.save()
        .then( () => res.status(201).json({message:'Produit ajouté au panier!'}))
        .catch(error => console.log(error))
    .catch(error => res.status(500).json({ error }))
}

exports.getCart = (req, res, next) => {
    Cart.findAll()
        .then( response => {
            res.status(201).json({response})
        })
        .catch(error => res.status(500).json({ error }))
}

exports.deleteProduct = (req, res, next) => {
    Cart.destroy({
        where: {id: req.body.id}
    })
        .then( response => {
            res.status(201).json({response})
        })
        .catch(error => res.status(500).json({ error }))


}