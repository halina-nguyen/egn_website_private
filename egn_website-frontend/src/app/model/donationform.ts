export interface DonationForm {
  amount: number;
  firstName: string;
  lastName: string;

  certificate: boolean;
  address: string;
  postalCode: string;
  city: string;

  note: string;
}
