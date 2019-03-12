import fs from 'fs';
import path from 'path';
import { loadInitialData } from '@bbc/spartacus/utilities';
import { Helmet } from 'react-helmet';
import renderDocument from '@bbc/spartacus/document';
import { ServerStyleSheet } from 'styled-components';
import expressServer from '@bbc/spartacus/server';
import Logger from '@bbc/spartacus/logger';
import routes, {
  articleRegexPath,
  articleDataRegexPath,
  manifestRegexPath,
  swRegexPath,
} from '../app/routes';
import ResourceHints from '../app/components/ResourceHints';

const logger = Logger(`simorgh:${__filename}`);

const dataFolderToRender =
  process.env.NODE_ENV === 'production' ? 'data/prod' : 'data/test';

expressServer
  .get(articleDataRegexPath, async ({ params }, res) => {
    const { service, id } = params;

    const dataFilePath = path.join(
      dataFolderToRender,
      service,
      'articles',
      `${id}.json`,
    );

    fs.readFile(dataFilePath, (error, data) => {
      if (error) {
        res.sendStatus(404);
        logger.error(`error reading article json, ${error}`);
        return null;
      }

      const articleJSON = JSON.parse(data);

      res.setHeader('Content-Type', 'application/json');
      res.json(articleJSON);
      return null;
    });
  })
  .get(swRegexPath, (req, res) => {
    const swPath = `${__dirname}/public/sw.js`;
    res.sendFile(swPath, {}, error => {
      if (error) {
        logger.error(error);
        res.status(500).send('Unable to find service worker.');
      }
    });
  })
  .get(manifestRegexPath, async ({ params }, res) => {
    const { service } = params;
    const manifestPath = `${__dirname}/public/${service}/manifest.json`;
    res.sendFile(manifestPath, {}, error => {
      if (error) {
        console.log(error); // eslint-disable-line no-console
        res.status(500).send('Unable to find manifest.');
      }
    });
  })
  .get(articleRegexPath, async ({ url }, res) => {
    try {
      const data = await loadInitialData(url, routes);
      const { status } = data;

      res
        .status(status)
        .send(
          await renderDocument(
            url,
            data,
            routes,
            ResourceHints,
            ServerStyleSheet,
            Helmet,
          ),
        );
    } catch ({ message, status }) {
      // Return an internal server error for any uncaught errors
      logger.error(`status: ${status || 500} - ${message}`);
      res.status(500).send(message);
    }
  });

export default expressServer;
