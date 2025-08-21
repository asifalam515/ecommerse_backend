type TUser = {
  role: "admin" | "customer";
  name: string;
  email: string;
  phoneNumber?: string;
  password: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
};
