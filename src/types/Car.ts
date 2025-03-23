export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'Manual' | 'Automático';
  fuel: 'Gasolina' | 'Etanol' | 'Flex' | 'Diesel' | 'Elétrico';
  color: string;
  description: string;
  images: string[];
} 