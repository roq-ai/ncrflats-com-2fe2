import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SellerInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  property?: PropertyInterface[];
  user?: UserInterface;
  _count?: {
    property?: number;
  };
}

export interface SellerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
