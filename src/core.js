const { Configuration, OpenAIApi } = require('openai');
const codePrettierrc = require('../.prettierrc.json');
const codeEslintrc = require('../.eslintrc.js');

const ai = async (data, sentence) => {
  if (data) {
    const configuration = new Configuration({
      apiKey : process.env.apiKey,
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo-0301',
      messages: [
        {
          role: 'assistant',
          content: `Please improve code quality and update this ${data} JavaScript with best practices, and ${sentence}. No need for code explanation, just give me code.`,
        },
      ],
    });

    return await response.data.choices;
  }
  return [];
};

const createSentence = (options) => {
  let sentence = 'Add copy writes reserved with "pavan kumar upadhyayula, <pavankumarupadhyayula@gmail.com>" on each file, ';

  if (!options) return sentence;

  if (options.compile !== null) {
    sentence += `Compile JavaScript to ${options.compile}. `;
  }

  if (options.polyfil) {
    sentence += `Add required 'polyfills' to support webkit, Chrome versions below 56. `;
  }

  if (options.hoisting) {
    sentence += `Avoid JavaScript 'hoisting' and update with best practices. `;
  }

  if (options.nullCheck) {
    sentence += `Do 'null' check as mandatory. `;
  }

  if (options.undefinedCheck) {
    sentence += `Do 'undefined' check as mandatory. `;
  }

  if (options.codeComments) {
    sentence += `Add code comments with expected params, return statement, and expected error. `;
  }

  if (options.runtimeErrors) {
    sentence += `check for javaScript runtime errors by adding try, catch blocks. `;
  }

  if(options.prettierrc) {
    sentence += `Apply 'Prettier' format rules as per rules ${JSON.stringify(codePrettierrc)}. `;
  }

  if(options.eslintrc) {
    sentence += `please fix 'eslint' issus as per these rules ${JSON.stringify(codeEslintrc.rules)}. `;
  }


  return sentence;
};

const model = (data, options) => {
  return new Promise((resolve, reject) => {
    ai(data, createSentence(options))
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

module.exports = model;