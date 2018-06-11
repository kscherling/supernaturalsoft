import { compose } from 'recompose'

export { compose }

export const propIs = (prop, value) => obj => obj[prop] === value
export const filter = fn => array => array.filter(fn)

export const flatten = array => [].concat([], ...array)
export const valueOr = fallback => obj => obj || fallback
export const last = arr => arr[arr.length - 1]
export const split = pattern => str => str.split(pattern)
export const join = separator => array => array.join(separator)

export const curry = fn => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args)
    }

    return (...args2) => curried(...args.concat(args2))
  }

  return curried
}

export const sort = curry((fn, array) => array.sort(fn))
export const add = curry((a, b) => a + b)
export const defaultTo = curry((fallback, obj) => obj || fallback)
export const propOr = curry((key, fallback, obj) => obj[key] || fallback)
export const eq = curry((expected, value) => Object.is(expected, value))
export const find = curry((fn, array) => array.find(fn))
export const prop = curry((name, obj) => obj[name])
export const first = prop(0)
export const length = prop('length')
export const map = curry((fn, array) => array.map(fn))
export const mapProp = compose(
  map,
  prop
)
export const reduce = curry((fn, initial, array) => array.reduce(fn, initial))
export const sum = reduce(add, 0)
export const uniq = array => [...new Set(array)]

export const trace = curry((msg, arg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg, arg)
  }

  return arg
})
