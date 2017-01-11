var path = require('path');
var ltx = require('ltx');
var xdtTransform = require('webdeployment-common/xdttransformationutility.js');
process.env["SYSTEM_DEFAULTWORKINGDIRECTORY"] = path.join(__dirname, 'L0XdtTransform');
xdtTransform.applyXdtTransformation(path.join(__dirname, 'L0XdtTransform', 'Web_test.config'), path.join(__dirname, 'L0XdtTransform', 'Web.Debug.config'));
process.env['SYSTEM_DEFAULTWORKINGDIRECTORY'] = 'DefaultWorkingDirectory';