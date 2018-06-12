import { cssIfProp } from 'styles/cssHelpers'

export const templateColumns = cssIfProp(
  'grid-template-columns',
  'templateColumns'
)
export const templateRows = cssIfProp('grid-template-rows', 'templateRows')
export const justifyContent = cssIfProp('justify-content', 'justifyContent')
export const alignItems = cssIfProp('align-items', 'alignItems')
export const gap = cssIfProp('grid-gap', 'gap')
