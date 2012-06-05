({
  // The app directory is the repository root
  baseUrl: "../app",
  name: "../lib/almond/almond.js",
  include: ['application'],
  insertRequire: ['application'],
  out: "../build/application.min.js",
  wrap: true,

  // optimize: "none",

  paths: {
  }
})