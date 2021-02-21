import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * Merr orarin e provimeve per student pa params
   */
  getOrariProvimevePerStudent() {
    return this.http.get<any>('https://localhost:44307/orariProvimeveStudent');
  }

  /**
   * Merr orarin e provimeve per student me params
   */
  getOrariProvimevePerStudentMeParams(viti, dega, paraleli) {
    return this.http.get<any>(
      `https://localhost:44307/orariProvimeveStudent/${dega}/${viti}/${paraleli}`
    );
  }
}
