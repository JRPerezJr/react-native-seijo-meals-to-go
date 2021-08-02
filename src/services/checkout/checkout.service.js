import createStripe from 'stripe-client';

const stripe = createStripe(process.env.STRIPE_TEST_KEY);

const API_URL = 'http://localhost:8000/v1';

export const cardTokenRequest = card => stripe.createToken({ card });

export const payRequest = (token, amount) => {
  return fetch(`${API_URL}/payments`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, amount }),
  }).then(res => {
    if (res.status > 200) {
      return Promise.reject('Something went wrong processing your payment');
    }
    return res.json();
  });
};
