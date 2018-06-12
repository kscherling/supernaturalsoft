import { curry } from 'utils/fp'
import { breakpoint as getBreakpoint } from 'styles/getters'

const mediaFor = curry(
  (constraint, key, props) =>
    `@media (${constraint}: ${getBreakpoint(key, props)})`
)

export default mediaFor
