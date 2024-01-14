module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "testing"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "testing"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
  },
});
