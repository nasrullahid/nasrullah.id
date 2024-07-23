module.exports = {
  apps: [
    {
      name: 'nasrullah.id',
      script: 'npm run build && npm run preview',
      post_update: [
        'echo App has been updated, running npm install...',
        'npm install',
        'echo App is being restarted now',
      ],
      exec_timeout: 30000,
    },
  ],
};
