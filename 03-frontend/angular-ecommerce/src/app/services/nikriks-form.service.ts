import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../common/country';
import { Region } from '../common/region';

@Injectable({
  providedIn: 'root',
})
export class NikriksFormService {
  private countriesUrl = environment.nikriksApiUrl + '/countries';
  private regionsUrl = environment.nikriksApiUrl + '/regions';

  constructor(private httpClient: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.httpClient
      .get<GetResponseCountries>(this.countriesUrl)
      .pipe(map((response) => response._embedded.countries));
  }

  getRegions(theCountryCode: string): Observable<Region[]> {
    // search url
    const searchRegionsUrl = `${this.regionsUrl}/search/findByCountryCode?code=${theCountryCode}`;

    return this.httpClient
      .get<GetResponseRegions>(searchRegionsUrl)
      .pipe(map((response) => response._embedded.regions));
  }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    // build an array for "Month dropdown list
    // - start at current month and loop until

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    // build an array for "Year" downlist list
    // - start at current year and loop for next 10 years

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return of(data);
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  };
}

interface GetResponseRegions {
  _embedded: {
    regions: Region[];
  };
}
