// Function to add date suffix (e.g., 1st, 2nd, 3rd, 4th) to a given date
const addDateSuffix = (date) => {
	// Convert the date to a string
	let dateStr = date.toString();

	// Get the last character of the date string
	const lastChar = dateStr.charAt(dateStr.length - 1);

	// Check for special cases (e.g., 1st, 2nd, 3rd, or else add "th" suffix)
	if (lastChar === "1" && dateStr !== "11") {
		dateStr = `${dateStr}st`;
	} else if (lastChar === "2" && dateStr !== "12") {
		dateStr = `${dateStr}nd`;
	} else if (lastChar === "3" && dateStr !== "13") {
		dateStr = `${dateStr}rd`;
	} else {
		dateStr = `${dateStr}th`;
	}

	return dateStr;
};

// Function to format a timestamp into a human-readable date and time
module.exports = (
	timestamp,
	{ monthLength = "short", dateSuffix = true } = {}
) => {
	// Define month names based on monthLength parameter
	let months;

	if (monthLength === "short") {
		months = {
			0: "Jan",
			1: "Feb",
			2: "Mar",
			3: "Apr",
			4: "May",
			5: "Jun",
			6: "Jul",
			7: "Aug",
			8: "Sep",
			9: "Oct",
			10: "Nov",
			11: "Dec",
		};
	} else {
		months = {
			0: "January",
			1: "February",
			2: "March",
			3: "April",
			4: "May",
			5: "June",
			6: "July",
			7: "August",
			8: "September",
			9: "October",
			10: "November",
			11: "December",
		};
	}

	// Create a Date object from the provided timestamp
	const dateObj = new Date(timestamp);

	// Get the formatted month based on the month number
	const formattedMonth = months[dateObj.getMonth()];

	let dayOfMonth;

	// Check if dateSuffix is enabled
	if (dateSuffix) {
		// Add date suffix (e.g., 1st, 2nd, 3rd, 4th)
		dayOfMonth = addDateSuffix(dateObj.getDate());
	} else {
		// Use the plain day of the month without suffix
		dayOfMonth = dateObj.getDate();
	}

	// Get the year
	const year = dateObj.getFullYear();

	let hour;

	// Check for 24-hour time format
	if (dateObj.getHours > 12) {
		hour = Math.floor(dateObj.getHours() / 2);
	} else {
		hour = dateObj.getHours();
	}

	// If hour is 0 (midnight), change it to 12
	if (hour === 0) {
		hour = 12;
	}

	// Get the minutes
	const minutes = dateObj.getMinutes();

	// Determine whether it's AM or PM
	let periodOfDay;

	if (dateObj.getHours() >= 12) {
		periodOfDay = "pm";
	} else {
		periodOfDay = "am";
	}

	// Format the timestamp as a human-readable string
	const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

	return formattedTimeStamp;
};
