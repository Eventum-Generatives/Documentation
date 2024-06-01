// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gettingStartedSidebar: [
    {
      type: 'doc',
      id: 'getting_started/overview/index'
    },
    {
      type: 'doc',
      id: 'getting_started/installation/index'
    },
    {
      type: 'doc',
      id: 'getting_started/first_run/index'
    }
  ],
  configuringSidebar: [
    {
      type: 'doc',
      id: 'configuring/config_file/index'
    },
    {
      type: 'doc',
      id: 'configuring/files_and_locations/index'
    },
    {
      type: 'doc',
      id: 'configuring/arguments_and_settings/index'
    },
    {
      type: 'doc',
      id: 'configuring/keyring/index'
    },
  ],
  pluginsSidebar: [
    {
      type: 'category',
      label: 'Plugins',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'plugins/index'
      },
      items: [
        {
          type: 'category',
          label: 'Input plugins',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'doc',
            id: 'plugins/input_plugins/cron/index'
          },
          items: [
            {
              type: 'doc',
              id: 'plugins/input_plugins/cron/index'
            },
            {
              type: 'doc',
              id: 'plugins/input_plugins/linspace/index'
            },
            {
              type: 'doc',
              id: 'plugins/input_plugins/sample/index'
            },
            {
              type: 'doc',
              id: 'plugins/input_plugins/time_patterns/index'
            },
            {
              type: 'doc',
              id: 'plugins/input_plugins/timer/index'
            },
            {
              type: 'doc',
              id: 'plugins/input_plugins/timestamps/index'
            },
          ]
        },
        {
          type: 'category',
          label: 'Event plugins',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'doc',
            id: 'plugins/event_plugins/jinja/index'
          },
          items: [
            {
              type: 'doc',
              id: 'plugins/event_plugins/jinja/index'
            },
          ]
        },
        {
          type: 'category',
          label: 'Output plugins',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'doc',
            id: 'plugins/output_plugins/file/index'
          },
          items: [
            {
              type: 'doc',
              id: 'plugins/output_plugins/file/index'
            },
            {
              type: 'doc',
              id: 'plugins/output_plugins/opensearch/index'
            },
            {
              type: 'doc',
              id: 'plugins/output_plugins/stdout/index'
            },
          ]
        },
      ]
    },
  ]
};

export default sidebars;
