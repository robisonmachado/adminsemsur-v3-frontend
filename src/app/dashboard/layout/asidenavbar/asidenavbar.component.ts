import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'semsur3-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });

  }

}
