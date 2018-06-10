import { curry, compose, prop } from 'utils/fp'

const propOr = curry((key, fallback, obj) => obj[key] || fallback)
const propOrObj = curry((key, obj) => propOr(key, {}, obj))
const isDefined = string => string && typeof string === 'string'

const warn = (key, props) =>
  console.warn(`Could not find '${key}' in provided props`, props)
const valueOrWarn = curry(
  (key, props, value) => (isDefined(value) ? value : warn(key, props))
)

export const color = curry((color, props = {}) =>
  compose(
    valueOrWarn(color, props),
    propOrObj(color),
    propOrObj('colors'),
    propOrObj('theme')
  )(props)
)