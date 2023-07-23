import { BuyerInterface } from 'interfaces/buyer';
import { SellerInterface } from 'interfaces/seller';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  buyer_id?: string;
  seller_id?: string;
  created_at?: any;
  updated_at?: any;

  buyer?: BuyerInterface;
  seller?: SellerInterface;
  _count?: {};
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  buyer_id?: string;
  seller_id?: string;
}
