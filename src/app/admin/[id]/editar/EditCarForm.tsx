'use client';

import { useRouter } from 'next/navigation';
import CarForm from '@/components/CarForm';
import { Car } from '@/types/Car';

interface EditCarFormProps {
  car: Car;
}

export default function EditCarForm({ car }: EditCarFormProps) {
  const router = useRouter();

  const handleSubmit = async (data: Car) => {
    try {
      // TODO: Implement API call
      console.log('Updated car data:', data);
      router.push('/admin');
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return <CarForm car={car} onSubmit={handleSubmit} />;
} 