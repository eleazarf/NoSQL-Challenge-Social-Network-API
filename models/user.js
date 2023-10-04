// Import necessary modules from mongoose
const { Schema, model } = require("mongoose");

// Define the User schema using mongoose's Schema class
const UserSchema = new Schema(
	{
		// Define the username field with specific properties
		username: {
			type: String,
			unique: true,      // Ensures usernames are unique
			required: true,    // Requires a username to be provided
			trim: true,        // Trims leading and trailing spaces
		},
		// Define the email field with specific properties
		email: {
			type: String,
			required: true,    // Requires an email to be provided
			unique: true,      // Ensures emails are unique
			trim: true,        // Trims leading and trailing spaces
			// Uses a regular expression to validate email format
			match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		},
		// Define the thoughts field as an array of ObjectIds referencing the "Thought" model
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Thought"    // References the "Thought" model
			},
		],
		// Define the friends field as an array of ObjectIds referencing the "User" model
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User"       // References the "User" model
			},
		],
	},
	{
		// Define toJSON options for serialization
		toJSON: {
			virtuals: true,    // Include virtual properties in the JSON representation
			getters: true,     // Apply getters to JSON data
		},
		id: false,            // Exclude the default "id" virtual field
	}
);

// Define a virtual property "friendCount" for the User schema
UserSchema.virtual("friendCount").get(function () {
	return this.friends.length;  // Calculates the number of friends for a user
});

// Create a "User" model using the defined schema
const User = model("User", UserSchema);

// Export the "User" model for use in other parts of the application
module.exports = User;
