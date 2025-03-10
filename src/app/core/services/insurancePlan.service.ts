import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../base-url';
import { Question } from '../models/question';
import { Answer } from '../types/Answer';

@Injectable({
  providedIn: 'root',
})
export class InsurancePlanService {
  constructor(private http: HttpClient) {}

  GetInsurancePlanByCategory(id: number) {
    return this.http.get(
      BASE_URL + '/InsurancePlan/GetInsurancePlansByCategoryId/' + id
    );
  }
  SendRequestInsurancePlan(planId: number, answers: any) {
    return this.http.post(BASE_URL + '/Customers/requestInsurancePlan', {
      insurancePlanId: planId,
      answers,
    });
  }
  
}
