
export const projects = [
    {
      img: '/report.gif',
      title: 'Report Improvements - Dripos',
      date: '2025',
      description: [
        'Enable instant loading of several reports by creating Redshift data warehouses',
        'Improved accuracy of SQL queries by debugging with years of sales data',
        'Enabled full availability of product sales report for immediate restocking insights',
      ],
      skills: ['AWS Redshift', 'React', 'Next.js', 'MySQL', 'AWS'],
      gh: false,
    },
    {
      img: '/daily_insights.gif',
      title: 'Daily Insights - Dripos',
      date: '2025',
      description: [
        'Designed and developed a mobile and desktop-responsive daily insights email template for Dripos, aggregating key business metrics and trends for coffee shop owners',
        'Automated a high-throughput scheduled event for timely delivery to thousands of users',
        'Tracked send and open rates with a MongoDB collection',
      ],
      skills: ['TypeScript', 'Node.js', 'AWS SMS', 'MySQL'],
      gh: false,
    },
    // {
    //   img: '/stream.png',
    //   title: 'Streaming Chrome Extension',
    //   date: '2022',
    //   description: [
    //     'Developed a chrome extension for HackSC that scrapes Twitch chat data and visualizes sentiment in real time',
    //     'Connected nltk sentiment library via socketing to browser client',
    //   ],
    //   skills: ['JavaScript', 'Chrome Extension', 'nltk', 'Socket.io', 'Flask'],
    //   gh: true,
    //   ghLink: 'https://github.com/likhity/twitch-stream-chat-analyzer',
    // },
    {
      img: '/min-wage.jpeg',
      title: 'min-wage npm package',
      date: '2025',
      description: [
        'Published a Typescript npm package that scrapes live from the Department of Labor website ',
        'Fetches the latest minimum wage data for all US states and territories for use in compliant payroll features',
    ],
      skills: ['TypeScript','cheerio', 'npm'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/Minimum-Wage',
    // buttons: [
    //   {
    //     label: 'Demo',
    //     href: 'https://min-wage-demo.vercel.app/',
    //     className: 'btn-blue'
    //   }
    // ],
    },
    {
      img: '/Stripe-Logo.png',
      title: 'Stripe SDK Extension',
      date: '2024',
      description: [
        'Extended the Stripe Node.js SDK to enable advanced testing of payout triggers and webhook flows in a sandbox environment',
        'Built custom scripts to simulate payout events, automate test scenarios, and validate integration with downstream financial systems'
      ],
      skills: ['TypeScript', 'Node.js', 'Stripe', 'Webhooks', 'Unit Testing'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/stripe-cli/tree/elle/trigger',
    },
    {
      img: '/citibike.jpg',
      title: 'iOS Application',
      date: '2020',
      description: [
        'Designed and developed Citibike-esque rental application in Swift',
        'Implemented backend with Heroku, map with Google API, and checkout with Stripe APIs',
      ],
      skills: ['Swift', 'UIKit', 'Heroku', 'Google Maps API', 'Stripe'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/Mobile_iOS_Bird-esque_Application',
    },
    // {
    //   img: '/lunar_lander.gif',
    //   title: 'Pyribs',
    //   date: '2022',
    //   description: [
    //     'Contributed to open-source Python machine learning library for exploring the latent spaces in diffusion models',
    //     'Library used by thousands of researchers worldwide'
    //   ],
    //   skills: ['Python', 'Jax'],
    //   gh: true,
    //   ghLink: 'https://github.com/icaros-usc/pyribs/pull/208',
    // },
    // {
    //   img: '/oculus.jpg',
    //   title: 'Mind Palace',
    //   date: '2023',
    //   description: [
    //     'Created a VR game with an avatar which prompted Alzheimer\'s patients to discuss their memories',
    //     'Transcribed the text from voice, summarized, and generated AI images of their memories in realtime'
    //   ],
    //   skills: ['C#', 'OpenAI'],
    //   gh: true,
    //   ghLink: 'https://github.com/puentesca/newtreehacks2023',
    // },
    // {
    //   img: '/capture.png',
    //   title: 'Image Capturing Pipeline',
    //   date: '2023',
    //   description: [
    //     'First open source application for capturing images, not just videos, from the Intel Realsense Camera',
    //     'Used by researchers in Japan and Korea to create custom datasets',
    //   ],
    //   skills: ['C/C++'],
    //   gh: true,
    //   ghLink: 'https://github.com/eszabo12/image_capturing_pipeline',
    // },
    {
      img: '/codenames.jpg',
      title: 'Codenames',
      date: '2022',
      description: [
        'Programmed and trained an NLP agent to play Codenames, a popular word association game',
        'Added a penalty into the evaluation for black card tokens',
        'The first multi-agent (two-player) AI implementation of Codenames to my knowledge',
      ],
      skills: ['Python', 'OpenAI Gym', 'numpy'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/codenames_project',
    },
    {
      img: '/folio.png',
      title: 'Portfolio  Website',
      date: '2025',
      description: [
        'Designed and built my personal portfolio site to showcase experience',
        'Implemented with a modern TypeScript/Node.js stack, deployed on Vercel',
        'Features smooth carousels (Embla), and custom Tailwind CSS styling'
      ],
      skills: ['TypeScript', 'Node.js', 'Vercel', 'Embla', 'Tailwind CSS'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/portfolio',
    },
    //   {
    //     img: '/flask.gif',
    //     title: 'AI Research',
    //     date: '2023',
    //     description: [
    //       'Innovated on the unique use of contrast sets in my first author AI + Robotics paper as an undergrad. Project highlighted by CoRL and later by NVIDIA Jetson Lab via the continuation of Abrar Anwar',
    //       'As top 15% of workshop submissions, gave a spotlight presentation at The Conference on Robot Learning (CoRL) in Atlanta, Georgia October 2023'
    //     ],
    //     skills: ['Python', 'NLP'],
    //     gh: true,
    //     ghLink: 'https://github.com/eszabo12/VLN-CE',
    //     buttons: [
    //       {
    //         label: 'Paper',
    //         href: 'https://openreview.net/forum?id=uABEHp6tjy',
    //         className: 'btn-blue'
    //       }
    //     ]
    //   },
  ];

  export const experiences = [
    {
      title: 'Dripos (YC S20)',
      description: 'Software Engineer II — Fintech (2024 - 2025)',
      details: [
        'Owned all financial features for this SMB fintech POS platform as the sole fintech engineer',
        'Developed the accounting platform from 0→1 and led integration with Layer Financial for transaction syncing and ledger management',
        'Ranked #2 in code contributions across the company, driving rapid feature delivery and code quality'
      ],
      tech: [
        'TypeScript',
        'React',
        'Next.js',
        'Redis',
        'Postgres',
        'React Native',
        'Go',
        'AWS',
        'Redshift'
      ],
    },
  {
    title: 'Lucendo Labs, Inc.',
    description: '2023 - 2024',
    details: [
      'Co-Founded a marketplace app company, raised an angel round from investors, and led 11 partnerships across the NYC ',
      'Led design and development a fullstack app in Flutter for Android, iOS, and web using Firebase as the backend',
      'Featured in top press such as TechCrunch, Inc. Magazine, and Morning Brew',
    ],
    tech: ['Dart', 'Flutter', 'React', 'Firebase'],
  },
  {
    title: 'Microsoft',
    description: '2021',
    details: [
      'Proved the feasibility of a fullstack proof-of-concept search indexing process for the Windows file explorer',
      'Demoed to stakeholders and led adoption into the Windows 11 release'
    ],
    tech: ['C#', 'C/C++'],
  },
  {
    title: 'NASA',
    description: '2020',
    details: [
      'Built a navigation pipeline for an autonomous inspection rover',
    ],
    tech: ['C/C++', 'ROS', 'Python'],
  },
  {
    title: 'Lucid Circuit',
    description: '2020 - 2021',
    details: [
      'Simulated a machine learning model for satellite telemetry using Python TensorBoard Lite',
      'Developed an API for electrical engineers that stores all information about architecture hardware parsed from JSON',
    ],
    tech: ['Python', 'TensorBoard', 'OpenCV', 'C/C++'],
  },
  {
    title: 'Totall Metal Recycling',
    description: '2019',
    details: [
      'Built Java web applications backed by a relational MySQL database',
      'Created a VBScript-to-Java transpiler in Python to translate thousands of stored procedures',
    ],
    tech: ['Java Swing', 'MySQL', 'Python'],
  },
];
