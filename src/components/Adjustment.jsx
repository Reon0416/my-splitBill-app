import styled from "styled-components";

const AdjTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 24px 0 12px;
`;

const ResultInfo = styled.p`
  margin: 8px 0;
  text-align: center;
`;


const Adjustment = ({members, splitBill}) => {

  const splitCalc = (members) => {
    const balances = members.map((m) => ({
      name: m.name,
      diff: Number(m.money) - splitBill
    }));
  
    const overPaid = balances.filter(b => b.diff > 0);
    const underPaid = balances.filter(b => b.diff < 0);
  
    const payments = [];
  
    for( const payer of underPaid){
      let need = -payer.diff;
  
      for( const receiver of overPaid){
        if(receiver.diff <= 0) continue;
  
        const pay = Math.min(receiver.diff, need);
  
        payments.push({
          from: payer.name,
          to: receiver.name,
          amount: Math.floor(pay)
        });
  
        receiver.diff -= pay;
        need -= pay;
  
        if(need <= 0) break;
      }
    }

    return payments;
  }

  const result = splitCalc(members);
    
  return(
    <>
      <AdjTitle>精算結果</AdjTitle>
      {result.map((p, index) => {
       return(
        <ResultInfo key={index}>
          {`${p.from}→${p.to}：${p.amount}円`}
        </ResultInfo>
       )
      })}
      
    </>
  )
}

export default Adjustment;