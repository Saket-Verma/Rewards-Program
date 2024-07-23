export const fetchTransactions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { customerId: 1, name: 'John Doe', amount: 120, date: '2024-05-01' },
                { customerId: 1, name: 'John Doe', amount: 75, date: '2024-05-15' },
                { customerId: 2, name: 'Jane Smith', amount: 200, date: '2024-06-01' },
                { customerId: 2, name: 'Jane Smith', amount: 60, date: '2024-06-01' },
                { customerId: 2, name: 'Jane Smith', amount: 150, date: '2024-07-01' },
                // Add more sample data here
            ]);
        }, 1000);
    });
};
