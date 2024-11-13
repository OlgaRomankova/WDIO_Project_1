exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],
  services: ['devtools'],

  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome', // or "firefox", "microsoftedge", "safari"
      'goog:chromeOptions': {
        args: ['--disable-gpu'], // Отключаем использование GPU, иначе тест зацикливается
      },
    },

    // {
    //   browserName: 'edge',
    // },
  ],

  logLevel: 'info',

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['visual'],

  framework: 'mocha',

  reporters: [
    'spec',
    // [
    //   'allure',
    //   {
    //     outputDir: 'allure-results',
    //   },
    // ],
    [
      'junit',
      {
        outputDir: 'junit-reports',
        outputFileFormat: function(options){
          // return `results-${new Date().getTime()}.xml`;
          return `results-${options.cid}.${options.capabilities}.xml`;
        },
      },
    ],
  ],

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

