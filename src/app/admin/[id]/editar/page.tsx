'use client';

import { useRouter } from 'next/navigation';
import CarForm from '@/components/CarForm';
import { Car } from '@/types/Car';
import { mockCars } from '@/lib/mockData';

interface EditCarPageProps {
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

export default function EditCarPage({ params }: EditCarPageProps) {
  const router = useRouter();
  const car = mockCars.find((c) => c.id === params.id);

  if (!car) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Carro não encontrado</h1>
        <p className="mt-2 text-gray-600">O carro que você está procurando não existe.</p>
      </div>
    );
  }

  const handleSubmit = async (data: Car) => {
    try {
      // TODO: Implement API call
      console.log('Updated car data:', data);
      router.push('/admin');
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Editar Carro</h2>
      <CarForm car={car} onSubmit={handleSubmit} />
    </div>
  );
} 