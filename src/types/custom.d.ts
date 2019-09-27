type Restaurant = {
  name: string;
  rating: number;
  price: string;
  photos: string[];
  categories?: Category[];
  reviews?: Review[];
  hours: [{ is_open_now: boolean }];
};

type Category = {
  alias: string;
  title: string;
};

type Review = {
  text: string;
  rating;
  url: string;
};
