#!/usr/bin/node
const fs = require('fs');

// Get file paths from command line arguments
const [sourceFile1, sourceFile2, destinationFile] = process.argv.slice(2);

// Function to read file asynchronously
const readFileAsync = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

// Function to write to file asynchronously
const writeFileAsync = (filePath, data) => new Promise((resolve, reject) => {
  fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) reject(err);
    else resolve();
  });
});

// Main function to handle file operations
const concatFiles = async () => {
  try {
    // Read both files
    const data1 = await readFileAsync(sourceFile1);
    const data2 = await readFileAsync(sourceFile2);

    // Concatenate contents without adding extra space
    const concatenatedData = data1 + data2;

    // Write to destination file
    await writeFileAsync(destinationFile, concatenatedData);

    console.log(`Contents of ${sourceFile1} and ${sourceFile2} have been concatenated into ${destinationFile}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

// Call the main function
concatFiles();
