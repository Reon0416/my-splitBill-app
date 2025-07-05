import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Adjustment from "../components/Adjustment"

const MainDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92a5b1;
`;

const InputBoxDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 12px 0 24px;
`;

const SplitBill = styled(Title)`
  font-size: 28px;
  margin: 32px 0 12px;
`;

const MemberButton = styled.button`
  background-color: #5b88a7; /* 落ち着いた青 */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  margin-top: 32px;
  width: 100%; /* 必要なら調整 */
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s;

  &:hover {
    background-color: #28485b;
  }
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
          <Title>--- {head} ---</Title>
          <SplitBill>1人当たり: {splitMoney()}円</SplitBill>
          <Adjustment members={members} splitBill={splitBill}/>
          <MemberButton onClick={end}>完了</MemberButton>
        </InputBoxDiv>
      </MainDiv>
    </>
  )
}

export default ResultPage;