import { useForm } from 'react-hook-form';
import { Car } from '@/types/Car';

interface CarFormProps {
  car?: Car;
  onSubmit: (data: Omit<Car, 'id'>) => void;
}

export default function CarForm({ car, onSubmit }: CarFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Car, 'id'>>({
    defaultValues: car,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="marca" className="block text-sm font-medium text-gray-700">
            Marca
          </label>
          <input
            type="text"
            id="marca"
            {...register('marca', { required: 'Marca é obrigatória' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.marca && (
            <p className="mt-1 text-sm text-red-600">{errors.marca.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">
            Modelo
          </label>
          <input
            type="text"
            id="modelo"
            {...register('modelo', { required: 'Modelo é obrigatório' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.modelo && (
            <p className="mt-1 text-sm text-red-600">{errors.modelo.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="ano" className="block text-sm font-medium text-gray-700">
            Ano
          </label>
          <input
            type="number"
            id="ano"
            {...register('ano', {
              required: 'Ano é obrigatório',
              min: { value: 1900, message: 'Ano inválido' },
              max: { value: new Date().getFullYear() + 1, message: 'Ano inválido' },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.ano && (
            <p className="mt-1 text-sm text-red-600">{errors.ano.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
            Preço
          </label>
          <input
            type="number"
            id="preco"
            {...register('preco', {
              required: 'Preço é obrigatório',
              min: { value: 0, message: 'Preço deve ser maior que zero' },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.preco && (
            <p className="mt-1 text-sm text-red-600">{errors.preco.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="km" className="block text-sm font-medium text-gray-700">
            Quilometragem
          </label>
          <input
            type="number"
            id="km"
            {...register('km', {
              required: 'Quilometragem é obrigatória',
              min: { value: 0, message: 'Quilometragem deve ser maior que zero' },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.km && (
            <p className="mt-1 text-sm text-red-600">{errors.km.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cambio" className="block text-sm font-medium text-gray-700">
            Câmbio
          </label>
          <select
            id="cambio"
            {...register('cambio', { required: 'Câmbio é obrigatório' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Selecione</option>
            <option value="Manual">Manual</option>
            <option value="Automático">Automático</option>
            <option value="CVT">CVT</option>
          </select>
          {errors.cambio && (
            <p className="mt-1 text-sm text-red-600">{errors.cambio.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="combustivel" className="block text-sm font-medium text-gray-700">
            Combustível
          </label>
          <select
            id="combustivel"
            {...register('combustivel', { required: 'Combustível é obrigatório' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Selecione</option>
            <option value="Flex">Flex</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Etanol">Etanol</option>
            <option value="Diesel">Diesel</option>
            <option value="Elétrico">Elétrico</option>
          </select>
          {errors.combustivel && (
            <p className="mt-1 text-sm text-red-600">{errors.combustivel.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cor" className="block text-sm font-medium text-gray-700">
            Cor
          </label>
          <input
            type="text"
            id="cor"
            {...register('cor', { required: 'Cor é obrigatória' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.cor && (
            <p className="mt-1 text-sm text-red-600">{errors.cor.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          id="descricao"
          rows={4}
          {...register('descricao', { required: 'Descrição é obrigatória' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.descricao && (
          <p className="mt-1 text-sm text-red-600">{errors.descricao.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="imagens" className="block text-sm font-medium text-gray-700">
          URLs das Imagens (uma por linha)
        </label>
        <textarea
          id="imagens"
          rows={4}
          {...register('imagens', {
            required: 'Pelo menos uma imagem é obrigatória',
            setValueAs: (value) => value.split('\n').filter(Boolean),
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {errors.imagens && (
          <p className="mt-1 text-sm text-red-600">{errors.imagens.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {car ? 'Salvar Alterações' : 'Cadastrar Carro'}
        </button>
      </div>
    </form>
  );
} 