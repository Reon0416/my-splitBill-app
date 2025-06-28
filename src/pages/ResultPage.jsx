import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Adjustment from "../components/Adjustment"

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

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { head, members } = location.state || {};

  let total = 0;
      for(const member of members){
      total += Number(member.money || 0);
    }
  const splitBill = Math.floor(total / members.length);
    
  const splitMoney = () => {
    return splitBill
  }

  const end = () => {
    navigate("/input")
  }

  return(
    <>
      <MainDiv>
        <InputBoxDiv>
          <h2>{head}</h2>
          <p>1人当たり</p>
          <h1>{splitMoney()}円</h1>
          <Adjustment members={members} splitBill={splitBill}/>
          <button onClick={end}>完了</button>
        </InputBoxDiv>
      </MainDiv>
    </>
  )
}

export default ResultPage;