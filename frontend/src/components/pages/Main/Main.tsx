/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PlusIcon from "../../asset/icons/PlusIcon";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/SearchInput";
import Header from "../../organisms/Header";
import QuestionList from "../../organisms/QuestionList";
import MainTemplate from "./template";
import BasicTemplate from "../BasicTemplate";
import useInput from "../../../hooks/useInput";
import Ranking from "../../organisms/Ranking";
import SearchQuestionList from "../../organisms/SearchQuestionList.tsx";
import { Redirect } from "react-router";
import * as Sentry from "@sentry/react";
import PlusButton from "../../molecules/PlusButton";

interface Props {
  history: any;
}

const MainPage = ({ history, ...props }: Props) => {
  const { value: searchVal, onChange: onChangesearchVal } = useInput("");

  const onSearch = (e: any) => {
    console.log("search");
    // Sentry.captureEvent(e);
    history.push(`/search?keyword=${searchVal}`);
    // search 페이지로 라우팅해주기
  };

  return (
    <>
      <BasicTemplate>
        <MainTemplate
          panel={
            <>
              <SearchInput
                onChange={onChangesearchVal}
                search={searchVal}
                onSearch={onSearch}
              />
              <PlusButton onClick={() => history.push("/writing")} />
            </>
          }
          content1={<QuestionList />}
          content2={<Ranking />}
        />
      </BasicTemplate>
    </>
  );
};

export default MainPage;
