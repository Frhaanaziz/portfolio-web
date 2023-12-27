module.exports = {
  apps: [
    {
      name: 'aththariq.com',
      script: 'npm',
      args: 'run start',
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      //   instances: 'max',
      //   exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
