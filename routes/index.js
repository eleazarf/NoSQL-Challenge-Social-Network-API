// Import the Express Router module
const router = require("express").Router();

// Import API routes from the "./api" module
const apiRoutes = require("./api");

// Use the imported API routes under the "/api" prefix
router.use("/api", apiRoutes);

// Define a fallback route for handling 404 errors
router.use((req, res) => {
    // Send a 404 response when a route is not found
    res.status(404).send("Sorry, the requested page or resource was not found."); 
});

// Export the router to be used in other parts of the application
module.exports = router;
