const scanner = require('sonarqube-scanner');

scanner(
    {
      serverUrl : 'https://sonarqube.sistemaagil.net',
      token : "yavbot-frontend9assgASGDAKJH8112JGl3UD212312gsd81KK",
      options: {
        'sonar.projectKey':'yavbot-frontend',
        'sonar.projectName': 'yavbot-backernd',
        'sonar.projectDescription': 'Description for "My App" project...',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': 'src',
        'sonar.javascript.lcov.reportPaths': 'coverage/jest/lcov.info'
      }
    },
    () => process.exit()
  )