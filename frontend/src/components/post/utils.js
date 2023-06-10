export const formatDate = (dateString) => {
  // Define the options for formatting the date
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Define the options for formatting the time
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  // Create a new Date object from the provided dateString
  const date = new Date(dateString);

  // Format the date portion of the date object
  const formattedDate = date.toLocaleDateString('en-US', dateOptions);

  // Format the time portion of the date object
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  // Return the formatted date and time as a string
  return `${formattedDate} ${formattedTime}`;
}

export const formatDuration = (startDateTime, endDateTime) => {
  // Create Date objects from the provided startDateTime and endDateTime
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  // Calculate the difference in milliseconds between the start and end dates
  const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

  // Calculate the difference in hours between the start and end dates
  const hoursDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));

  // Calculate the difference in minutes between the start and end dates
  const minutesDifference = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);

  // Initialize the durationString with the hours difference
  let durationString = `${hoursDifference} hrs`;

  // Add the minutes difference to the durationString if it's greater than 0
  if (minutesDifference > 0) {
    durationString += `, ${minutesDifference} min`;
  }

  // Return the durationString with an additional ' long' suffix
  return durationString + ' long';
}
