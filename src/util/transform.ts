import _ from 'lodash'
import {
  concat,
  fromClassName,
  identity,
  mapClassName
} from './style'


export function mapping(map: {[key: string]: string}) {
  return (val: string) => {
    return _.has(map, val) ? fromClassName(map[val]) : identity()
  }
}

// Adds a classname when a property is present.
//
//     <Box top />
//

export function toggle(...classNames: Array<string>) {
  return (val: boolean) => {
    return val ? fromClassName(...classNames) : identity()
  }
}

export function range(scale: string) {
  return (val: number) => {
    return fromClassName(`${scale}${val < 0 ? `N${Math.abs(val)}` : val}`)
  }
}

export function rangeWithoutZero(scale: string) {
  return (val: number) => {
    return val === 0 ? identity() : range(scale)(val)
  }
}

// export function bind(fn, scope) {
//   return val => {
//     return mapClassName(name => scope[name])(fn(val))
//   }
// }

// export const union = (...fns) => val => concat(fns.map(fn => fn(val)))

export function bind(fn:any, scope:any) {
  return (val: any) => {
    return mapClassName(name => scope[name])(fn(val))
  }
}

export const union = (...fns:any[]) => (val: any) => concat(fns.map(fn => fn(val)))