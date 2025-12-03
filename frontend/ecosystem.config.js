const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env.deploy" });

dotenv.config({
  path: path.resolve(__dirname, '.env.deploy'),
});

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_REPOSITORY, DEPLOY_PATH, DEPLOY_REF = 'origin/master', 
  } =
  process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      "pre-deploy-local": `scp ./.env  ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
      "post-deploy":
        "cd ${DEPLOY_PATH} && pwd && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
