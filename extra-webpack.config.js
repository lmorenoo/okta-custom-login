// Support storing environment variables in a file named "testenv"
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Read environment variables from "testenv". Override environment vars if they are already set.
const TESTENV = path.resolve(__dirname, '.env');
if (fs.existsSync(TESTENV)) {
  const envConfig = dotenv.parse(fs.readFileSync(TESTENV));
  Object.keys(envConfig).forEach((k) => {
    process.env[k] = envConfig[k];
  });
} else {
  console.log('environment file not exist');
}
process.env.CLIENT_ID = process.env.CLIENT_ID || process.env.SPA_CLIENT_ID;

const webpack = require('webpack');
const env = {};

// List of environment variables made available to the app
[
  'ISSUER',
  'CLIENT_ID',
].forEach(function (key) {
  console.log(key);
  console.log(process.env[key]);
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} must be set. See README.md`);
  }
  env[key] = JSON.stringify(process.env[key]);
});

// Added to angular's webpack config by @angular-builders/custom-webpack
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
};
