import styled from "styled-components";

export const MarkDownEditorWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: pre-line;
  word-break: break-all;
  /* margin-top: 3rem; */
  button {
    padding: 4px;
  }

  button {
    color: lightgrey;
    border-radius: 0px !important;
  }
  .mde-tabs button {
    font-size: 16px;
    font-style: Roboto;
    font-weight: 600;
  }
  button.selected {
    border: 0px !important;
    color: black !important;
  }
  .mde-preview-content {
    background-color: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    font-size: 18px;
    line-height: 1.5;
    min-height: 20rem;
  }
  .mde-header {
    margin-bottom: 18px;
    background-color: inherit;
    border: 0px;
  }
  .react-mde .image-tip {
    display: none !important;
  }
  .mde-text {
    min-height: 20rem;
    background-color: inherit;
    background-color: white;
    padding: 20px !important;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    font-size: 16px;
    outline: none;
    line-height: 1.5;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .react-mde {
    font-family: inherit;
    width: 100%;
    border: 0px;
    background-color: inherit;
    margin-bottom: 3rem;
  }
  /*
  pre {
    background-color: white !important;
  }*/

  span,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input {
    font-size: inherit;
  }

  h1 {
    font-size: 2.5em !important;
  }
  h2 {
    font-size: 2em !important;
  }
  h3 {
    font-size: 1.4em !important;
  }

  ul li {
    list-style: disc;
  }
  ol li {
    list-style: decimal;
  }
  img {
    max-width: 100%;
  }
`;
