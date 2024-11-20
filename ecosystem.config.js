module.exports = {
  apps: [
    {
      name: 'nasrullah.id',
      script: 'npm i && npm run build && npm run preview --host 0.0.0.0 --port 4000',
      post_update: [
        'echo App has been updated, running npm install...',
        'npm install',
        'echo App is being restarted now',
      ],
      exec_timeout: 30000,
    },
  ],
};
