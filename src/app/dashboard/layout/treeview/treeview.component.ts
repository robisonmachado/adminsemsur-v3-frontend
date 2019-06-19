import { Component, OnInit } from '@angular/core';
import { Modulo } from 'src/app/api/modulo.interface';
import { UserService } from 'src/app/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'semsur3-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {

  /* modulos = [
    {name: "Serviços Urbanos"},
    {name: "Iluminação Pública"},
    {name: "Cemitério"},
    {name: "RH"},
    {name: "Patrimônio"},
    {name: "Frotas"},
    {name: "Almoxarifado"},
    {name: "Arquivo"}    
  
  ] */

  modulos: Modulo[]

  mods: Observable<Modulo[]>

  constructor(private userService: UserService) {
    console.log("TreeviewComponent --> constructor")
    this.mods = this.userService.modulos().pipe(
      tap(
        mods => console.log('TreeviewComponent --> mods obtidos com sucesso')
      )
    )
    this.modulos = this.userService.userModulos
  }

  ngOnInit() {
    
  }

}
