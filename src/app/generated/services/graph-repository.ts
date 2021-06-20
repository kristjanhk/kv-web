/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseRepository } from '../base-repository';
import { RepositoryConfiguration } from '../repository-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { KvGraphData } from '../models/kv-graph-data';
import { KvGraphInput } from '../models/kv-graph-input';

@Injectable({
  providedIn: 'root',
})
export class GraphRepository extends BaseRepository {
  constructor(
    config: RepositoryConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getData
   */
  static readonly GetDataPath = '/kv/graph';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getData$Response(params?: {
    body?: KvGraphInput
  }): Observable<StrictHttpResponse<KvGraphData>> {

    const rb = new RequestBuilder(this.rootUrl, GraphRepository.GetDataPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<KvGraphData>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getData(params?: {
    body?: KvGraphInput
  }): Observable<KvGraphData> {

    return this.getData$Response(params).pipe(
      map((r: StrictHttpResponse<KvGraphData>) => r.body as KvGraphData)
    );
  }

}
