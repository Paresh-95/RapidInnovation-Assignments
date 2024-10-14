const Task = require("../models/Task_model");
const { broadcastTaskUpdate } = require("../websocket");


exports.updateTask = async (req,res)=>{
    try {
        const taskId = req.params.id;
      
        const {title,description,priority,status} = req.body

        const updatedTask = await Task.findByIdAndUpdate({_id:taskId},{title,description,priority,status},{new:true})

        broadcastTaskUpdate(updatedTask)

        return res.status(200).json({
            success:true,
            message:"Task Updated Successfully",
            updatedTask
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while updating Task"
        })
    
    }
}