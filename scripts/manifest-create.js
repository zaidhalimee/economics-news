const fs = require('fs');
const services = ["afaanoromoo", "afrique", "amharic", "arabic", "archive", "azeri", "bengali", "burmese", "cymrufyw", "gahuza", "gujarati", "hausa", "hindi", "igbo", "indonesia", "japanese", "korean", "kyrgyz", "marathi", "mundo", "naidheachdan", "nepali", "news", "newsround", "pashto", "persian", "pidgin", "portuguese", "punjabi", "russian", "scotland", "serbian", "sinhala", "somali", "sport", "swahili", "tamil", "telugu", "thai", "tigrinya", "turkce", "ukchina", "ukrainian", "urdu", "uzbek", "vietnamese", "yoruba", "zhongwen"];

const IMAGE_VERSION = '1';
const COPY_IMAGES_ACROSS = false;
const NEW_IMAGES_FOLDER_LOCATION = '/absolute/path/to/your/new/images';

const servicesWithoutLite = ["archive", "cymrufyw", "naidheachdan", "news", "newsround", "scotland", "sport"];

services.forEach(service => {
    const mainfestPath = `../public/${service}/manifest.json`;
    const currentManifest = JSON.parse(fs.readFileSync(mainfestPath, 'utf-8'));
    currentManifest.start_url = `https://www.bbc.com/${service}`;
    currentManifest.short_name = currentManifest.short_name.replace(' News', '');
    if (!servicesWithoutLite.includes(service)) currentManifest.shortcuts = [
        {
          "name": "Lite Site",
          "short_name": "Lite",
          "url": `${currentManifest.start_url}.lite`
        }
    ];
    currentManifest.icons = currentManifest.icons.map(icon => {
        icon.src = `${icon.src.split('?')[0]}?v=${IMAGE_VERSION}`;
        return icon;
    });
    if (COPY_IMAGES_ACROSS && !servicesWithoutLite.includes(service)) {
        const iconsPathStem = `../public/${service}/images/icons/`;
        const newIconsPathStem = `${NEW_IMAGES_FOLDER_LOCATION}/${service}/`;
        currentManifest.icons.forEach((icon, i) => {
            const imagename = icon.src.split('/').at(-1).split('?')[0];
            fs.renameSync(newIconsPathStem + imagename, iconsPathStem + imagename);
        });
    }
    newManifest = JSON.stringify(currentManifest, null, 2);
    fs.writeFileSync(mainfestPath, newManifest);

});