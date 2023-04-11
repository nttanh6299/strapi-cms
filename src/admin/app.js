const config = {
  tutorials: false,
  notifications: { releases: false },
  translations: {
    vi: {
      "app.components.LeftMenu.navbrand.title": "LP Admin",
    },
    en: {
      "app.components.LeftMenu.navbrand.title": "LP Admin",
    },
  },
  locales: [
    'vi',
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
