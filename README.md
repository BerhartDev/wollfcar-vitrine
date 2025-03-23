# 🚗 Wolffcar - Website Institucional

Website institucional e vitrine de veículos da Wolffcar, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form**
- **Axios** (para comunicação com API)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/wolffcar-vitrine.git
cd wolffcar-vitrine
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## 🏗️ Estrutura do Projeto

```
/app                → rotas (Next App Router)
/components         → componentes reutilizáveis
/types              → tipos TypeScript
/lib                → funções auxiliares e chamadas à API
/public/images      → imagens estáticas
/styles             → Tailwind e estilos globais
```

## 📄 Páginas

- `/` → Home com apresentação da empresa e carros em destaque
- `/carros` → Vitrine com filtros
- `/carros/[id]` → Detalhes do carro
- `/admin` → Painel com lista de carros
- `/admin/novo` → Cadastro de carro
- `/admin/[id]/editar` → Edição de carro

## 🔄 API

O projeto está preparado para integração com uma API REST que implementa os seguintes endpoints:

```
GET    /api/cars
GET    /api/cars/:id
POST   /api/cars
PUT    /api/cars/:id
DELETE /api/cars/:id
```

Até que a API esteja pronta, os dados são simulados através do arquivo `src/lib/mockData.ts`.

## 🔐 Admin e Segurança

O painel administrativo está preparado para autenticação futura. Atualmente, a autenticação está desabilitada para desenvolvimento.

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela.

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

## 📦 Build

Para criar uma build de produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Bernardo** - *Desenvolvimento inicial* - [seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/) 