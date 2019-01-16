import { css } from "styled-components";

const media = {
  phone: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)}
    }
  `
};

export { media };
