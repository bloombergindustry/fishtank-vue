module.exports = function (source, map) {
  console.log(source, map, 'test')
  this.callback(
    null,
    `export default function (Component) {
      Component.options.__docs = ${
        JSON.stringify(source)
      }
    }`,
    map
  )
}