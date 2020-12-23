const router = require('express').Router();
let Horongo = require('../models/ul.holdoh.horongo.model');

router.route('/').get((req, res) => {
  Horongo.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const price = Number(req.body.price);
  const date = Date.parse(req.body.date);

  const shineHorongo = new Horongo({
    username,
    description,
    price,
    date,
  });

  shineHorongo.save()
  .then(() => res.json('Horongo added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Horongo.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Horongo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Horongo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Horongo.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.price = Number(req.body.price);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Horongo updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;