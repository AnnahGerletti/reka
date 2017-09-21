require('babel-register')

module.exports = {
  src_folders: ['./test/e2e/tests'],
  output_folder: './test/e2e/logs',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: './test/e2e/pages',
  globals_path: './test/e2e/config/globals',

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/3.5.3-server.jar',
    log_path: './test/e2e/logs',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.32-x64-chromedriver'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: false,
        path: ''
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
