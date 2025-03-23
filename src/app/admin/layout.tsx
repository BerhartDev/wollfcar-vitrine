'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Layout from '@/components/Layout';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  useEffect(() => {
    // TODO: Implement proper authentication check
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated && window.location.pathname !== '/admin/login') {
      redirect('/admin/login');
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
        </div>
        {children}
      </div>
    </Layout>
  );
} 