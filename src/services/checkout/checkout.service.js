import createStripe from 'stripe-client';

const stripe = createStripe(process.env.STRIPE_TEST_KEY);

export const cardTokenRequest = card => stripe.createToken({ card });
