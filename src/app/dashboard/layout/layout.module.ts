import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ModuloIconComponent } from './modulo-icon/modulo-icon.component';

@NgModule({
  declarations: [
    TopnavbarComponent, 
    AsidenavbarComponent, 
    FooternavbarComponent, 
    SettingsnavbarComponent, 
    TreeviewComponent, 
    SearchbarComponent, 
    ModuloIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopnavbarComponent, 
    AsidenavbarComponent, 
    FooternavbarComponent, 
    SettingsnavbarComponent,
    TreeviewComponent, 
    SearchbarComponent, 
    ModuloIconComponent
  ]
})
export class LayoutModule { }
