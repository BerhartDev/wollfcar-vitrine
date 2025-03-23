'use client';

import Image from 'next/image';
import { mockCars } from '@/lib/mockData';

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
  console.log('Params:', params);
  console.log('Available cars:', mockCars);
  const car = mockCars.find((car) => car.id === params.id);
  console.log('Found car:', car);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Carro não encontrado</h1>
        <p className="mt-2 text-gray-600">ID: {params.id}</p>
      </div>
    );
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  // Ensure car.images is an array and has at least one item
  const images = Array.isArray(car.images) ? car.images : [];
  const mainImage = images[0] || '/images/placeholder.jpg';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <Image
              src={mainImage}
              alt={`${car.brand} ${car.model}`}
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${car.brand} ${car.model} - Imagem ${index + 2}`}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{car.brand} {car.model}</h1>
            <p className="text-2xl font-semibold text-primary-600 mt-2">
              {formatCurrency(car.price)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Ano</h3>
              <p className="mt-1 text-lg text-gray-900">{car.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Quilometragem</h3>
              <p className="mt-1 text-lg text-gray-900">{car.mileage.toLocaleString('pt-BR')} km</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Câmbio</h3>
              <p className="mt-1 text-lg text-gray-900">{car.transmission}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Combustível</h3>
              <p className="mt-1 text-lg text-gray-900">{car.fuel}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Cor</h3>
              <p className="mt-1 text-lg text-gray-900">{car.color}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Descrição</h3>
            <p className="mt-1 text-lg text-gray-900">{car.description}</p>
          </div>

          <button
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
} 