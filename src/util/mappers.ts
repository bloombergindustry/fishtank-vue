/**
 *
 * @param color passed to fishtank component
 * @returns fishtankColorName
 */
export function propToFishtankColorName (color: string) {
  let [prefix, rest] = [color[0], color.substring(1, color.length)]
  let colorClassName = `color${prefix.toUpperCase()}${rest}`
  return colorClassName
}

/**
 * @param name fishtankColor Name
 * @returns prop name passed to fishtank component
 */
export function fishtankToPropName (name: string) {
  let color = name.replace('color', '')
  return color[0].toLowerCase() + color.slice(1)
}
