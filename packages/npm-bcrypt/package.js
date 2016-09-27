Package.describe({
  summary: "Wrapper around the bcrypt npm package",
  version: "0.9.2-beta.6",
  documentation: null
});

Npm.depends({
  bcryptjs: "2.3.0"
});

Package.onUse(function (api) {
  api.use("modules@0.7.5", "server");
  api.mainModule("wrapper.js", "server");
  api.export("NpmModuleBcrypt", "server");
});
