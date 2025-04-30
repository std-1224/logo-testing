module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest"
    },
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["/node_modules/"]
  };