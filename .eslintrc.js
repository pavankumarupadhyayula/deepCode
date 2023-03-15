module.exports = {
    "env": {
        "browser": true,
        "es2016": true
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules":{
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "max-lines": ["error", {"max": 180, "skipBlankLines": true}]
    }
  }