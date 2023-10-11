// Import the Express Router module
const router = require("express").Router();

// Import user and thought routes from their respective modules
const userRoute = require("./user");
const thoughtRoute = require("./thought");

// Mount user routes under the "/users" prefix
router.use("/users", userRoute);

// Mount thought routes under the "/thoughts" prefix
router.use("/thoughts", thoughtRoute);

// Export the router to be used in other parts of the application
module.exports = router;
