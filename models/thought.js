// Import necessary modules from mongoose and a date formatting utility
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Define the Reaction schema
const ReactionSchema = new Schema(
	{
		// Define the reactionId field as an ObjectId with a default value
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},dateFormat
		// Define the reactionBody field with specific properties
		reactionBody: {
			type: String,
			required: true,   // Requires a reaction body to be provided
			trim: true,       // Trims leading and trailing spaces
			minlength: 1,     // Minimum length of 1 character
			maxlength: 280,   // Maximum length of 280 characters
		},
		// Define the username field with specific properties
		username: {
			type: String,
			required: true,   // Requires a username to be provided
			trim: true,       // Trims leading and trailing spaces
		},
		// Define the createdAt field with a default value and a getter for date formatting
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAtVal) => dateFormat(createdAtVal),
		},
	},
	{
		// Define toJSON options for serialization
		toJSON: {
			getters: true,   // Apply getters to JSON data
		},
	}
);

// Define the Thought schema
const ThoughtSchema = new Schema(
	{
		// Define the username field with specific properties
		username: {
			type: String,
			required: true,   // Requires a username to be provided
			trim: true,       // Trims leading and trailing spaces
		},
		// Define the thoughtText field with specific properties
		thoughtText: {
			type: String,
			required: true,   // Requires a thought text to be provided
			minlength: 1,     // Minimum length of 1 character
			maxlength: 280,   // Maximum length of 280 characters
		},
		// Define the createdAt field with a default value and a getter for date formatting
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAtVal) => dateFormat(createdAtVal),
		},
		// Define the reactions field as an array of ReactionSchema
		reactions: [ReactionSchema],
	},
	{
		// Define toJSON options for serialization
		toJSON: {
			virtuals: true,   // Include virtual properties in the JSON representation
			getters: true,    // Apply getters to JSON data
		},
		id: false,            // Exclude the default "id" virtual field
	}
);

// Define a virtual property "reactionCount" for the Thought schema
ThoughtSchema.virtual("reactionCount").get(function () {
	return this.reactions.length;  // Calculates the number of reactions for a thought
});

// Create a "Thought" model using the defined schema
const Thought = model("Thought", ThoughtSchema);

// Export the "Thought" model for use in other parts of the application
module.exports = Thought;
