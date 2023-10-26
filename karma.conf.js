module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"], 
    browsers: ["Chrome"], 
    files: [
      "src/**/*.spec.ts", 
    ],
    exclude: ["src/**/*.interface.ts", "src/**/*.directive.ts", "src/app/app.component.ts"],

    preprocessors: {
      "**/*.ts": ["webpack"], 
    },
    coverageIstanbulReporter: {
        dir: require('path').join(__dirname, 'coverage'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true,
        thresholds: {
            statements: 80,
            lines: 80,
            branches: 80,
            functions: 80
        }
    },
    reporters: ["progress", "kjhtml", "coverage"], 
    port: 9876, 
    colors: true, 
    logLevel: config.LOG_INFO, 
    autoWatch: true, 
    singleRun: false, 
    concurrency: Infinity, 
    webpack: require("./webpack.config.js"), 
    webpackMiddleware: {
      stats: "errors-only",
    },
  });
};
