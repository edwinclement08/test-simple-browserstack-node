const webdriver = require('selenium-webdriver')

var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;

var capabilities = {
	"os" : "Windows",
	"os_version" : "10",
	"browser" : "chrome",
	"browser_version" : "latest",
	"name": "BStack -[Jenkins] Sample Test", // test name
	"build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
	"browserstack.local" : browserstackLocal,
	"browserstack.localIdentifier" : browserstackLocalIdentifier,
	"browserstack.user" : username,
	"browserstack.key" : accessKey
};

var driver = new webdriver.Builder().
  forBrowser('chrome').
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();
