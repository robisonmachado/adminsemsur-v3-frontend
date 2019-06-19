import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import {map, filter, catchError, mergeMap, tap, switchMap} from 'rxjs/operators';
import { Modulo } from './api/modulo.interface';
import { User } from './api/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }


  login(cpf: number, senha: string):Observable<User | null>{
    return this.http.get<User[] | null>(`http://localhost:3000/users?cpf=${cpf}&senha=${senha}`, {observe: 'response'})
      .pipe(
        map(
          resp => {
            console.log(resp.body.length)
            if(resp.body.length > 0){
              return resp.body[0]
            }
            return null
          }
        )
      )    
  }

  users(): Observable<Object>{
    return this.http.get(`http://localhost:3000/users`)
  } 

  modulos(): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(`http://localhost:3000/modulos`, { observe: 'response' })
      .pipe(
        map(
          resp => {
            return resp.body
          }
        )
      )
  } 

  iluminacaoModulo(){
    return { id: 1 , nome: "Iluminação Pública", abreviacao: "IP" }
  }

}
