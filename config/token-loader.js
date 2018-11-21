module.exports = function (source, map) {
  this.callback(
    null,
    `export default function (Component) {
      Component.options.__token = ${
        JSON.stringify(source)
      } 
    }`,
    map
  )
}