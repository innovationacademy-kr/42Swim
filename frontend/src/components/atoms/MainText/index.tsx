import styled from "styled-components";
import * as Showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import "react-mde/lib/styles/css/react-mde-all.css";

const SMainText = styled.p`
  padding-bottom: 8rem;
  white-space: pre-line;
  word-break: break-all;
  line-height: 1.5;
  font-size: 16px !important;
  color: black;
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
    height: auto;
  }
  blockquote {
    margin-left: 0;
    padding: 0 1em;
    color: #777;
    border-left: 0.25em solid #ddd;
  }
  a {
    color: #4078c0 !important;
    text-decoration: none;
    a:visited,
    a:link {
      color: #4078c0;
    }
  }
  code {
    padding: 0.2em;
    margin: 0;
    font-size: 90%;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 1.4rem;
  }
  line-height: 1.5;
`;

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  extensions: [
    showdownHighlight({
      pre: true,
    }),
  ],
});

export interface MainTextProps {
  children: any;
}

const MainText = ({ children, ...props }: MainTextProps) => {
  return (
    <>
      <SMainText
        {...props}
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(children),
        }}
      ></SMainText>
      <script src="/path/to/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"
      ></link>
    </>
  );
};

export default MainText;
