const isAuthenticated = () => {
  return sessionStorage.getItem("isAuthenticated") === "true";
};

const isPaymentSuccess = () => {
  return localStorage.getItem("isPaymentSuccess") === "true";
};

export { isAuthenticated, isPaymentSuccess };
