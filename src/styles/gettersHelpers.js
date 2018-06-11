import { curry, compose, prop, propOr, defaultTo } from 'utils/fp'

const warn = (key, props) => {
  console.warn(`Could not find '${key}' in provided props`, props)
  return 'THEME ERROR'
}

export const valueOrWarn = curry(
  (key, props, value) => value || warn(key, props)
)
export const getWithProp = curry((category, key, props) =>
  compose(
    valueOrWarn(key, props),
    prop(key),
    propOr(category, {}),
    propOr('theme', {}),
    defaultTo({})
  )(props)
)
