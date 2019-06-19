import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semsur3-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {

  modulos = [
    {name: "Serviços Urbanos"},
    {name: "Iluminação Pública"},
    {name: "Cemitério"},
    {name: "RH"},
    {name: "Patrimônio"},
    {name: "Frotas"},
    {name: "Almoxarifado"},
    {name: "Arquivo"}    
  
  ]

  constructor() { }

  ngOnInit() {

  }

}
