import axios from "axios";
import { useState } from "react";
import useInput from "../../../hooks/useInput";
import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";
import InputTag from "../../molecules/InputTag";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import * as S from "./style";

const QuestionWriting = () => {
  const textDefault = `질문을 남겨보세요!
  \`\`\`C
  printf("helloWord");
  \`\`\``;
  const InputTagValidator = (value: string) => {
    const rt = /#*[\w]*$/g.test(value);
    return rt;
  };
  const titleValidator = (value: string) => {
    if (value.length < 20) return true;
    else return false;
  };

  const inputTag = useInput("", InputTagValidator);
  const title = useInput("", titleValidator);
  const text = useInput(textDefault);
  const [tag, setTag] = useState([]);

  const onClick = async (e) => {
    e.preventDefault();
    if (!title.value || !text.value) {
      alert("제목과 내용을 모두 완성해주세요.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/posts/question",
        {
          title: title.value,
          hashtag: tag ? "#" + tag.join("#") : null,
          text: text.value,
          files: null,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        alert("질문 작성이 완료되었습니다!");
        //todo: res로부터 id받아서 해당 detail page로 이동
        location.href = "/";
      } else {
        alert("질문 작성을 실패했습니다.");
        location.href = "/";
      }
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <S.Wrap>
      <S.InputTitleS
        value={title.value}
        placeholder="질문할 제목을 입력하세요"
        onChange={title.onChange}
      />
      <InputTag
        inputChange={inputTag.onChange}
        value={inputTag.value}
        setValue={inputTag.setValue}
        tag={tag}
        setTag={setTag}
        placeholder="태그를 입력하세요 ex) #ft_printf"
      />
      <Divider weight="bold" width="4rem" />
      <S.MarkDownBtnWrap>
        <MarkdownEditor
          value={text.value}
          setValue={text.setValue}
          placeHolder={"질문을 상세하게 적어주세요!"}
        />
        <Button size="sm" onClick={onClick}>
          {"질문 작성하기"}
        </Button>
      </S.MarkDownBtnWrap>
    </S.Wrap>
  );
};

export default QuestionWriting;
