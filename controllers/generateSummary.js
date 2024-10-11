const Task = require("../models/Task_model")


exports.generateSummary = async(req,res)=>{
    try {

        let pendingTask = 0;
        let completedTask = 0;

        const tasks = await Task.find({});

        if(!tasks){
            return res.status(404).json({
                success:false,
                message:"No Tasks Available",
                summary:{
                    pending:pendingTask,
                    completed:completedTask
                }
            })
        }

        tasks.forEach(task =>{
            if(task.status === 'Pending'){
                pendingTask++;
            }
            else if(task.status === "Completed"){
                completedTask++;
            }
        })

        return res.status(200).json({
            success:true,
            message:"Summmary Generated Successfully",
            summary:{
                pending:pendingTask,
                completed:completedTask
            }
        })

    
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Something went wrong while generating the summary"
        })
        
    }
}