

const core = require('./core');
const fs = require('fs');
const writeFile = require('./write');

// Importing configuration
const configuration = require('../deepcode.config');

// Declaring Directory path and Filenames array
const dirPath = configuration.path;
console.log(dirPath);
const fileNames = [];

/**
 * Reads contents of a directory and processes each file content
 * @returns {void}
 * @throws {Error} if directory path is invalid or any error occurs during file processing 
 */
const readDir = async () => {
  try {
    if (!dirPath) {
      throw new Error('Directory path is invalid');
    }

    const files = await fs.promises.readdir(dirPath);

    if (!files.length) {
      return;
    }

    for (let file of files) {
      console.log(file)
      if (!configuration.exclude.includes(file) && configuration.type.includes(file.split('.')[1])) {
        const filePath = `${dirPath}/${file}`;

        const data = await fs.promises.readFile(filePath, 'utf8');

        const newData = await core(data, configuration);

        const content = newData[0].message.content;
        await writeFile(filePath, content);

        console.log(`${file} processed successfully`);
      }
    }
  } catch (err) {
    console.error(`An error occurred while processing files: ${err}`);
    throw new Error(`An error occurred while processing files: ${err}`);
  }
};

/**
 * Adds copywrite notice to each file processed
 * @copywrite pavan kumar upadhyayula, <pavankumarupadhyayula@gmail.com>
 */

module.exports = readDir;