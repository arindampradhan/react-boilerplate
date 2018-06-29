/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected context component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Counter',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    // {
    //   type: 'confirm',
    //   name: 'wantMessages',
    //   default: true,
    //   message: 'Do you want i18n messages (i.e. will this component use text)?',
    // },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = './context/class.js.hbs';
    const contextTemplate = './context/context.js.hbs';
    const lodableTemplate = './context/loadable.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/context.js',
        templateFile: contextTemplate,
        abortOnFail: true,
      },
      // remove testcase
      // {
      //   type: 'add',
      //   path: '../../app/components/{{properCase name}}/tests/index.test.js',
      //   templateFile: './component/test.js.hbs',
      //   abortOnFail: true,
      // },
    ];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/Loadable.js',
        templateFile: lodableTemplate,
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/container/',
    });

    return actions;
  },
};
