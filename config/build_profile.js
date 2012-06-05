({
  // The app directory is the repository root
  baseUrl: "../app",
  name: "../lib/almond/almond.js",
  include: ['application'],
  insertRequire: ['application'],
  out: "../build/application.min.js",
  wrap: true
  // Comment out the optimize line if you want
  // optimize: "none",

  // paths: {
  //   mmd: "lib/mmd/mmd"
  // },

  // modules: [
  //   //Optimize the application files.
  //   {
  //     name: "lib/mmd/mmd"
  //   },
  //   {
  //     name: "boot"
  //   }
  // ]
})