import axios from 'axios';
import { Car } from '@/types/Car';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
});

export const getCars = async (): Promise<Car[]> => {
  const { data } = await api.get<Car[]>('/cars');
  return data;
};

export const getCar = async (id: string): Promise<Car> => {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
};

export const createCar = async (car: Omit<Car, 'id'>): Promise<Car> => {
  const { data } = await api.post<Car>('/cars', car);
  return data;
};

export const updateCar = async (id: string, car: Omit<Car, 'id'>): Promise<Car> => {
  const { data } = await api.put<Car>(`/cars/${id}`, car);
  return data;
};

export const deleteCar = async (id: string): Promise<void> => {
  await api.delete(`/cars/${id}`);
}; 