import Layout from '@/components/Layout';
import CarCard from '@/components/CarCard';
import { mockCars } from '@/lib/mockData';

export default function CarsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 space-y-4">
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Marca
              </label>
              <select
                id="brand"
                name="brand"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Todas</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Preço Máximo
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="R$ 0,00"
              />
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                Ano Mínimo
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="2020"
              />
            </div>

            <button
              type="button"
              className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Filtrar
            </button>
          </div>

          {/* Cars Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 