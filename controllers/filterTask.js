const Task = require("../models/Task_model")


exports.filterTask = async (req,res) =>{
    try {

        const {status,priority} = req.query

        let filter = {}
        if(status){
            filter.status = status
        }

        if(priority){
            filter.priority = priority;
        }

        const tasks = await Task.find(filter);

        return res.status(200).json({
            success:true,
            message:"Task Filtered Success",
            data:tasks
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while Filtering task"
        })
        
    }
}