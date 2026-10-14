const Customers = [
    {
        name:"Didigwu Nnaemeka Christian",
        phone:"08139240318",
        email:"myemail@gmail.com",
        bvn:"0032445366",
        accountNumber:"234567100",
        password:"110099",
        balance:0,
        transactions:[
            {
                receiverBank:"First Bank Plc",
                amount:2000,
                date: new Date(),
                txType:"INCOMING",
                reason:"Salary"
            },
            {
                receiverBank:"First Bank Plc",
                amount:2000,
                date: new Date(),
                txType:"INCOMING",
                reason:"Salary"
            },
            {
                receiverBank:"OPAY Plc",
                amount:1600,
                date: new Date(),
                txType:"OUTGOING",
                reason:"Chips"
            },
        ]
    },
    {
        name:"DAudu Ogbena A",
        phone:"08039240368",
        email:"ayudu@gmail.com",
        bvn:"1067445366",
        accountNumber:"0987897644",
        password:"776768",
        balance:0,
        transactions:[
            {
                receiverBank:"GTB",
                amount:6754,
                date: new Date(),
                txType:"OUTGOING",
                reason:"Laundry"
            }
        ]
    },
];



//  create the Bank
export default class NorthLineBank{
    customers = [...Customers];

    deposit(accNo,depositAmount, txType="INCOMING", reason){}

    widthdraw(accNo,amount,txType="OUTGOING"){}

    transfer(){}

    register(userObj){}

    login(accNo,password){
        let user  = this.customers.find( customer => customer.accountNumber === accNo && customer.password === password)
       console.log(user);
       if( user ){
           sessionStorage.setItem('user',JSON.stringify(user) )
           // redirecct the user tot he dashboard
           window.location.href = '../dashboard.html';
       }
    }

    getLoggedInUser(){
         return JSON.parse( sessionStorage.getItem('user') ) || null;
    }

}