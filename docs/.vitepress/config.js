const nav = [{ text: 'Guide', link: '/guide/' }];

const sidebar = {
  '/': [
    {
      text: 'Guide',
      children: [
        {
          text: 'Getting Started',
          link: '/guide/',
        },
      ],
    },
    {
      text: 'API',
      children: [
        {
          text: 'Company',
          link: '/api/company',
        },
        {
          text: 'Date',
          link: '/api/date',
        },
        {
          text: 'Finance',
          link: '/api/finance',
        },
        {
          text: 'Internet',
          link: '/api/internet',
        },
      ],
    },
  ],
};

const description = 'A simple tool to generate dummy data useful for testing.';

module.exports = {
  title: 'Dummynator',
  description,
  head: [
    [
      'meta',
      {
        property: 'og:description',
        content: description,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'description',
        content: description,
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  ],
  themeConfig: {
    repo: 'maku85/dummynator.js',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    nav,
    sidebar,
  },
};
