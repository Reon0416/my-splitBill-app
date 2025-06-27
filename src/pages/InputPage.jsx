import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputPage = () => {
  const [head, setHead] = useState();

  return (
    <>
      <MainDiv>
        <InputBoxDiv>
          <h3>用途</h3> 
          <input
            placeholder="例：夜ご飯代"
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
        </InputBoxDiv>
      </MainDiv>
    </>
  );
};

export default InputPage;
