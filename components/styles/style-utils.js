import { css } from "styled-components";

const screenSizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 420
};

const media = Object.keys(screenSizes).reduce((a, label) => {
  const emSize = screenSizes[label] / 16;
  a[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return a;
}, {});

export { media };
