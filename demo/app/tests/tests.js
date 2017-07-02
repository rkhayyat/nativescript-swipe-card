var Myplugin = require("nativescript-myplugin").Myplugin;
var myplugin = new Myplugin();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(myplugin.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(myplugin.functionname()).toEqual(jasmine.any(Promise));
  });
});