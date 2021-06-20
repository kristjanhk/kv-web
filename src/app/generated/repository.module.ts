/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryConfiguration, RepositoryConfigurationParams } from './repository-configuration';

import { GraphRepository } from './services/graph-repository';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    GraphRepository,
    RepositoryConfiguration
  ],
})
export class RepositoryModule {
  static forRoot(params: RepositoryConfigurationParams): ModuleWithProviders<RepositoryModule> {
    return {
      ngModule: RepositoryModule,
      providers: [
        {
          provide: RepositoryConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: RepositoryModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('RepositoryModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
