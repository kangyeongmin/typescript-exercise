interface Restaurant {
  category: string;
  name: string;
  distance: number;
  menu: string[];
}

interface Restaurants {
  restaurants: Restaurant[];
  add(restaurant: Restaurant): void;
  filterByCategory(category: string): Restaurant[];
}
