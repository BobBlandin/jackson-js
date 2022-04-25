import {ProductData} from './rest-entities.model';

export * from './core';
export * from './databind';
export * from './decorators';


// @ts-ignore
import jsonContent from '../debug.json';
import {JsonParser} from './index';


console.log(jsonContent);
const jsonParser: JsonParser<ProductData> = new JsonParser<ProductData>();
if (jsonParser.defaultContext.features) {
  jsonParser.defaultContext.features.deserialization.FAIL_ON_UNKNOWN_PROPERTIES = false;
  // jsonParser.defaultContext.features.deserialization.FAIL_ON_MISSING_TYPE_ID = false;
}
const res = jsonParser.transform(jsonContent, {
  mainCreator: () => [ProductData],
});

console.log(res);

// const clone = require('lodash.clone');
// const clonedeep = require('lodash.clonedeep');
// // import * as cloneDeep from 'lodash.clonedeep';
// console.log(clonedeep('ok'));
