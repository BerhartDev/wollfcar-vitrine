'use client';

import { useForm } from 'react-hook-form';
import { Car } from '@/types/Car';

interface CarFormProps {
  car?: Car;
  onSubmit: (data: Car) => void;
}

// Create a type for the form data where images is a string instead of string[]
type CarFormData = Omit<Car, 'images'> & {
  images: string;
};

export default function CarForm({ car, onSubmit }: CarFormProps) {
  // Transform the images array to string for the textarea
  const defaultValues: CarFormData = car ? {
    ...car,
    images: car.images.join('\n')
  } : {
    id: String(Date.now()),
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    transmission: 'Automático',
    fuel: 'Flex',
    color: '',
    description: '',
    images: ''
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CarFormData>({
    defaultValues
  });

  const onSubmitForm = (data: CarFormData) => {
    // Convert the images string back to array before submitting
    const formattedData: Car = {
      ...data,
      images: data.images.split('\n').filter(url => url.trim() !== '')
    };
    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <div>
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
          Marca
        </label>
        <input
          type="text"
          id="brand"
          {...register('brand', { required: 'Marca é obrigatória' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.brand && (
          <p className="mt-1 text-sm text-red-600">{errors.brand.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
          Modelo
        </label>
        <input
          type="text"
          id="model"
          {...register('model', { required: 'Modelo é obrigatório' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.model && (
          <p className="mt-1 text-sm text-red-600">{errors.model.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Ano
        </label>
        <input
          type="number"
          id="year"
          {...register('year', {
            required: 'Ano é obrigatório',
            min: { value: 1900, message: 'Ano inválido' },
            max: { value: new Date().getFullYear() + 1, message: 'Ano inválido' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.year && (
          <p className="mt-1 text-sm text-red-600">{errors.year.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Preço
        </label>
        <input
          type="number"
          id="price"
          {...register('price', {
            required: 'Preço é obrigatório',
            min: { value: 0, message: 'Preço deve ser maior que zero' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
          Quilometragem
        </label>
        <input
          type="number"
          id="mileage"
          {...register('mileage', {
            required: 'Quilometragem é obrigatória',
            min: { value: 0, message: 'Quilometragem deve ser maior ou igual a zero' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.mileage && (
          <p className="mt-1 text-sm text-red-600">{errors.mileage.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
          Câmbio
        </label>
        <select
          id="transmission"
          {...register('transmission', { required: 'Câmbio é obrigatório' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="Manual">Manual</option>
          <option value="Automático">Automático</option>
        </select>
        {errors.transmission && (
          <p className="mt-1 text-sm text-red-600">{errors.transmission.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
          Combustível
        </label>
        <select
          id="fuel"
          {...register('fuel', { required: 'Combustível é obrigatório' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="Gasolina">Gasolina</option>
          <option value="Etanol">Etanol</option>
          <option value="Flex">Flex</option>
          <option value="Diesel">Diesel</option>
          <option value="Elétrico">Elétrico</option>
        </select>
        {errors.fuel && (
          <p className="mt-1 text-sm text-red-600">{errors.fuel.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
          Cor
        </label>
        <input
          type="text"
          id="color"
          {...register('color', { required: 'Cor é obrigatória' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.color && (
          <p className="mt-1 text-sm text-red-600">{errors.color.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description', { required: 'Descrição é obrigatória' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message as string}</p>
        )}
      </div>

      <div>
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
          URLs das Imagens (uma por linha)
        </label>
        <textarea
          id="images"
          rows={4}
          {...register('images', {
            required: 'Pelo menos uma imagem é obrigatória'
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="http://exemplo.com/imagem1.jpg&#10;http://exemplo.com/imagem2.jpg"
        />
        {errors.images && (
          <p className="mt-1 text-sm text-red-600">{errors.images.message as string}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {car ? 'Atualizar Carro' : 'Adicionar Carro'}
        </button>
      </div>
    </form>
  );
} 