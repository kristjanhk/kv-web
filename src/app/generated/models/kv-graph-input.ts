/* tslint:disable */
/* eslint-disable */
import { KvCounty } from './kv-county';
import { KvType } from './kv-type';
export interface KvGraphInput {
  active: boolean;
  county?: KvCounty;
  dateMax?: string;
  dateMin?: string;
  priceMax?: number;
  priceMin?: number;
  rooms?: number;
  sizeMax?: number;
  sizeMin?: number;
  type?: KvType;
}
