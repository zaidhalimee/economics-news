const { default: checkManifest } = require('./checkManifest');
const { runValidator } = require('./validator');

runValidator();

checkManifest();
