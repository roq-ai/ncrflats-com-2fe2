import axios from 'axios';
import queryString from 'query-string';
import { BuyerInterface, BuyerGetQueryInterface } from 'interfaces/buyer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBuyers = async (query?: BuyerGetQueryInterface): Promise<PaginatedInterface<BuyerInterface>> => {
  const response = await axios.get('/api/buyers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBuyer = async (buyer: BuyerInterface) => {
  const response = await axios.post('/api/buyers', buyer);
  return response.data;
};

export const updateBuyerById = async (id: string, buyer: BuyerInterface) => {
  const response = await axios.put(`/api/buyers/${id}`, buyer);
  return response.data;
};

export const getBuyerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/buyers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBuyerById = async (id: string) => {
  const response = await axios.delete(`/api/buyers/${id}`);
  return response.data;
};
