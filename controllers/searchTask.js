const Task = require("../models/Task_model")


exports.searchTask = async (req,res) =>{
    try {

        const {term} = req.query;
        if(!term){
            return res.status(400).json({
                success:false,
                message:"Search Term is required"
            })
        }

        const searchReg = new RegExp(term,'i')

        const tasks = await Task.find({
            $or:[
                {title:{$regex:searchReg}},
                {description:{$regex:searchReg}}
            ]
        })

        return res.status(200).json({
            success:true,
            data:tasks,
            message:"Task Search Success"
        
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Something went wrong while Searching Task"

        })
        
    }
}