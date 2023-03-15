module.exports = {
  "*.{js,ts,tsx}": [
    "eslint --ext .js,.ts,.tsx --cache --fix",
    "prettier --write",
  ],
  "**/*.ts?(x)": () => "tsc --noEmit",
  "*.{css,scss}": "stylelint --cache --fix",
  "*.{json,md,html,css,scss}": "prettier --write",
};
