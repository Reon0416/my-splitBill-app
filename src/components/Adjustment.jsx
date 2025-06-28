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
      <h1>精算</h1>
      {result.map((p, index) => {
       return(
        <h2 key={index}>
          {`${p.from}から${p.to}へ${p.amount}円`}
        </h2>
       )
      })}
      
    </>
  )
}

export default Adjustment;