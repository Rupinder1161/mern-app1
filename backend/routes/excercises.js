const router = require('express').Router();
let Excercise = require('../models/exercise.model')

router.route('/').get((req,res) =>{

    Excercise.find()
    .then(excercises => res.json(excercises))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) =>{
       const username = req.body.username;
       const description = req.body.description;
       const duration = req.body.duration;
       const date = Date.parse(req.body.date) 
       const style = false
        const newExcercise = new Excercise({
            username,
            description,
            duration,
            date,
            style,
        });

        newExcercise.save()
        .then(() => res.json('excercise added:'))
        .catch( err => res.status(400).json('Error' + err));

})

router.route('/:id').get((req,res) =>{
   Excercise.findById(req.params.id)
   .then(excercise => res.json(excercise))
   .catch(err => res.status(400).json('Error:' + err))
})

router.route('/:id').delete((req,res)=>{
    Excercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error' + err))
})


router.route('/update/:id').post((req,res)=>{
    Excercise.findById(req.params.id)
    .then(excercise => {
        excercise.username = req.body.username;
        excercise.description = req.body.description;
        excercise.duration =  req.body.duration;
        excercise.date = Date.parse(req.body.date);
        excercise.style = req.body.style
        
        excercise.save()
        .then(()  => res.json('Excercise updated'))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err => res.status(400).json('Error' + err))
})





module.exports = router;