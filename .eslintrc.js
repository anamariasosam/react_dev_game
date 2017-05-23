module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true
    },
    "rules" : {
      "arrow-body-style": ["error", "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
