const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env.deploy" });
require("dotenv").config()

dotenv.config({
  path: path.resolve(__dirname, '.env.deploy'),
});

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_REPOSITORY, DEPLOY_PATH, DEPLOY_REF, 
  } =
  process.env;

module.exports = {
  apps: [
    {
      name: "backend",
      script: "dist/app.js",
      cwd: path.resolve(__dirname),
      env: {
        NODE_ENV: 'production',
    },
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      "pre-deploy-local": `bash scripts/deployEnv.sh ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
      "post-deploy":
         `cd backend && pwd && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production`,
    },
  },
};
