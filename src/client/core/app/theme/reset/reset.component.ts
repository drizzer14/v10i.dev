import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  /* custom-reset.css | 27.08.2018 | https://yurch-html.github.io/dist/custom-reset.html */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    html {
      display: flex;
      flex-direction: column;
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100%;
  }

  body {
    height: 100%;

    margin: 0;

    text-rendering: optimizeLegibility;
    text-decoration-skip: auto;

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  :focus {
    outline: none;
  }

  p,
  dd,
  dl,
  figure,
  blockquote {
    margin: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;

    list-style-type: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th {
    font-weight: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;

    font-weight: inherit;
    font-size: inherit;
  }

  audio,
  video {
    display: block;
  }

  img {
    display: block;

    width: 100%;
    height: auto;

    border: none;
  }

  iframe {
    border: none;
  }
  
  pre {
    margin: 0;
  }

  a {
    color: inherit;

    text-decoration: none;

    background-color: transparent;
  }

  abbr {
    text-decoration: none;

    border: none;
  }

  b,
  strong {
    font-weight: bolder;
  }

  i,
  em {
    font-style: italic;
  }

  dfn {
    font-style: inherit;
  }

  mark {
    color: inherit;

    background-color: transparent;
  }

  sub,
  sup {
    position: relative;

    font-size: inherit;
    line-height: 0;

    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  textarea {
    margin: 0;
    padding: 0;

    color: inherit;

    font: inherit;
    letter-spacing: inherit;

    background-color: transparent;

    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  button,
  input {
    overflow: visible;
  }

  button {
    text-align: left;
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;

    -webkit-appearance: none;
  }

  textarea {
    overflow-x: hidden;
    overflow-y: auto;

    resize: none;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;

    border: none;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: none;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline: none;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;

    -webkit-appearance: none;
  }

  fieldset {
    margin: 0;
    padding: 0;

    border: none;
  }

  legend {
    display: block;
    padding: 0;

    white-space: normal;
  }

  ::-webkit-input-placeholder {
    color: inherit;

    opacity: 1;

    transition: opacity 0.3s;
  }

  ::-moz-input-placeholder {
    color: inherit;

    opacity: 1;

    transition: opacity 0.3s;
  }

  :-moz-placeholder {
    color: inherit;

    opacity: 1;

    transition: opacity 0.3s;
  }

  :-ms-input-placeholder {
    color: inherit;

    opacity: 1;

    transition: opacity 0.3s;
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
  }

  :focus::-moz-input-placeholder {
    opacity: 0;
  }

  :focus:-moz-placeholder {
    opacity: 0;
  }

  :focus:-ms-input-placeholder {
    opacity: 0;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  dialog {
    padding: 0;

    color: inherit;

    background: none;
    border-color: unset;
    border-style: unset;
    border-width: unset;
    border-image: unset;

    &,
    &:not([open]) {
      display: flex;
      flex-direction: column;
    }
  }

  [hidden] {
    display: none;
  }

  :disabled {
    cursor: not-allowed;
  }

  ::-ms-clear {
    display: none;
  }

  :-webkit-autofill {
    box-shadow: 0 0 100px #fff inset;
    -webkit-text-fill-color: currentColor;
  }
`;
