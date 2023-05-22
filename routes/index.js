const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');
const passport = require('passport');

router.get('/',function(req,res){
    res.send('app running');
})
//all routes
router.post('/doctors/register',userController.registerDoctor);
router.post('/patients/register',passport.authenticate('jwt',{session:false}),userController.registerPatient);
router.post('/patients/:id/create_report',passport.authenticate('jwt',{session:false}),userController.createReport);
router.get('/patients/:id/all_reports',userController.all_reports);
router.get('/reports/:status',userController.AllReports);


//login route
router.post('/login',userController.login);

module.exports=router;