export enum Gender {
  "M",
  "F",
  "Other",
}

export type User = {
  name: string;
  email: string;
  birthdate: string;
  gender: Gender;
  id: string;
};
