// Import required modules
const express = require("express"); // Express.js for web application
const mongoose = require("mongoose"); // Mongoose for MongoDB interaction

// Create Express application
const app = express();

// Define the server's port, defaulting to 3001 if not specified in the environment
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(express.json()); // Parse JSON data in request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data in request bodies
// app.use(express.static("public")); // Serve static files from the "public" directory

// Include and use routes from the "./routes" module
app.use(require("./routes"));

// Connect to MongoDB database using provided URI or default to a local URI
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/social-network-API",
	{
		useFindAndModify: false, // Disable find and modify operations
		useNewUrlParser: true, // Use the new URL parser
		useUnifiedTopology: true, // Use the new server discovery and monitoring engine
	}
);

// Enable Mongoose debugging to log database activities
mongoose.set("debug", true);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));