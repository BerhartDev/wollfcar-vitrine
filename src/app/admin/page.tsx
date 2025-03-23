import Link from 'next/link';
import CarCard from '@/components/CarCard';
import { mockCars } from '@/lib/mockData';

export default function AdminPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Lista de Carros</h2>
        <Link
          href="/admin/novo"
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Adicionar Carro
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockCars.map((car) => (
          <CarCard key={car.id} car={car} isAdmin />
        ))}
      </div>
    </div>
  );
} 