import Tag from "../../atoms/Tag";
import Text from "../../atoms/Text";
import * as S from "./style";

interface InputTagProps {
  value: string;
  inputChange: any;
  setValue: any;
  tag: Array<string>;
  setTag: any;
}

const InputTag = ({
  value,
  inputChange,
  setValue,
  tag,
  setTag,
  ...props
}: InputTagProps) => {
  const tagMsgEl: HTMLElement = document.getElementsByClassName("tagMsgEl")[0];
  const InputTagEl: HTMLElement = document.getElementsByClassName(
    "tagInput"
  )[0];

  const validTag = new RegExp(/^[a-z0-9+#_]+$/);

  const putTag = () => {
    const newTag = [...tag];
    if (value && !tag.includes(value)) newTag.push(value);
    setValue("");
    setTag(newTag);
    InputTagEl.style.color = "black";
  };

  const onChange = (e: Event) => {
    e.preventDefault();
    inputChange(e);
    if (e.target.value && validTag.test(e.target.value)) {
      tagMsgEl.style.display = "none";
      InputTagEl.style.color = "black";
    }
  };

  const onKeyPress = (e: Event) => {
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      if (validTag.test(value)) putTag();
      else {
        tagMsgEl.style.display = "block";
        InputTagEl.style.color = "red";
      }
    }
  };

  const onDelCLick = (name: string) => {
    const newTag = tag.filter((item) => item !== name);
    setTag(newTag);
  };

  const tagPreView = tag?.map((item) => {
    return (
      <Tag key={item} name={item} onDelClick={onDelCLick} isDel={true}></Tag>
    );
  });
  return (
    <S.Wrap>
      <S.WrapTag>{tagPreView}</S.WrapTag>
      <S.Input
        value={value}
        className="tagInput"
        onChange={onChange}
        onBlur={putTag}
        onKeyPress={onKeyPress}
        {...props}
      />
      <Text
        className="tagMsgEl"
        size="12"
        color="red"
        style={{ position: "relative", top: "-2.5rem", display: "none" }}
      >
        잘못된 태그 형식입니다. 영어소문자와 특수문자 #+_ 만 가능합니다.
        ex)ft_pintf
      </Text>
    </S.Wrap>
  );
};
export default InputTag;
