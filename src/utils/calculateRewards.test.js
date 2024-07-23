import { calculateRewards } from './calculateRewards';

describe('calculateRewards', () => {
    test('calculates rewards correctly for amounts over $100', () => {
        expect(calculateRewards(120)).toBe(90); // 2*(120-100) + 1*50 = 40 + 50 = 90
    });

    test('calculates rewards correctly for amounts between $50 and $100', () => {
        expect(calculateRewards(75)).toBe(25); // 1*(75-50) = 25
    });

    test('calculates rewards correctly for amounts under $50', () => {
        expect(calculateRewards(30)).toBe(0); // No points for amounts under $50
    });
});
