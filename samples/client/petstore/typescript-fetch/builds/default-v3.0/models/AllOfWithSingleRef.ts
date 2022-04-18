/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AllOfWithSingleRefSingleRefType,
    AllOfWithSingleRefSingleRefTypeFromJSON,
    AllOfWithSingleRefSingleRefTypeFromJSONTyped,
    AllOfWithSingleRefSingleRefTypeToJSON,
} from './AllOfWithSingleRefSingleRefType';

/**
 * 
 * @export
 * @interface AllOfWithSingleRef
 */
export interface AllOfWithSingleRef {
    /**
     * 
     * @type {string}
     * @memberof AllOfWithSingleRef
     */
    username?: string;
    /**
     * 
     * @type {AllOfWithSingleRefSingleRefType}
     * @memberof AllOfWithSingleRef
     */
    singleRefType?: AllOfWithSingleRefSingleRefType;
}

export function AllOfWithSingleRefFromJSON(json: any): AllOfWithSingleRef {
    return AllOfWithSingleRefFromJSONTyped(json, false);
}

export function AllOfWithSingleRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllOfWithSingleRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'singleRefType': !exists(json, 'SingleRefType') ? undefined : AllOfWithSingleRefSingleRefTypeFromJSON(json['SingleRefType']),
    };
}

export function AllOfWithSingleRefToJSON(value?: AllOfWithSingleRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'SingleRefType': AllOfWithSingleRefSingleRefTypeToJSON(value.singleRefType),
    };
}

