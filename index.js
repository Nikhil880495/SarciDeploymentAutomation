const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');
const Ajv = require('ajv');
const schema = require('./validation_schema.js')



try {
  const yamlFile = core.getInput('yamlFile');
  const parsedYaml = await yaml.load(yamlFile.toString('utf-8'));
  console.log(parsedYaml);
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(parsedYaml);
  console.log(isValid);
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
