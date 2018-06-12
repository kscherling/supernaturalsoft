import { css } from 'react-emotion'
import { curry } from 'utils/fp'

const cssIfProp = curry(
  (cssAttr, prop, props) =>
    props[prop] &&
    css`
      ${cssAttr}: ${props[prop]};
    `
)

export default cssIfProp
