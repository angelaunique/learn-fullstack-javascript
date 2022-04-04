//config babel
module.exports = {
  presets: ["@babel/reset", "@babel/env"],
  plugins: ["@babel/plugin-proposal-class-properties"],
};
// 1.tell babel to use the two presets we're intrested in , to help us safely use javascript that the webbrowers doesnt understand
//2. plugin is needed when the use of the new class fields syntaxes used for this course
