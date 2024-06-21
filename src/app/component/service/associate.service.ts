import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Associates } from 'src/app/Store/Model/Associate.model';

@Injectable({
  providedIn: 'root',
})
export class AssociateService {
  baseUrl = 'http://localhost:3000/associate';
  constructor(private http: HttpClient) {}

  CreateAssociate(data: Associates) {
    return this.http.post<Associates>(this.baseUrl, data);
  }

  GetAllAssociate() {
    return this.http.get<Associates[]>(this.baseUrl);
  }

  GetAssociateByCode(code: number) {
    return this.http.get<Associates>(this.baseUrl + '/' + code);
  }

  UPdateAssociate(data: Associates) {
    return this.http.put<Associates>(this.baseUrl + '/' + data.id, data);
  }

  DeleteAssociate(code: number) {
    return this.http.delete(this.baseUrl + '/' + code);
  }
}
