exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: 'chrome', // or "firefox", "microsoftedge", "safari"
    },
    
    {
      browserName: 'edge',
    },
  ],

  logLevel: 'info',

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['visual'],
  

  framework: 'mocha',

    reporters: ['spec',
        ['allure', { outputDir: 'allure-results' }]],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    },
  async before() {
    await browser.maximizeWindow(); // Максимизация окна перед тестами
  },

  // Хук после каждого теста
    async afterTest(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot(); // Сохраняем скриншот в случае ошибки
        }
    },
};
