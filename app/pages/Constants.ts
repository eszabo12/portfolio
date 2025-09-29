
export const projects = [
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
      img: '/citibike.jpg',
      title: 'iOS Rental Application',
      date: '2020',
      description: [
        'Designed and developed Citibike-esque rental application in Swift using UIKit',
        'Implemented backend with Heroku, map with Google API, and checkout with Stripe APIs',
        'Developed for iOS Programming class',
      ],
      skills: ['Swift', 'UIKit', 'Heroku', 'Google Maps API', 'Stripe'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/Mobile_iOS_Bird-esque_Application',
    },
    {
      img: '/stream.png',
      title: 'Streaming Chrome Extension',
      date: '2022',
      description: [
        'Developed a chrome extension for HackSC that scrapes Twitch chat data and visualizes sentiment in real time',
        'Connected nltk sentiment library via socketing to browser client',
      ],
      skills: ['JavaScript', 'Chrome Extension', 'nltk', 'Socket.io', 'Flask'],
      gh: true,
      ghLink: 'https://github.com/likhity/twitch-stream-chat-analyzer',
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
      img: '/lunar_lander.gif',
      title: 'Pyribs',
      date: '2022',
      description: [
        'Contributed to open-source Python machine learning library for exploring the latent spaces in diffusion models',
        'Library used by thousands of researchers worldwide'
      ],
      skills: ['Python', 'Jax'],
      gh: true,
      ghLink: 'https://github.com/icaros-usc/pyribs/pull/208',
    },
    {
      img: '/oculus.jpg',
      title: 'Mind Palace',
      date: '2023',
      description: [
        'Created a VR game with an avatar which prompted Alzheimer\'s patients to discuss their memories',
        'Transcribed the text from voice, summarized, and generated AI images of their memories in realtime'
      ],
      skills: ['C#', 'OpenAI'],
      gh: true,
      ghLink: 'https://github.com/puentesca/newtreehacks2023',
    },
    {
      img: '/flask.gif',
      title: 'VLN-CE Research',
      date: '2023',
      description: [
        'Innovated on the unique use of contrast sets in my first author AI + Robotics paper as an undergrad. Project highlighted by CoRL and later by NVIDIA Jetson Lab via the continuation of Abrar Anwar',
        'As top 15% of workshop submissions, gave a spotlight presentation at The Conference on Robot Learning (CoRL) in Atlanta, Georgia October 2023'
      ],
      skills: ['Python', 'NLP'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/VLN-CE',
      buttons: [
        {
          label: 'Paper',
          href: 'https://openreview.net/forum?id=uABEHp6tjy',
          className: 'btn-blue'
        }
      ]
    },
    {
      img: '/capture.png',
      title: 'Image Capturing Pipeline',
      date: '2023',
      description: [
        'First open source application for capturing images, not just videos, from the Intel Realsense Camera',
        'Used by researchers in Japan and Korea to create custom datasets',
      ],
      skills: ['C/C++'],
      gh: true,
      ghLink: 'https://github.com/eszabo12/image_capturing_pipeline',
    },
  ];
