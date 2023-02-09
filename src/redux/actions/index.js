export const SAVE_NAME = "SAVE_NAME";
export const SAVE_EMAIL = "SAVE_EMAIL";

const saveName = (name) => ({
  type: SAVE_NAME,
  payload: name,
})

const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
})


