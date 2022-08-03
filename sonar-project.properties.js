const scanner = require('sonarqube-scanner');

scanner(
    {
      serverUrl : 'https://sonarqube.sistemaagil.net',
      token : "9b885a8df8b1957eacff0cc73b1ce3db6d0c9eb6",
      options: {
        'sonar.projectKey':'yavbot-frontend',
        'sonar.projectName': 'yavbot-frontend',
        'sonar.projectDescription': 'Description for "My App" project...',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': 'src',
        'sonar.javascript.lcov.reportPaths': 'coverage/jest/lcov.info'
      }
    },
    () => process.exit()
  )