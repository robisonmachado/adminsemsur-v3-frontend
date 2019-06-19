import { Component, OnInit, OnDestroy } from '@angular/core';
import { Modulo } from 'src/app/api/modulo.interface';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'semsur3-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  iluminacaoModulo: Modulo

  constructor(private userService: UserService) { 
    this.iluminacaoModulo = this.userService.iluminacaoModulo()
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'))
    document.body.className='skin-blue sidebar-mini'
  }

  ngOnDestroy(): void {
    document.body.className=''
  }

}
