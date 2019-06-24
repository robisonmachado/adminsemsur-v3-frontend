import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import {map, filter, catchError, mergeMap, tap, switchMap} from 'rxjs/operators';
import { Modulo } from './api/modulo.interface';
import { User } from './api/user.interface';
import { Token } from './api/security/token.class';
import { ServerAccessInfo } from './api/security/server-access-info.class';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User
  userModulos: Modulo[]
  loggedIn = false
  token: Token;
  serverAccessInfo: ServerAccessInfo

  constructor(private http: HttpClient) { 

  }

  getServerAccessInfo(cpf: number, senha: string):Observable<ServerAccessInfo | null>{
    let url = 'http://127.0.0.1:8000/adminsemsur3/client_secret'
    return this.http.post<ServerAccessInfo>(url, {
      'cpf': cpf,
      'senha': senha
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      },
      observe: "response"
     })
            .pipe(
              map(
                httpResponse => {
                  console.log("UserService->getClientSecret --> Obtido http response object")
                  console.log(httpResponse.body)
                  return httpResponse.body
              })
            )
  }

  login(cpf: number, senha: string):Observable<Token | null>{
    let url = `http://127.0.0.1:8000/oauth/token`
    
    if(this.serverAccessInfo == null || undefined){
      this.getServerAccessInfo(cpf, senha).subscribe(

        )
    }
    

    return this.http.post< Token | null>(url, {
      "grant_type": "password",
      "client_id": "3",
      "client_secret": "fKD5ZBPNuU1IoaxuDydyBYOxECNUmCBgb6IyBgnl",
      "username": "1",
      "password": "1"
    })
      .pipe(
        map(
          token => {
            if(token != null){
              console.log("UserService ==> Token obtido com sucesso")
              this.token = token
              console.log(token)
              return token
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
