/* eslint-disable import/extensions */
import checkManifest from './checkManifest/index.js';
import { runValidator } from './validator/index.js';

runValidator();

await checkManifest();
