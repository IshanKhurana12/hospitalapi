const Doctor=require('../models/doctor');

const Patient=require('../models/patient');

const jwt=require('jsonwebtoken');

//registeer doc
module.exports.registerDoctor=async(req,res,next)=>{
    try{
        console.log(req.body);
        const doctor= await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor created"
        }
        )

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"could not create the user, internal server error"
        });
    }
};

//register patient
module.exports.registerPatient=async (req,res,next)=>{
    try{

        req.body.doctor="646bd82772e8711c7abc49a3";
        console.log(req.body);
        const patient= await Patient.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor created"
        }
        )

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"could not create the user, internal server error"
        });
    }
}



//create report
module.exports.createReport=async (req,res,next)=>{
    try{
        const patient= await Patient.findById(req.params.id);
        req.body.date=Date.now();
        patient.reports.push(req.body);
        patient.save();
        res.status(200).json({
            success:true,
            message:"Report submitted succesfully"
        }
        )
    }
    catch(error){

        res.status(500).json({
            success:false,
            message:"could not create the user, internal server error"
        });
    }
}



module.exports.all_reports=async (req,res,next)=>{
    try{
        const patient= await Patient.findById(req.params.id);

        res.status(200).json({
            success:true,
            reports:patient.reports
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"could not create the user, internal server error"
        });
    }
};


module.exports.AllReports=async (req,res,next)=>{
    try{
        const patient=await Patient.find({
            reports:{ $elemMatch: {status:req.params.status } },
        });
        res.status(200).json({
            success:true,
            data:patient
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"can not genrate all reposts internal server error"
        })
    }
}


//login router and jwt set up

module.exports.login=async (req,res,next)=>{
    try{

        const user=Doctor.find(req.body);
      
        if(user){
            const token=jwt.sign(user.id,"secret");
            res.status(200).json({
                success:true,
               token
            });
        }
        else{
            res.status(404).json({
                success:false,
                message:"name password do not match"
            })
        }
      
    }catch(error){
        console.log(error);
        res.status(500).json({
            
            success:false,
            message:" internal server error"
        })
    }
}