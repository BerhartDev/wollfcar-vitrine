'use client';

import Image from 'next/image';
import Layout from '@/components/Layout';
import { mockCars } from '@/lib/mockData';

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = mockCars.find((car) => car.id === params.id);

  if (!car) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Carro não encontrado</h1>
          <p className="mt-2 text-gray-600">O carro que você está procurando não existe.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <Image
                src={car.images[0]}
                alt={`${car.brand} ${car.model}`}
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {car.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${car.brand} ${car.model} - View ${index + 2}`}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {car.brand} {car.model}
            </h1>
            <p className="mt-2 text-4xl font-bold text-primary-600">
              {car.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Ano</dt>
                  <dd className="mt-1 text-sm text-gray-900">{car.year}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Quilometragem</dt>
                  <dd className="mt-1 text-sm text-gray-900">{car.mileage.toLocaleString()} km</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Câmbio</dt>
                  <dd className="mt-1 text-sm text-gray-900">{car.transmission}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Combustível</dt>
                  <dd className="mt-1 text-sm text-gray-900">{car.fuel}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Cor</dt>
                  <dd className="mt-1 text-sm text-gray-900">{car.color}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-900">Descrição</h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>{car.description}</p>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <button
                type="button"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 