const express = require('express');
const router = express.Router();

// Load Book model
const Order = require('../../models/Order');

// @route GET api/orders/test
// @description tests orders route
// @access Public
router.get('/test', (req, res) => res.send('order route testing!'));

// @route GET api/orders
// @description Get all orders
// @access Public
router.get('/', (req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(404).json({ noordersfound: 'No Orders found' }));
});

// @route GET api/orders/:id
// @description Get single order by id
// @access Public
router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(404).json({ noorderfound: 'No Order found' }));
});

// @route GET api/orders
// @description add/save order
// @access Public
router.post('/', (req, res) => {
  Order.create(req.body)
    .then(order => res.json({ msg: 'Order added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this order' }));
});

// @route GET api/orders/:id
// @description Update order
// @access Public
router.put('/:id', (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body)
    .then(order => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/orders/:id
// @description Delete order by id
// @access Public
router.delete('/:id', (req, res) => {
  Order.findByIdAndRemove(req.params.id, req.body)
    .then(order => res.json({ mgs: 'Order entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a order' }));
});

module.exports = router;
