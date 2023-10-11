// Import the Express Router module
const router = require("express").Router();

// Import controller functions from the user-controller module
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user");

// Define routes and associate them with controller functions

// Route: /api/users
router.route("/")
  .get(getAllUsers)   // Handle GET requests to retrieve all users
  .post(createUser);  // Handle POST requests to create a new user

// Route: /api/users/<id>
router.route("/:id")
  .get(getUserById)   // Handle GET requests to retrieve a user by ID
  .put(updateUser)    // Handle PUT requests to update a user by ID
  .delete(deleteUser); // Handle DELETE requests to delete a user by ID

// Route: /api/users/<userId>/friends/<friendId>
router.route("/:userId/friends/:friendId")
  .post(addFriend)    // Handle POST requests to add a friend to a user's list
  .delete(removeFriend); // Handle DELETE requests to remove a friend from a user's list

// Export the router to be used in other parts of the application
module.exports = router;
