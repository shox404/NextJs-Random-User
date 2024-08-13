export type User = {
  id: number;
  username: string;
  fullname: string;
  age: number;
  address: {
    city: string;
    country: string;
    street: string;
    "zip-code": string;
  };
  gender: string;
  email: string;
  occupation: string;
  interests: any[];
  status: string;
  geo: { lat: number; lng: number };
  bio: string;
  displayPhoto: string;
};
