module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dhuqb4urp'),
        api_key: env('983334313512661'),
        api_secret: env('NfKtE3veGL2WFlxZ_kyJYJS5pIw'),
      },
    },
  },
});