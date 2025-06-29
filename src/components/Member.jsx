import styled from "styled-components";

const InputMemberInfo = styled.input`
  width: 100%;
  border: 2px solid white;
  border-radius: 4px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.4);
  padding: 8px;
  margin: 4px;
  box-sizing: border-box;
`;

const InputMoney = styled(InputMemberInfo)`
  margin-bottom: 8px;
`;

const Member = ({ id, money, name, onChange }) => {

  const handleChangeName = (e) => {
    onChange({ name: e.target.value, money })
  }
  const handleMoneyName = (e) => {
    onChange({ name, money: e.target.value })
  }

  return(
    <>
    <div key={id}>
      <InputMemberInfo 
        placeholder="例：太郎"
        value={name}
        onChange={handleChangeName}
      />
      <InputMoney 
        placeholder="例：1000"
        value={money}
        onChange={handleMoneyName}
      />
    </div>
    </>
  );
};

export default Member;