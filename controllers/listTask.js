const Task = require("../models/Task_model");

exports.listTask = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = "date" } = req.query;

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    let sortOpt = {};
    if (sortBy === "date") {
      sortOpt = { createdAt: 1 };
    } else if (sortBy === "name") {
      sortOpt = { title: 1 };
    } else if (sortBy === "time") {
      sortOpt = { updatedAt: 1 };
    }

    const tasks = await Task.find({})
      .sort(sortOpt)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);


    const totalTasks = await Task.countDocuments()

    return res.status(200).json({
        success:true,
        date:tasks,
        pagination:{
            total:totalTasks,
            page:pageNum,
            limit:limitNum
        }
    })


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong while Listing Task",
    });
  }
};
