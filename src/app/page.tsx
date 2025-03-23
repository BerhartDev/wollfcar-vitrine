import Layout from '@/components/Layout';
import { getImagePath } from '@/lib/utils';

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-600 mix-blend-multiply" />
          <div className="relative h-full">
            <div 
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${getImagePath('/images/hero-bg.jpg')}')`}}
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Encontre o carro dos seus sonhos
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            A Wolffcar oferece os melhores veículos seminovos com procedência e garantia.
            Conheça nossa seleção de carros e encontre o modelo ideal para você.
          </p>
          <div className="mt-10">
            <a
              href="/carros"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Por que escolher a Wolffcar?</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Veículos Selecionados</h3>
            <p className="text-gray-600">Todos os nossos carros passam por uma rigorosa inspeção antes de serem disponibilizados.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Garantia Estendida</h3>
            <p className="text-gray-600">Oferecemos garantia em todos os veículos para sua tranquilidade.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financiamento Facilitado</h3>
            <p className="text-gray-600">Parcerias com as principais instituições financeiras para facilitar sua compra.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 