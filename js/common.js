// construct initials of a user 
export function  createInitials(name){
    let nameSplited = name.split(" ");
    let initails = nameSplited.map( name => name[0]).join("")
    return initails;
}

const balanceAmount      = document.querySelector(".balance-amount");
const amountIn           = document.querySelector(".amountIn");
const amountOut          = document.querySelector(".amountOut");
const transactionList    = document.querySelector(".transaction-list");

export function showMetricAndHistory(userLoggedIn){
    balanceAmount.innerHTML = `NGN${userLoggedIn.balance}`;
    let outgoing = userLoggedIn.transactions.filter( tx => tx.txType === "OUTGOING");
    let incoming = userLoggedIn.transactions.filter( tx => tx.txType === "INCOMING");

    console.log(outgoing);
    console.log(incoming);

    // displaying the values 
    amountIn.innerHTML = `NGN ${incoming.reduce( (prev, sum)=> prev + sum.amount, 0) }`;
    amountOut.innerHTML = `NGN ${outgoing.reduce( (prev, sum)=> prev + sum.amount, 0) }`;
  
    // now show the tx history
    
}