const esbuild = require("esbuild");
const lessLoader = require("esbuild-plugin-less");

module.exports = function (grunt) {
  grunt.config.set("esbuild", {
    dev: {
      options: {
        jsx: {
          entryPoints: ["react/starter.jsx"],
          bundle: true,
          loader: { ".js": "jsx" },
          outdir: ".tmp/public/js",
          entryNames: "[name]-[hash]",
        },
        less: {
          entryPoints: ["react/starter.less"],
          bundle: true,
          plugins: [lessLoader.lessLoader()],
          loader: { ".js": "jsx" },
          outdir: ".tmp/public/styles",
          entryNames: "[name]-[hash]",
        },
      },
    },
    build: {},
  });

  grunt.loadTasks("esbuild");
};
