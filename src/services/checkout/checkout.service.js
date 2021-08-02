import createStripe from 'stripe-client';

const stripe = createStripe(process.env.STRIPE_TEST_KEY);

const API_URL = 'http://localhost:8000/v1';

export const cardTokenRequest = card => stripe.createToken({ card });

export const payRequest = async (token, amount, name) => {
  try {
    return await fetch(`${API_URL}/payments`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, amount, name }),
    });
  } catch (error) {
    return console.log('There was an issue with your payment.');
  }
};
