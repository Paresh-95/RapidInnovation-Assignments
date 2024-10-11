const Task = require("../models/Task_model");

exports.getTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    if (!taskId) {
      return res.status(401).json({
        success: false,
        message: "TaskId not Found",
      });
    }

    const retrievedTask = await Task.findById(taskId);

    if (!retrievedTask) {
      return res.status(404).json({
        success: false,
        message: "No task Associated with the TaskId",
      });
    }

    return res.status(200).json({
      success: true,
      data: retrievedTask,
      message: `Task with [${taskId}] data successfully fetched`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went Wrong while Fetching the Task",
    });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const allTasks = await Task.find({});

    if (!allTasks) {
      return res.status(200).json({
        success: true,
        message: "No Task Found // No task in DB",
      });
    }

    return res.status(200).json({
      success: true,
      data: allTasks,
      message: "All Task are Fetched ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went Wrong while fetching All Task",
    });
  }
};
