const esbuild = require("esbuild");

module.exports = function (grunt) {
  grunt.registerMultiTask("esbuild", "Runs esbuild", async function () {
    const done = this.async();
    const options = this.options();
    await esbuild.build(options.jsx);
    await esbuild.build(options.less);
    grunt.log.ok("Esbuild complete.");
    done();
  });
};
