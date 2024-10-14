const Task = require("../models/Task_model")
const mailSender = require("../config/mailSender");
const {broadcastTaskUpdate}  = require("../websocket")

exports.markCompleted = async (req,res)=>{
    try {

        const taskId = req.params.id;

        const task  = await Task.findById(taskId)
        if(!task){
            return res.status(404).json({
                success:false,
                message:"Task not Found"
            })
        }     
        
        if(task.status == "Completed"){
            return res.status(400).json({
                success:false,
                message:"Task is Already Completed"
            })
        }

        task.status = "Completed"
        const updated = await task.save();

        await mailSender(task.email,"Task Completed",`${task.title} Completed`,`Your task ${task.title} has been marked as compeleted`)

        broadcastTaskUpdate(task);
        
        return res.status(200).json({
            success:true,
            message:"Task Completed Successfully",
            data:updated
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Something went wrong while Marking as Completed"
        })
        
    }
}

