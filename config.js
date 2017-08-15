const isDev = process.env.NODE_ENV === 'development'
const basePath = '/custom/site/settings/projects/playbills'

// Basic configuration
const config = {
  brand: 'In the Spotlight',
  tagline: 'Bring past performances from the British Library’s historic playbills collection to life.',
  description: 'Help rediscover popular entertainment from the past 300 years by transcribing names and performances on the playbills of Britain’s old theatres.',
  company: 'The British Library',
  contact: {
    twitter: 'LibCrowds',
    email: 'crowdsourcing@bl.uk'
  },
  githubUrl: 'https://github.com/LibCrowds',
  pybossaHost: isDev ? 'http://127.0.0.1:5000' : 'https://playbills-backend.libcrowds.com',
  dataLicense: {
    name: 'CC0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
}

// Order of preference for project thumbnail types
config.thumbnailPreference = [
  'iiif',
  'custom',
  'gravatar'
]

// Order of preference for user avatar types
config.avatarPreference = [
  'custom',
  'gravatar'
]

// Mapbox configuration for location stats
config.mapbox = {
  id: 'mapbox.streets',
  publicApiToken: 'pk.eyJ1IjoibGliY3Jvd2RzIiwiYSI6ImNpdmlxaHFzNTAwN3YydHBncHV3dHc3aXgifQ.V4WUx9SDcU_XLFJo2M3RxQ'
}

// Specify additional parts of the site that require admin rights
config.requiresAdmin = {
  projectManagement: true
}

// Sentry public DSN
config.sentryPublicDsn = 'https://6b592ec745ca4c7bb8d865e1c002e624@sentry.io/195392'

// Google analytics tracking ID
config.analytics = 'UA-59584422-4'

// Link to the site forum
config.forumUrl = 'https://community.libcrowds.com/t/in-the-spotlight'

// Main background image for the site
config.bgImg = require(`@/${basePath}/background.jpg`)

// Sections of markdown text for the about page
config.about = {
  intro: require(`@/${basePath}/about/intro.md`),
  subsections: [
    {
      id: 'projects',
      title: 'Projects',
      markdown: require(`@/${basePath}/about/projects.md`)
    },
    {
      id: 'technology',
      title: 'Technology',
      markdown: require(`@/${basePath}/about/technology.md`)
    },
    {
      id: 'contact',
      title: 'Contact',
      markdown: require(`@${basePath}/about/contact.md`)
    }
  ]
}

// Vue component for the results page
// config.resultsComponent = require(`@/${basePath}/Results.vue`)

// Footer lead text
config.footer = {
  text: 'Part of the LibCrowds crowdsourcing platform',
  url: 'http://www.libcrowds.com'
}

module.exports = config
