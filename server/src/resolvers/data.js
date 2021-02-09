const transactions = [
    {
        accountNumber: '189873123456789',
        id: 1000000001,
        date: '27-01-20',
        narration: 'atm',
        type: 'dbt',
        amount: 5000
    },{
        accountNumber: '189873123456789',
        id: 1000000002,
        date: '29-01-20',
        narration: 'upi',
        type: 'crt',
        amount: 2000
    },
    {
        accountNumber: '157289399978654',
        id: 1000000001,
        date: '16-01-20',
        narration: 'atm',
        type: 'dbt',
        amount: 3000
    },
    {
        accountNumber: '157289399978654',
        id: 1000000002,
        date: '01-02-20',
        narration: 'upi',
        type: 'crt',
        amount: 6000
    }
]

const accounts = [{
    customerId: 1000000,
    accountNumber: '189873123456789',
    accountType: 'Savings',
    ifscCode: 'IFSC001',
    branchName: 'Pune',
    balance: 21000
},
{
    customerId: 1000000,
    accountNumber: '18987312389645',
    accountType: 'Current',
    ifscCode: 'IFSC001',
    branchName: 'Pune',
    balance: 2300
},{
    customerId: 1000001,
    accountNumber: '157289399978654',
    accountType: 'Savings',
    ifscCode: 'IFSC001',
    branchName: 'Pune',
    balance: 15000
}]

const customerData = [
    {
        customerId: 1000000,
        username: 'Anshul',
        password: 'abcd',
        email: 'anshula128@gmail.com',
        phoneNumber: '9876543212'
    },
    {
        customerId: 1000001,
        username: 'John',
        password: 'xyz',
        email: 'john@gmail.com',
        phoneNumber: '9787644674'
    }
]

module.exports = {
    customerData,
    accounts,
    transactions
}



