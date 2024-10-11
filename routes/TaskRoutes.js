const express = require("express")
const router = express.Router();


const {addTask} = require("../controllers/addTask")
const {getTask,getAllTask} = require("../controllers/getTask")
const {updateTask} = require("../controllers/updateTask")
const {deleteTask} = require("../controllers/deleteTask")
const {markCompleted} = require("../controllers/markCompleted")
const {filterTask} = require("../controllers/filterTask")
const {listTask} = require("../controllers/listTask")
const {searchTask} = require("../controllers/searchTask")
const {generateSummary} = require("../controllers/generateSummary")


router.post("/addTask",addTask);
router.get("/getTask/:id",getTask)
router.get("/getAllTasks",getAllTask)
router.put("/updateTask/:id",updateTask)
router.delete("/deleteTask/:id",deleteTask)

router.patch("/markCompleted/:id",markCompleted)
router.get("/filterTask",filterTask);
router.get("/listTask",listTask)
router.get("/searchTask",searchTask)
router.get("/generateSummary",generateSummary)


module.exports = router