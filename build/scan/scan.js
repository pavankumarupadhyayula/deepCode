/**
 * Copyright (c) 2023
 *
 * @file Add copy writes reserved with "pavan kumar upadhyayula, <pavankumarupadhyayula@gmail.com>"
 *
 * */
const path = require("path");
const fs = require("fs").promises;

// Get the absolute file path using the current directory (__dirname) and the file name ("scan.txt")
const filePath = path.join(__dirname, "scan.txt");

// Function to read the contents of a file
const readFile = async () => {
  try {
    // Check if the file path is missing
    if (!filePath) {
      throw new Error("File path is missing!");
    }

    // Read the file using fs.readFile method
    const data = await fs.readFile(filePath, "utf-8");

    // Log the file data to the console
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

// Call the readFile function to read the contents of the file
readFile();

// Export the readFile function to be used in other modules
module.exports = readFile;
