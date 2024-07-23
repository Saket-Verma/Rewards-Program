// src/components/CustomerRewards.js
import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';
import { calculateRewards } from '../utils/calculateRewards';
import RewardsTable from './RewardsTable';

const CustomerRewards = () => {
    const [rewards, setRewards] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const transactions = await fetchTransactions();
                const rewardsData = {};

                transactions.forEach(({ customerId, name, amount, date }) => {
                    const month = new Date(date).toLocaleString('default', { month: 'long' });
                    if (!rewardsData[customerId]) {
                        rewardsData[customerId] = {};
                    }
                    if (!rewardsData[customerId][month]) {
                        rewardsData[customerId][month] = { points: 0, name };
                    }
                    rewardsData[customerId][month].points += calculateRewards(amount);
                });

                setRewards(rewardsData);
            } catch (error) {
                setError(error);
            }
        };

        loadTransactions();
    }, []);

    if (error) {
        return <div>Error loading transactions.</div>;
    }

    return <RewardsTable rewards={rewards} />;
};

export default CustomerRewards;
