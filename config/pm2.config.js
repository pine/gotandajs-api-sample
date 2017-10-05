'use strict'

const path = require('path')

const cwd = path.join(__dirname, '..')
const script = path.join(cwd, 'packages/app/bin/server')

module.exports = {
  apps: [
    {
      name : 'api',
      script,
      cwd,
      watch: false,
      wait_ready: true,
      instances: 1,
      exec_mode: 'cluster_mode',
      max_memory_restart: '100M',
      kill_timeout: 3000,
      env: {
        NODE_ENV: 'development',
      },
      env_production : {
        NODE_ENV: 'production',
      },
    },
  ],
}
