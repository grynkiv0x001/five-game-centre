import { IUserState } from './interfaces';

export const logout = (): IUserState => {
  return {
    user: null,
  };
};
