import { Component, OnInit, Input } from '@angular/core';
import { Modulo } from 'src/app/api/modulo.interface';

@Component({
  selector: 'semsur3-modulo-icon',
  templateUrl: './modulo-icon.component.html',
  styleUrls: ['./modulo-icon.component.scss']
})
export class ModuloIconComponent implements OnInit {

  @Input() modulo: Modulo
  
  constructor() { }

  ngOnInit() {
  }

}
