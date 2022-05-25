module.exports = ({ env }) => ({
  url: env('STRAPI_URL'),
  dirs: {
    public: "/data/public"
  },
});
