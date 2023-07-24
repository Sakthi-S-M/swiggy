const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const isPaymentSuccess = () => {
  return localStorage.getItem("isPaymentSuccess") === "true";
};

export { isAuthenticated, isPaymentSuccess };
