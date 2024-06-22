import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Associate } from 'src/app/Store/Model/Associate.model';

@Injectable({
  providedIn: 'root',
})
export class AssociateService {
  baseUrl = 'http://localhost:3000/associate';
  constructor(private http: HttpClient) {}

  CreateAssociate(data: Associate) {
    return this.http.post<Associate>(this.baseUrl, data);
  }

  GetAllAssociate() {
    return this.http.get<Associate[]>(this.baseUrl);
  }

  GetAssociateByCode(code: number) {
    return this.http.get<Associate>(this.baseUrl + '/' + code);
  }

  UpdateAssociate(data: Associate) {
    return this.http.put<Associate>(this.baseUrl + '/' + data.id, data);
  }

  DeleteAssociate(code: number) {
    return this.http.delete(this.baseUrl + '/' + code);
  }
}
