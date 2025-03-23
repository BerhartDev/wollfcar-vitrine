import { mockCars } from '@/lib/mockData';
import CarDetails from './CarDetails';

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return mockCars.map((car) => ({
    id: car.id,
  }));
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = mockCars.find((car) => car.id === params.id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Carro não encontrado</h1>
        <p className="mt-2 text-gray-600">ID: {params.id}</p>
      </div>
    );
  }

  return <CarDetails car={car} />;
} 