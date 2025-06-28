import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Member from "../components/Member";

const MainDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 200px 0;
`;

const InputBoxDiv = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TitleInput = styled.input`
  border: 2px solid gray;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  font-size: 16px;
`;

const InputPage = () => {
  const [head, setHead] = useState();
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const addMember = () => {
    setMembers([...members, { name: "", money: ""}]);
  }

  const complete = () => {
    navigate("/result", {
      state: {
        head: head,
        members: members
      }
    });
  }

  const del = () => {
    setMembers(prev => prev.slice(0, -1));
  }

  return (
    <>
      <MainDiv>
        <InputBoxDiv>
          <h2>タイトル</h2> 
          <TitleInput
            placeholder="例：夜ご飯代"
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
          <button onClick={addMember}>メンバー追加</button>
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
          <button onClick={del}>メンバーを削除</button>
          <button onClick={complete}>計算する</button>
        </InputBoxDiv>
      </MainDiv>
    </>
  );
};

export default InputPage;
