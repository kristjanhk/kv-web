import {KvType} from "../../generated/models/kv-type";
import {KvCounty} from "../../generated/models/kv-county";
import {
  date,
  greaterThanEqualTo,
  maxDate,
  numeric,
  NumericValueType,
  oneOf,
  range,
  required
} from "@rxweb/reactive-form-validators";
import {KvGraphInput} from "../../generated/models/kv-graph-input";

export class FilterModel implements KvGraphInput {
  @required()
  active: boolean = true;

  @oneOf({matchValues: Object.values(KvType)})
  type: KvType = KvType.APARTMENT_SALE;

  @oneOf({matchValues: Object.values(KvCounty)})
  county: KvCounty = KvCounty.TARTUMAA;

  @numeric({acceptValue: NumericValueType.PositiveNumber})
  @range({minimumNumber: 1, maximumNumber: 8})
  rooms: number = 3;

  @numeric({acceptValue: NumericValueType.PositiveNumber, allowDecimal: true, isFormat: true, digitsInfo: '0.2-2'})
  priceMin?: number;

  @numeric({acceptValue: NumericValueType.PositiveNumber, allowDecimal: true, isFormat: true, digitsInfo: '0.2-2'})
  @greaterThanEqualTo({fieldName: 'priceMin'})
  priceMax?: number;

  @numeric({acceptValue: NumericValueType.PositiveNumber, allowDecimal: true, isFormat: true, digitsInfo: '0.2-2'})
  sizeMin?: number;

  @numeric({acceptValue: NumericValueType.PositiveNumber, allowDecimal: true, isFormat: true, digitsInfo: '0.2-2'})
  @greaterThanEqualTo({fieldName: 'sizeMin'})
  sizeMax?: number;

  @date({allowISODate: true})
  dateMin?: string;

  @maxDate({allowISODate: true, value: new Date(), operator: '<=', message: 'Must be today or before'})
  dateMax?: string;
}
