// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent("ul")
      .assert.elementCount("li", 3)
      .assert.elementPresent("li.checkboxes")
      .assert.containsText("a","Checkboxes")
      // .assert.containsText("h1", "Welcome to Your Vue.js + TypeScript App")
      // .assert.elementCount("img", 1)
      .end()
  }
}
