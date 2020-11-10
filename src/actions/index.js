export const signin = (reference_id, user_information) => {
  return {
    type: "SIGN_IN",
    reference_id,
    user_information,
  };
};

export const signout = () => {
  return {
    type: "SIGN_OUT",
  };
};