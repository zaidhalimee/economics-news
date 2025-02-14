import * as fs from "fs";
import { Agent } from "undici";

const caPath = "/etc/pki/tls/certs/ca-bundle.crt";
const certChainPath = "/etc/pki/tls/certs/client.crt";
const keyPath = "/etc/pki/tls/private/client.key";

const getCerts = () => {
  try {
    const cert = fs.readFileSync(certChainPath, "utf8");
    const key = fs.readFileSync(keyPath, "utf8");
    const ca = fs.readFileSync(caPath, "utf8");
    return {
      cert,
      key,
      ca,
    };
  } catch (error) {
    console.log("ERROR GETTING CERTIFICATES", error);
  }

  return null;
};

const getSSLAgent = (credentials) =>
  new Agent({
    connect: {
      ...credentials,
      rejectUnauthorized: false,
      keepAlive: true,
    },
  });

const queryPhobos = async (url) => {
  const credentials = getCerts();
  const dispatcher = getSSLAgent(credentials);

  const request = await fetch(url, {
    dispatcher,
  });

  const { results } = await request.json();

  return results;
};

export const fetchAres = async (id) => {
  const credentials = getCerts();
  const dispatcher = getSSLAgent(credentials);

  const isAsset = id.includes("asset");
  const identifier = isAsset
    ? id.replace("urn:bbc:ares::asset:", "")
    : id.replace("urn:bbc:ares::article:", "");

  const url = isAsset
    ? `https://service-gateway.fabl.api.bbci.co.uk/service/ares/path/article%2F${identifier.replace(
        "/",
        "%2F"
      )}`
    : `https://ares-api.api.bbci.co.uk/api/article/${identifier}`;


  // if (isAsset && identifier.match(/news|uk|england|sport|weather/g)) {
  //   return { url, article: null };
  // }

  const request = await fetch(url, {
    dispatcher,
  });

  const article = await request.json();

  return { url, article };
};


export const fetchURL = async (url) => {
  const credentials = getCerts();
  const dispatcher = getSSLAgent(credentials);

  const request = await fetch(url, {
    dispatcher,
  });

  const results = await request.json();

  return results;
};

export default queryPhobos;
