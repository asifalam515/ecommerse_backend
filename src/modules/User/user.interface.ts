export type TUser = {
  role: "admin" | "customer";
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  phoneNumber?: string;
  password: string;
  status: "active" | "blocked";
  address?: string;
  createdAt: Date;
  updatedAt: Date;
};
