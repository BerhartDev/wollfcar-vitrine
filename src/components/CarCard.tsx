'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/types/Car';
import { useState } from 'react';

interface CarCardProps {
  car: Car;
  isAdmin?: boolean;
}

export default function CarCard({ car, isAdmin = false }: CarCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={car.images[currentImageIndex]}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
        {car.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {car.brand} {car.model}
        </h3>
        <p className="text-sm text-gray-500">
          {car.year} • {car.mileage.toLocaleString()} km • {car.transmission}
        </p>
        <p className="mt-2 text-2xl font-bold text-primary-600">
          {formatPrice(car.price)}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/carros/${car.id}`}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Ver Detalhes
          </Link>
          {isAdmin && (
            <Link
              href={`/admin/${car.id}/editar`}
              className="text-gray-600 hover:text-gray-700 font-medium"
            >
              Editar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 