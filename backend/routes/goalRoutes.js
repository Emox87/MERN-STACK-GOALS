const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

// GET ALL GOALS
// router.get("/", getGoals);

// CREATE A GOAL
// router.post("/", createGoal);

// UPDATE A GOAL
// router.put("/:id", updateGoal);

// DELETE A GOAL
// router.delete("/:id", deleteGoal);

module.exports = router;
