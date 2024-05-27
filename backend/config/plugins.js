module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 50,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "color-picker": {
    enabled: true,
    config: {
      defaultColor: "#000000",
      presetColors: ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff"],
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
