const asyncHandler = require("express-async-handler");

// @desc    GET GOALS
// @route   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET ALL GOALS" });
});

// @desc    CREATE NEW GOAL
// @route   POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Create new goal" });
});

// @desc    UPDATE GOAL
// @route   PUT /api/goals/{id}
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    DELETE GOAL
// @route   DELETE /api/goals/{id}
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
};
