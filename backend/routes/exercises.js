const router = require ('express').Router();
const bank = require('../models/bank.model');
let Exercise = require ('../models/exercise.model') ; 
router.route('/').get((req , res) => {Exercise.find().lean()
.then ( async exercises => {
  let newData = exercises.slice();

  for(var i=0;i<exercises.length;i++){
    let data = await bank.findOne({name:exercises[i].exerciseName}).select('name difficulty muscles type place -_id');;
    delete(newData[i].exerciseName);    
    newData[i].exerciseData = data;
  }
  return res.status(200).json(newData);
})
.catch (err => res.status(400).json('Error: '+err));
});
  router.route('/add').post((req, res ) => {
const username = req.body.username ; 
const description = req.body.description ; 
const exerciseName = req.body.exerciseName ;
const duration = Number(req.body.duration);
const date = Date.parse(req.body.date);
const newExercise = new Exercise ({
    username , description , duration , date , exerciseName
});
newExercise.save()
.then (() => res.json('Exercise added!'))
.catch (err => res.status(400).json('Error: '+err));

  });
  router.route('/:id').get((req,res)=>{
    
Exercise.findById(req.params.id)
.then(exercise => res.json(exercise))
.catch(err => res.status(400).json('Error: '+err));

  }) ; 

  router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+err));
    
      }) ; 
    


router.route('/:id').delete((req,res)=>{
  Exercise.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Exercise Deleted.'))
  .catch (err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').put((req,res)=> {
Exercise.findById(req.params.id)
.then (exercise => {
  exercise.username=req.body.username;
exercise.description=req.body.description;
exercise.exerciseName=req.body.exerciseName;
exercise.duration=Number(req.body.duration);
exercise.date=Date.parse(req.body.date);
exercise.save()
.then(()=>res.json('Exercise updated!'))
.catch(err => res.status(400).json('Error: '+err));
});
});
  module.exports=router;


