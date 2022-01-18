import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useDetail from "../../../hooks/useDetail";
import useInput from "../../../hooks/useInput";
import A from "../../atoms/A";
import HideDiv from "../../atoms/HideDiv";
import PostBox from "../../atoms/PostBox";
import Answer, { AnswerProps } from "../../molecules/Answer";
import Comment, { CommentProps } from "../Comment";
import CommentInput from "../../molecules/InputComment";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import ThumbCount, { ThumbProps } from "../../molecules/ThumbCount";
import * as S from "./sytle";

export interface AnswerCardProps extends ThumbProps, AnswerProps {
  id: number;
  is_solved?: boolean;
  comment?: Array<CommentProps>;
}

const AnswerCard = ({
  is_solved,
  like_count,
  is_like,
  is_chosen,
  isChoosable,
  comment,
  id,
  user,
  ...props
}: AnswerCardProps) => {
  const { AnswerThumbPost, ChoicePost } = useDetail();
  const { user: loginUser } = useAuth();

  const [isEdit, setisEdit] = useState(false);
  const [likeFlag, setLikeFlag] = useState(false);
  const { value: editVal, setValue: setEditVal } = useInput(props.text);

  const isLogin = loginUser ? true : false;
  const location = useLocation();
  const questionId = new URLSearchParams(location.search).get("id");

  const checkUserAndPost = (isLike: boolean) => {
    if (!isLogin) return alert("로그인 후 좋아요를 눌러주세요!");
    if (user?.email === loginUser?.email)
      return alert("내가 쓴 글요는 좋아요 할 수 없습니다.");
    if (likeFlag === false) {
      setLikeFlag(true);

      if (is_like === isLike) AnswerThumbPost(user.id, id, isLike, true);
      else if (is_like === !isLike) alert("좋아요/싫어요는 하나만 가능합니다!");
      else AnswerThumbPost(user.id, id, isLike, false);

      setTimeout(() => {
        setLikeFlag(false);
      }, 3000);
    } else {
      alert("좋아요/싫어요 버튼 클릭은 3초에 한번으로 제한됩니다.");
    }
  };

  const onUpClick = () => {
    checkUserAndPost(true);
  };

  const onDownClick = () => {
    checkUserAndPost(false);
  };

  const onChooseClick = () => {
    if (
      confirm("해당 답변을 채택하겠습니까? 채택 후에는 취소가 불가능합니다.") &&
      questionId
    )
      ChoicePost(parseInt(questionId), id, user.id);
  };

  const editComment = async () => {
    const url = `${import.meta.env.VITE_API_HOST}/posts/answer`;
    const data = {
      questionId: questionId,
      answerId: id,
      text: editVal,
    };

    console.log(questionId);
    await axios.patch(url, data, { withCredentials: true }).then((res) => {
      alert("답변 수정이 완료되었습니다!");
      console.log("/posts/answer (patch)", res);
    });

    setisEdit(false);
  };

  const deleteComment = async () => {
    const url = `${
      import.meta.env.VITE_API_HOST
    }/posts/answer?questionId=${questionId}&answerId=${id}`;

    await axios.delete(url, { withCredentials: true }).then((res) => {
      alert("답변 삭제가 완료되었습니다!");
      console.log("/posts/answer (delete)", res);
    });

    setisEdit(false);
  };

  const commentsComponents = comment?.map((item) => {
    return (
      <Comment
        key={item.id}
        userEmail={loginUser?.email}
        answerId={id}
        {...item}
      ></Comment>
    );
  });

  return (
    <S.AnswerCardWrapper {...props}>
      <ThumbCount
        is_solved={is_solved}
        is_chosen={is_chosen}
        like_count={like_count}
        is_like={is_like}
        isChoosable={isChoosable}
        onUpClick={onUpClick}
        onDownClick={onDownClick}
        onChooseClick={onChooseClick}
      />
      <HideDiv width="100%" visible={!isEdit}>
        <PostBox isChecked={is_chosen}>
          <Answer {...props} id={id} user={user} />
          <S.EditWrapper
            visible={isLogin ? user?.email === loginUser?.email : false}
          >
            <A
              fontcolor="deepgray"
              small={true}
              style={{
                marginRight: "1rem",
              }}
              onClick={() => setisEdit(true)}
            >
              수정
            </A>
            <A onClick={deleteComment} fontcolor="deepgray" small={true}>
              삭제
            </A>
          </S.EditWrapper>
          {commentsComponents}
          <CommentInput answerId={id} />
        </PostBox>
      </HideDiv>

      <HideDiv width="100%" height="100%" visible={isEdit}>
        <S.EditPostBox>
          <MarkdownEditor value={editVal} setValue={setEditVal} />
          <S.EditWrapper visible={true}>
            <A
              fontcolor="deepgray"
              small={true}
              style={{
                marginRight: "1rem",
              }}
              onClick={() => setisEdit(false)}
            >
              취소
            </A>
            <A
              onClick={editComment}
              fontcolor="primary"
              bold={true}
              small={true}
            >
              확인
            </A>
          </S.EditWrapper>
        </S.EditPostBox>
      </HideDiv>
    </S.AnswerCardWrapper>
  );
};

export default AnswerCard;
