import { Address } from './address';
import { Customer } from './customer';

export class OrderManagement {
  id?: string;
  customer?: Customer | any;
  lastName?: string;
  orderTrackingNumber?: string;
  totalPrice?: number;
  totalQuantity?: number;
  dateCreated?: Date;
  shippingAddress?: Address | any;
  paid?: boolean;
  orderStatus?: string;
}
