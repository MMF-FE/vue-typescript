const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  printMessage,
} = require('./utils')

const pkg = require('./package.json')
const templateVersion = pkg.version


module.exports = {
  helpers: {
    if_or(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    template_version() {
      return templateVersion
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name'
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    ie: {
      type: 'confirm',
      message: ' Support IE or older browser?'
    },
    vuex: {
      type: 'confirm',
      message: 'Use vuex?'
    },
    autoInstall: {
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ]
    }
  },
  filters: {
    'src/components/views/todo/**/*': 'vuex',
    'src/store/**/*': 'vuex',
    'typings/interface/state.d.ts': 'vuex'
  },
  complete(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)
    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
}