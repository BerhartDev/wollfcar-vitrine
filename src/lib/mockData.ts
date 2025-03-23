import { Car } from '@/types/Car';
import { getImagePath } from './utils';

export const mockCars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 120000,
    mileage: 15000,
    transmission: 'Automático',
    fuel: 'Flex',
    color: 'Prata',
    description: 'Toyota Corolla XEi em excelente estado, único dono, todas as revisões na concessionária.',
    images: [
      getImagePath('images/cars/corolla-1.jpg'),
      getImagePath('images/cars/corolla-2.jpg'),
      getImagePath('images/cars/corolla-3.jpg')
    ]
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 115000,
    mileage: 25000,
    transmission: 'Automático',
    fuel: 'Flex',
    color: 'Preto',
    description: 'Honda Civic EXL com teto solar, câmera de ré e bancos em couro.',
    images: [
      getImagePath('images/cars/civic-1.jpg'),
      getImagePath('images/cars/civic-2.jpg'),
      getImagePath('images/cars/civic-3.jpg')
    ]
  },
  {
    id: '3',
    brand: 'Jeep',
    model: 'Compass',
    year: 2023,
    price: 180000,
    mileage: 5000,
    transmission: 'Automático',
    fuel: 'Flex',
    color: 'Branco',
    description: 'Jeep Compass Limited com pacote premium, teto panorâmico e central multimídia.',
    images: [
      getImagePath('images/cars/compass-1.jpg'),
      getImagePath('images/cars/compass-2.jpg'),
      getImagePath('images/cars/compass-3.jpg')
    ]
  }
]; 