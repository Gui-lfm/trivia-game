export const apiRequestToken = async () => {
  const URL_REQUEST = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(URL_REQUEST);
  const data = await response.json();
  return data;
};

export const apiGame = async () => {
  const token = await apiRequestToken().token;
  const URL_GAME = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(URL_GAME);
  const data = await response.json();
  return data;
};
