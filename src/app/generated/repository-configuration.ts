/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class RepositoryConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `RepositoryModule.forRoot()`
 */
export interface RepositoryConfigurationParams {
  rootUrl?: string;
}
