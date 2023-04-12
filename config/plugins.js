module.exports = ({ env }) => ({
  publisher: {
    enabled: true,
    config: {
      components: {
        dateTimePicker: {
          step: 1,
        },
      },
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          console.log("beforePublish");
        },
        afterPublish: async ({ strapi, uid, entity }) => {
          console.log("afterPublish");
        },
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          console.log("beforeUnpublish");
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {
          console.log("afterUnpublish");
        },
      },
    },
  },
  "content-versioning": {
    enabled: true,
  },
  "preview-button": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::post.post",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
        },
      ],
    },
  },
});
