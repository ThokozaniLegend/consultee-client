import axios from 'axios';

const API_BASE = 'http://localhost:4000'; // change when backend deployed

export default {
  createPaymentIntent: (amountCents) => axios.post(`${API_BASE}/create-payment-intent`, { amountCents }),
  getTwilioToken: (identity) => axios.get(`${API_BASE}/twilio-token`, { params: { identity } }),
};
