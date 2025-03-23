'use client';

import { useRouter } from 'next/navigation';
import CarForm from '@/components/CarForm';
import { Car } from '@/types/Car';

export default function NewCarPage() {
  const router = useRouter();

  const handleSubmit = async (data: Omit<Car, 'id'>) => {
    try {
      // TODO: Implement API call
      console.log('New car data:', data);
      router.push('/admin');
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Novo Carro</h2>
      <CarForm onSubmit={handleSubmit} />
    </div>
  );
} 