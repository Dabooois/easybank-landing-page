declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<ReactSVGElement>>;
  const src: string;
  export default src;
}
