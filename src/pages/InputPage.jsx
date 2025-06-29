import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Member from "../components/Member";

const MainDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding: 200px 0;
`;

const InputBoxDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 12px;
`;

const TitleInput = styled.input`
  border: 2px solid gray;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  font-size: 16px;
  box-sizing: border-box;
`;

const MemberButton = styled.button`
  background-color: #5b88a7; /* 落ち着いた青 */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  width: 100%; /* 必要なら調整 */
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s;

  &:hover {
    background-color: #28485b;
  }
`;

const CalcButton = styled(MemberButton)`
  border: 2px solid #345466;
  margin-top: 12px;
`;



const InputPage = () => {
  const [head, setHead] = useState();
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const addMember = () => {
    setMembers([...members, { name: "", money: "" }]);
  };

  const complete = () => {
    navigate("/result", {
      state: {
        head: head,
        members: members,
      },
    });
  };

  const del = () => {
    setMembers((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <MainDiv>
        <InputBoxDiv>
          <Title>割り勘アプリ</Title>
          <TitleInput
            placeholder="例：夜ご飯代"
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
          <MemberButton onClick={addMember}>メンバー追加</MemberButton>
          <MemberButton onClick={del}>メンバーを削除</MemberButton>
          {members.map((member, index) => (
            <Member
              id={index}
              name={member.name}
              money={member.money}
              onChange={(updatedMember) => {
                const newMembers = [...members];
                newMembers[index] = updatedMember;
                setMembers(newMembers);
              }}
            />
          ))}
          <CalcButton onClick={complete}>計算する</CalcButton>
        </InputBoxDiv>
      </MainDiv>
    </>
  );
};

export default InputPage;
