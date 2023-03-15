// Add copy writes reserved with "pavan kumar upadhyayula, <pavankumarupadhyayula@gmail.com>"

/**
 * Writes content to a file at the specified filePath.
 * @param {string} filePath - The path of the file to write to.
 * @param {string} content - The content to write to the file.
 * @returns {void}
 * @throws {TypeError} If filePath is null.
 * @throws {Error} If content is undefined.
 */
 
 const writeFile = async (filePath, content) => {

   try {
    
     // Check for null filePath
     if (filePath === null) {
       throw new TypeError('filePath cannot be null.');
     }
     
     // Check for undefined content
     if (content === undefined) {
       throw new Error('content cannot be undefined.');
     }
     
     // Write content to file
     const fs = require('fs');
     await fs.promises.writeFile(filePath, content);
   } catch (err) {
     console.log(err.message);
   }
 };
 
 module.exports = writeFile;