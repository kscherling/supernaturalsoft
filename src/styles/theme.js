const fontFamily = {
  sanSerif: "'Lato', sans-serif",
  serif: "'Roboto Slab', serif"
}

const spacer = {
  xs: '4px',
  sm: '7px',
  md: '14px',
  lg: '20px',
  xl: '28px',
  xxl: '42px',
  xxxl: '70px'
}

const fontSize = {
  bodySm: '12px',
  bodyMd: '14px',
  bodyLg: '16px',
  titleSm: '18px',
  titleMd: '22px',
  titleLg: '28px',
  titleXl: '36px',
  titleXxl: '48px'
}

const lineHeight = {
  bodySm: 1.5,
  bodyMd: 1.5,
  bodyLg: 1.5,
  titleSm: 1.5,
  titleMd: 1.5,
  titleLg: 1.5,
  titleXl: 1.5,
  titleXxl: 1.5
}

const color = {
  white: '#ffffff',
  offWhite: '#f2f2f2',
  ltGrey: '#cccccc',
  mdGrey: '#999999',
  dkGrey: '#333333',
  black: '#000000',
  redLt: '#e62129',
  red: '#d82128',
  redDk: '#ba141a'
}

const zIndex = {
  hero: 1,
  content: 10,
  navbar: 200,
  overlay: 1000,
  modal: 1010,
  closeModal: 1012
}

//prettier-ignore
const breakpoint = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

export default {
  color,
  fontFamily,
  fontSize,
  lineHeight,
  spacer,
  breakpoint,
  zIndex
}
