## Description

Simple English:
The MediaLoader takes data from the BFF and converts it into a settings object that BUMP can understand.

BUMP (BBC Universal Media Player module) is a module that embeds videos into a webpage. Its an alternative to the standard <video> interface in HTML5.

Long English:
The MediaLoader uses the BBC Universal Media Player module (BUMP) to choose the correct Embedded Media Player (EMP) for the user's device. Using BUMP removes the concerns involved in serving different devices and web-browsers as BUMP automatically provides the best fitting EMP for the client. For example, BUMP can cater for differences between mobiles, laptops and desktops, but also factors such as whether the user is using network data (3G) or a WIFI.

## Local Development

So that the EMP can load video data, our localhost's domain name should be altered from `localhost:7080` to `localhost.bbc.com:7080` to fully encorporate the bbc domain name (bbc) and top-level domain (.com).

First, run the command (you only need to run this once):

`sudo -- sh -c -e "echo '127.0.0.1       localhost.bbc.com' >> /etc/hosts";`

Then, access local pages using: `localhost.bbc.com:7080/`,
eg.
Express pages: `http://localhost.bbc.com:7080/afaanoromoo/articles/c4g19kgl85ko`

Next pages: `http://localhost.bbc.com:7081/pidgin/live/c7p765ynk9qt?renderer_env=test`

Currently, the EMP is set to only load Live video assets by default. To load test assets, append the query `?renderer_env=test` to the url. Eg. `http://localhost.bbc.com:7080/afaanoromoo/articles/c4g19kgl85ko?renderer_env=test`

## Note on playback in local development

In the Next.js app we have `reactStrictMode: true`. This causes lifecycle hooks to be called twice in development mode. This can result in the media player being loaded twice, causing mulitple playbacks of the same media. This does **not** happen in production mode.

## Component Structure

Component file structure

    ├── MediaLoader
    	├── configs
    		├── aresMedia.ts
    		├── audio.ts
    		├── clipMedia.ts
    		├── legacyMedia.ts
    		├── liveMedia.ts
    		├── liveRadio.ts
    		├── tv.ts
    		├── index.ts
    	├── Placeholder
    	├── index.tsx

The MediaLoader component takes in a video block from the BFF and converts it into a BUMP settings object through the function in `configs/index.ts`. The BFF does not provide video blocks in a uniformed way, since our editors publish videos from different sources. For greater flexibility, we allow the BFF to provide video data in its native form and use a respective script within the configs folder to process the data into a BUMP settings object.

The following sources that our configs folder currently support are:
|Source|Description |
|--|--|
| aresMedia | |
| audio | For podcasts. |
| clipMedia | |
| legacyMedia | |
| liveMedia | For live content provided through Silver (SImple Live Video sERvice): [More information](https://confluence.dev.bbc.co.uk/display/LiveSchedule/Silver+-+Simple+Live+Video+Service) |
| liveRadio | |
| tv | |

**Important: The media loader will not play live videos on the test environment and vice-versa.**
