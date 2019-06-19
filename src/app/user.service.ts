import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import {map, filter, catchError, mergeMap, tap, switchMap} from 'rxjs/operators';
import { Modulo } from './api/modulo.interface';
import { User } from './api/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User
  userModulos: Modulo[]
  loggedIn = false

  constructor(private http: HttpClient) { 

  }


  login(cpf: number, senha: string):Observable<User | null>{
    return this.http.get<User[] | null>(`http://localhost:3000/users?cpf=${cpf}&senha=${senha}`, {observe: 'response'})
      .pipe(
        map(
          resp => {
            console.log(resp.body.length)
            if(resp.body.length > 0){
              console.log("UserService ==> Usuário logado com sucesso")
              return resp.body[0]
            }
            console.log("UserService ==> Erro ao logar usuário: cpf ou senha não conferem")
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
        ),
        tap(
          modulos => {
            this.userModulos = modulos
            console.log("UserService ==> Módulos obtidos com sucesso")
          }
        )
      )
  } 

  iluminacaoModulo(){
    return { id: 1 , nome: "Iluminação Pública", abreviacao: "IP" }
  }

}
