const filePath = path.join(__dirname, 'scan.txt');

const readFile = () => {
  try {
    if (!filePath) {
      throw new Error('File path is missing!');
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      try {
  
        if (typeof data === 'undefined') {
          throw new Error('File data is missing!');
        }

        if (err) {
          throw new Error(`Unable to read file: ${filePath}`);
        }
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    });
  } catch (err) {
    console.error(err.message);
  }
};

readFile();

module.exports = readFile;
