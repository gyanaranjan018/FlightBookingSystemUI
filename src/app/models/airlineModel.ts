import { InventoryDetails } from './airlineInventory';
import { AirlineStatus } from './enums/enums';

export interface AirlineModel {
  id: string;
  name: string;
  contactNo: string;
  contactAddress: string;
  status: AirlineStatus;
  logoPath: string;
}

export interface AirlineDetails extends AirlineModel {
  inventories: InventoryDetails[];
}
