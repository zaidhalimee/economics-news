import { Environments } from '../../../models/types/global';

export type TopicPagePaths = '/persian/afghanistan';

export const TOPIC_PAGE_CONFIG: {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [path in TopicPagePaths]: { [env in Environments]: string };
} = {
  '/persian/afghanistan': {
    local: 'crezq2dg9zwt',
    test: 'c15er11zq57t',
    live: 'crezq2dg9zwt',
  },
};
