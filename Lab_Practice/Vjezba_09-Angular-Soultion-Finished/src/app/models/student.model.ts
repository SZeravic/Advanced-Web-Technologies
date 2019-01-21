export interface IStudent {
  id: number;
  fullName: string;
  birthdate: Date; // promijeniti u "string" zbog JSON response-a
  email: string;
  address: string;
  phone: string;
  faculty: string;
  marked?: boolean;
}
