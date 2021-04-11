import axios, { Method } from 'axios';

type RequestParams = {
  method?: Method;
  usuario: string;
}

export const requestWeb = ({ method = 'GET', usuario }: RequestParams) => {
  return axios({
                method,
                url: `https://api.github.com/users/${usuario}`,
              });
}