export type User = {
  id: string; // UUID
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  pet_information: string;
  delivery_allowed: boolean;
  created_at: Date; // timestamp of when record was created
  cart_id: number; // UUID
  address_id: string; // UUID
  fav_items: number[]; // JSONB with item as key and quantity as value
};

export type Order = {
  id: number; // bigint generated by default as identity
  user_id: number; // UUID not null
  status: string; // bigint null
  pickup_time: number; // bigint null
  created_at: string; // timestamp with time zone not null default now();
};

export type Pickup = {
  id: number; // bigint generated by default as identity
  date: Date; // text not null
  start_time: Date; // text null
  end_time: Date; // text null
};

export type Product = {
  id: number; // bigint generated by default as identity
  name: string; // text not null;
  description: string; // text null;
  category: string; // numeric not null;
  quantity: number; // numeric not null;
  photo: string; // text null;
  updated_at: Date; // timestamp with time zone not null default now();
};

export type Cart = {
  id: number; // bigint generated by default as identity
  user_id: string; // UUID not null
  product_id: Record<string, number>; // JSONB with item as key and quantity as value
};
