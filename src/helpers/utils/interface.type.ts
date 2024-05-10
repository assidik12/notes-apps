export interface Notebooks {
  title: string;
  content: string;
  userEmail: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export type RegisterUserPayload = {
  username: string;
  email: string;
  password: string;
};
