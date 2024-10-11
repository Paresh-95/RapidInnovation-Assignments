const Task = require("../models/Task_model");


exports.addTask = async (req,res)=>{
    try {
        const {title,description,priority,status,email} = req.body;

        
        if(!title || !description || !priority || !status || !email){
            return res.status(401).json({
                success:false,
                message:"All Data Fields are Required"       
            })
        }
        
        const newTask = await Task.create({
            title,description,priority,status,email
        })
        
        return res.status(200).json({
            success:true,
            message:"Task Created and Added Successfully",
            data:newTask
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went Wrong,Error Adding new Task"
        })
        
    }
}

