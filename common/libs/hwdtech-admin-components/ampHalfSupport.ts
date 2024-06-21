declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": any
      "amp-youtube": any
      "amp-iframe": any
      "amp-selector": any
      "amp-carousel": any
    }
  }
}

declare module "react" {
  interface ButtonHTMLAttributes<T> {
    on?: string
  }
}

export default JSX
