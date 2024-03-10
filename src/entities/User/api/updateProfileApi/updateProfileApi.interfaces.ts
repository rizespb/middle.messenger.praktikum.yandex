export interface IUpdateProfileData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  display_name: string;
  phone: string;
}

export type TUpdateProfileApiResponse = {
  id: string;
} & IUpdateProfileData;
