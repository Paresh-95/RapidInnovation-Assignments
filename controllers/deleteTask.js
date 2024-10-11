const Task = require("../models/Task_model")


exports.deleteTask = async (req,res) =>{
    try {
        const taskId = req.params.id;
        
        const deletedTask  = await Task.findByIdAndDelete({_id:taskId})
        
        if(!deletedTask){
            return res.status(404).json({
                success:false,
                message:"No Task Available with Id"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Task Deleted Successfully"
        })
        


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Something Went Wrong while deleting the task"
        })
        
    }
}