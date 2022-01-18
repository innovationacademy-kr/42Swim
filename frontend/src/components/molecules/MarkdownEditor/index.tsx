import * as React from "react";
import ReactMde, { SaveImageHandler } from "react-mde";
import * as Showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import "react-mde/lib/styles/css/react-mde-all.css";
import { MarkDownEditorWrap } from "./style";
import axios from "axios";

interface MarkdownEditorProps {
  value?: string;
  setValue?: any;
  placeHolder?: string;
}

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

const MarkdownEditor = ({
  value,
  setValue,
  placeHolder,
  ...props
}: MarkdownEditorProps) => {
  const textArea = document.getElementsByClassName("mde-text")[0];
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );

  //todo: 이미지 업로드 axios 서버 통신: data를 보내면 됨.
  const save: SaveImageHandler = async function* (data: ArrayBuffer) {
    try {
      //axios post 로 수정 필요.
      const res = await new Promise((resolve) => {
        const form = new FormData();
        const imgFile = new File([data], "Image");
        const url = `${import.meta.env.VITE_API_HOST}/posts/image`;
        form.append("imgFile", imgFile);

        axios.post(url, form, { withCredentials: true }).then((res) => {
          if (res.status === 200) resolve(res?.data?.image);
        });
      });
      console.log(res);
      yield res;
    } catch (error) {
      console.log(error);
      alert("사진 전송 실패");
      yield "Error";
    }

    return true;
  };
  return (
    <MarkDownEditorWrap {...props}>
      <ReactMde
        classes={{}}
        value={value}
        onChange={(value) => {
          const newHeight: string = event?.target.scrollHeight + "px";
          console.log(newHeight);
          setValue(value);
          textArea.style.height = "auto";
          textArea.style.height = newHeight;
        }}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => {
          console.log(markdown);
          return Promise.resolve(converter.makeHtml(markdown));
        }}
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
          textArea: {
            placeholder: placeHolder,
          },
        }}
        paste={{
          saveImage: save,
        }}
      />
      <script src="/path/to/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"
      ></link>
    </MarkDownEditorWrap>
  );
};

export default MarkdownEditor;
