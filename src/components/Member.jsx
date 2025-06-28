import styled from "styled-components";

const InputMemberInfo = styled.input`
  width: 100%;
  border: 2px solid gray;
  border-radius: 8px;
  padding: 8px;
  margin: 2px;
  box-sizing: border-box;
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
      <InputMemberInfo 
        placeholder="例：1000"
        value={money}
        onChange={handleMoneyName}
      />
    </div>
    </>
  );
};

export default Member;