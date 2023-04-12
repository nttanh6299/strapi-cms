import favicon from "./extensions/favicon.png";

const config = {
  head: {
    favicon: favicon,
  },
  tutorials: false,
  notifications: { releases: false },
  translations: {
    en: {
      "Auth.form.register.news.label": "Receive newsletter via email",
      "Auth.form.button.login.strapi": "-",
      "Auth.form.register.subtitle": "-",
      "Auth.form.welcome.title": "Welcome to LP Admin",
      "Auth.form.welcome.subtitle": "Login to your LP account",
      "HomePage.welcome.congrats.content": "-",
      "app.components.HomePage.welcomeBlock.content.again": "-",
      "app.components.LeftMenu.navbrand.title": "LP Admin",
      "components.AutoReloadBlocker.description": "-",
    },
    vi: {
      "Auth.form.register.news.label": "Nhận tin mới qua email",
      "Auth.form.button.login.strapi": "-",
      "Auth.form.register.subtitle": "-",
      "Auth.form.welcome.title": "Chào mừng đến với LP Admin",
      "Auth.form.welcome.subtitle": "Đăng nhập bằng tài khoản của bạn",
      "HomePage.welcome.congrats.content": "-",
      "app.components.HomePage.welcomeBlock.content.again": "-",
      "app.components.LeftMenu.navbrand.title": "LP Admin",
      "components.AutoReloadBlocker.description": "-",
    },
  },
  locales: [
    "vi",
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
