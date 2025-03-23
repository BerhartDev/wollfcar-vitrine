import Image from 'next/image';
import Layout from '@/components/Layout';
import { mockCars } from '@/lib/mockData';

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = mockCars.find((c) => c.id === params.id);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <Image
                src={car.imagens[0] || '/images/placeholder.jpg'}
                alt={`${car.marca} ${car.modelo}`}
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {car.imagens.slice(1).map((imagem, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <Image
                    src={imagem}
                    alt={`${car.marca} ${car.modelo} - Imagem ${index + 2}`}
                    width={200}
                    height={150}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">
              {car.marca} {car.modelo}
            </h1>
            <p className="mt-2 text-2xl font-bold text-primary-600">
              R$ {car.preco.toLocaleString('pt-BR')}
            </p>

            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Ano</h3>
                  <p className="mt-1 text-sm text-gray-900">{car.ano}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Quilometragem</h3>
                  <p className="mt-1 text-sm text-gray-900">{car.km.toLocaleString('pt-BR')} km</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Câmbio</h3>
                  <p className="mt-1 text-sm text-gray-900">{car.cambio}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Combustível</h3>
                  <p className="mt-1 text-sm text-gray-900">{car.combustivel}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Cor</h3>
                  <p className="mt-1 text-sm text-gray-900">{car.cor}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Descrição</h3>
                <p className="mt-1 text-sm text-gray-900">{car.descricao}</p>
              </div>

              <button
                type="button"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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