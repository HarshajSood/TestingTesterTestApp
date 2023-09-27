export interface Employee {
  eid: number;
  employeeid: number;
  name: string;
  email: string;
  currency: string;
  country: string;
}

export const currencies: string[] = ['GBP', 'EUR', 'USD'];
export const countries: string[] = ['USA', 'UK', 'Italy', 'Germany', 'spain'];
