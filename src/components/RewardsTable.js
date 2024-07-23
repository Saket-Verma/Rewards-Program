import React from 'react';

const RewardsTable = ({ rewards }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Month</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(rewards).map(customerId => (
                    Object.keys(rewards[customerId]).map(month => (
                        <tr key={`${customerId}-${month}`}>
                            <td>{rewards[customerId][month].name}</td>
                            <td>{month}</td>
                            <td>{rewards[customerId][month].points}</td>
                        </tr>
                    ))
                ))}
            </tbody>
        </table>
    );
};

export default RewardsTable;
