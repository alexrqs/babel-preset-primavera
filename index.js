module.exports = function() {
  return {
    plugins: [
      require("@babel/plugin-proposal-function-bind"),
      require("@babel/plugin-proposal-throw-expressions"),
      require("@babel/plugin-proposal-logical-assignment-operators"),
      require("@babel/plugin-proposal-export-default-from"),
      [require("@babel/plugin-proposal-optional-chaining"), { "loose": false }],
      [require("@babel/plugin-proposal-pipeline-operator"), { "proposal": "minimal" }],
      [require("@babel/plugin-proposal-nullish-coalescing-operator"), { "loose": false }],
      require("@babel/plugin-proposal-do-expressions"),
    ],

    presets: [
      ["@babel/preset-env", {
        "targets": {
          "browsers": ["last 4 versions", "safari >= 7"]	
        },
      }]
    ],
  }
}
