'use client';

import Image from 'next/image';
import { Car } from '@/types/Car';

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
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
          {/* Main Image */}
          <div className="relative w-full" style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio */}
            <Image
              src={mainImage}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {images.slice(1).map((image, index) => (
              <div 
                key={index} 
                className="relative w-full"
                style={{ paddingTop: '75%' }} // 4:3 aspect ratio
              >
                <Image
                  src={image}
                  alt={`${car.brand} ${car.model} - Imagem ${index + 2}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
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