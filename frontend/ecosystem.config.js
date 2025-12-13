const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env.deploy" });

dotenv.config({
  path: path.resolve(__dirname, '.env.deploy'),
});

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_REPOSITORY, DEPLOY_PATH, DEPLOY_REF = 'master', 
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
      "post-deploy":
        `cd frontend && pwd && npm i && npm ci && npm fund && npm run build`,
    },
  },
};
