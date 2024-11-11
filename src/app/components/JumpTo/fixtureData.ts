const pidginArticleFixtureWithJumpToBlock = {
  data: {
    article: {
      metadata: {
        atiAnalytics: {
          categoryName: 'US+election+2024',
          contentId: 'urn:bbc:optimo:asset:cn03je8kwpko',
          contentType: 'article',
          language: 'pcm',
          pageTitle: 'Kamala Harris Fox News interview in four short points',
          timePublished: '2024-10-17T09:27:26.770Z',
          timeUpdated: '2024-10-17T09:41:25.801Z',
        },
        id: 'urn:bbc:ares::article:cn03je8kwpko',
        type: 'article',
        language: 'pcm',
      },
      content: {
        model: {
          blocks: [
            {
              id: 'headline',
              type: 'headline',
              model: {
                text: 'Kamala Harris Fox interview in four short points',
              },
            },
            {
              id: 'timestamp',
              type: 'timestamp',
              model: {
                firstPublished: 1729157246770,
                lastPublished: 1729158085801,
              },
            },
            {
              id: 'text-intro',
              type: 'text',
              model: {
                blocks: [
                  {
                    type: 'paragraph',
                    model: {
                      text: 'Kamala Harris discusses her views in a Fox interview.',
                    },
                  },
                ],
              },
            },
            {
              id: 'jumpTo',
              type: 'jumpTo',
              model: {
                jumpToHeadings: [
                  { heading: 'Harris separates from Biden' },
                  { heading: 'Prison gender surgery debate' },
                  { heading: 'Apology challenge' },
                  { heading: "Biden's mental state questioned" },
                ],
              },
            },
            {
              id: 'text-main',
              type: 'text',
              model: {
                blocks: [
                  {
                    type: 'paragraph',
                    model: {
                      text: "Harris touched on several critical issues in the interview, including Biden's policy and her stance on prison reforms.",
                    },
                  },
                ],
              },
            },
            {
              id: 'e57fb0e0',
              type: 'relatedContent',
              model: {
                blocks: [
                  {
                    id: '26fa1597',
                    type: 'link',
                    model: {
                      locator: 'urn:bbc:optimo:asset:cdje1lw18lzo',
                      blocks: [
                        {
                          id: '3f70a449',
                          type: 'image',
                          model: {
                            blocks: [
                              {
                                id: '098fa7b7',
                                type: 'altText',
                                model: {
                                  blocks: [
                                    {
                                      id: 'f7e1b31f',
                                      type: 'text',
                                      model: {
                                        blocks: [
                                          {
                                            id: '8da54f5e',
                                            type: 'paragraph',
                                            model: {
                                              text: 'भारत में कनाडा के पूर्व उच्चायुक्त रहे कैमरन मैके',
                                              blocks: [
                                                {
                                                  id: '0bc1c237',
                                                  type: 'fragment',
                                                  model: {
                                                    text: 'भारत में कनाडा के पूर्व उच्चायुक्त रहे कैमरन मैके',
                                                    attributes: [],
                                                  },
                                                  position: [
                                                    28, 1, 1, 1, 1, 1, 1,
                                                  ],
                                                },
                                              ],
                                            },
                                            position: [28, 1, 1, 1, 1, 1],
                                          },
                                        ],
                                      },
                                      position: [28, 1, 1, 1, 1],
                                    },
                                  ],
                                },
                                position: [28, 1, 1, 1],
                              },
                              {
                                id: '4208b128',
                                type: 'rawImage',
                                model: {
                                  width: 900,
                                  height: 506,
                                  locator:
                                    '0ee5/live/9f5ead50-8e98-11ef-8877-57959f89248c.jpg',
                                  originCode: 'cpsprodpb',
                                  copyrightHolder: '@HCCanInd',
                                },
                                position: [28, 1, 1, 2],
                              },
                            ],
                          },
                          position: [28, 1, 1],
                        },
                        {
                          id: '7a0d2a60',
                          type: 'text',
                          model: {
                            blocks: [
                              {
                                id: '7dfdfa1c',
                                type: 'paragraph',
                                model: {
                                  text: 'भारत में कनाडा के उच्चायुक्त रहे कैमरन मैके का निज्जर और पन्नू मामले पर बड़ा दावा',
                                  blocks: [
                                    {
                                      id: 'e72f0f2d',
                                      type: 'urlLink',
                                      model: {
                                        text: 'भारत में कनाडा के उच्चायुक्त रहे कैमरन मैके का निज्जर और पन्नू मामले पर बड़ा दावा',
                                        locator:
                                          'https://www.bbc.com/hindi/articles/cdje1lw18lzo',
                                        blocks: [
                                          {
                                            id: '2c7536ce',
                                            type: 'fragment',
                                            model: {
                                              text: 'भारत में कनाडा के उच्चायुक्त रहे कैमरन मैके का निज्जर और पन्नू मामले पर बड़ा दावा',
                                              attributes: [],
                                            },
                                            position: [28, 1, 2, 1, 1, 1],
                                          },
                                        ],
                                        isExternal: false,
                                      },
                                      position: [28, 1, 2, 1, 1],
                                    },
                                  ],
                                },
                                position: [28, 1, 2, 1],
                              },
                            ],
                          },
                          position: [28, 1, 2],
                        },
                        {
                          id: '27ef02c6',
                          type: 'aresLink',
                          model: {
                            blocks: [
                              {
                                id: '56f83dfe',
                                type: 'optimoLinkMetadata',
                                model: {
                                  timestamp: 1729403402506,
                                  consumableAsSFV: false,
                                },
                                position: [28, 1, 3, 1],
                              },
                            ],
                          },
                          position: [28, 1, 3],
                        },
                      ],
                    },
                    position: [28, 1],
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  contentType: 'application/json; charset=utf-8',
};

export default pidginArticleFixtureWithJumpToBlock;
