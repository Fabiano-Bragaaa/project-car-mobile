export type PropsCar = {
  id: string;
  name: string;
  year: string;
  km: string;
  city: string;
  price: string | number;
  uid: string;
  images: ImageProps[];
};

export type ImageProps = {
  name: string;
  uid: string;
  url: string;
};

export type CarDetailProps = {
  id: string;
  name: string;
  year: string;
  km: string;
  city: string;
  price: string | number;
  uid: string;
  images: ImageProps[];
  model: string;
  description: string;
  created: string;
  owner: string;
  whatsapp: string;
};
