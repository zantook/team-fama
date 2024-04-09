const router = require("express").Router();
let bank = require("../models/bank.model");
router.route('/').get((req , res)=>{
    bank.find()
    .then(bank=>res.json(bank))
    .catch(err =>res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
console.log(req.body);
const name=req.body.name ; 
const difficulty =req.body.difficulty ; 
const muscles = req.body.muscles ; 
const type = req.body.type ; 
const place = req.body.place ; 
const newbank = new bank ({
    name , difficulty , muscles , type , place ,
});
newbank.save()
.then (()=> res.json ('Activity added!'))
.catch (err => res.status(400).json('Error: '+err));

});

router.route('/:id').delete((req,res)=>{
    bank.findByIdAndDelete(req.params.id)
    .then(()=>res.json('activity deleted'))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('update/:id').put((req ,res)=>{
    bank.findById(req.params.id)
    .then(bank=>{
        console.log(bank);
        bank.name=req.body.name;
        bank.difficulty=req.body.difficulty;
        bank.muscles=req.body.muscles;
        bank.type=req.body.type;
        bank.place=req.body.place;
        bank.save()
        .then(()=>res.json('activity updated'))
        .catch(err => res.status(400).json('Error: '+err));
    });
});

module.exports=router;