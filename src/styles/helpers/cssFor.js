import { css } from 'react-emotion'
import { curry } from 'utils/fp'

const cssFor = curry(
  (cssAttr, getterFn, key, props) =>
    css`
      ${cssAttr}: ${getterFn(key, props)};
    `
)

export default cssFor
