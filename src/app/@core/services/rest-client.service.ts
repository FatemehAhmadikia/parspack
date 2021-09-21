import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  constructor(private http: HttpClient) {}

  private getUrl(url: string): string {
    return `${environment.apiServerUrl}/${url}`;
  }

  public get<T>(url: string): Observable<T> {
    url = this.getUrl(url);
    return this.http.get<T>(url);
  }

  public post<T>(url: string, body: {}): Observable<T> {
    url = this.getUrl(url);
    return this.http.post<T>(url, body);
  }

  public delete<T>(url: string): Observable<T> {
    url = this.getUrl(url);
    return this.http.delete<T>(url);
  }

  public put<T>(url: string, body: {}): Observable<T> {
    url = this.getUrl(url);
    return this.http.put<T>(url, body);
  }
}
