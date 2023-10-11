// Import the Express Router module
const router = require("express").Router();

// Import controller functions from the thought-controller module
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought");

// Define routes and associate them with controller functions

// Route: /api/thoughts
router.route("/")
  .get(getAllThoughts); // Handle GET requests to retrieve all thoughts

// Route: /api/thoughts/<thoughtId>
router.route("/:thoughtId")
  .get(getThoughtById) // Handle GET requests to retrieve a thought by ID
  .put(updateThought); // Handle PUT requests to update a thought by ID

// Route: /api/thoughts/<userId>
router.route("/:userId")
  .post(createThought); // Handle POST requests to create a new thought

// Route: /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId")
  .delete(deleteThought); // Handle DELETE requests to delete a thought by ID

// Route: /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions")
  .post(addReaction); // Handle POST requests to add a reaction to a thought

// Route: /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction); // Handle DELETE requests to remove a reaction from a thought

// Export the router to be used in other parts of the application
module.exports = router;