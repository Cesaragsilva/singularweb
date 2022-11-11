import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[]=[];
  private pathIcons = "../../../assets/icons/svg/";
  public currentRouter = "";
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router) { 
      this.registryIcons();
      this.currentRouter = this.router.url;
    }

  ngOnInit(): void {
    this.menus = [
      { icon: 'dashboard', name: 'Dashboard', router:'/dashboard' },
      { icon: 'feedback', name: 'Clientes', router:'/clientes' },
      { icon: 'deal', name: 'Parceiros', router:'/parceiros' },
      { icon: 'report', name: 'Relatórios', router:'/relatorios' },
      { icon: 'settings', name: 'Configurações', router:'/configuracoes' }];
  }

  public handleClick(router: String){
    this.router.navigate([router]);
  }

  private registryIcons(){
    this.matIconRegistry.addSvgIcon("dashboard",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/dashboard.svg`));
    this.matIconRegistry.addSvgIcon("dashboard-off",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/dashboard-off.svg`));   
    this.matIconRegistry.addSvgIcon("feedback",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/feedback-off.svg`));    
    this.matIconRegistry.addSvgIcon("feedback-off",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/feedback-off.svg`));   
    this.matIconRegistry.addSvgIcon("deal",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/deal-off.svg`)); 
    this.matIconRegistry.addSvgIcon("deal-off",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/deal-off.svg`)); 
    this.matIconRegistry.addSvgIcon("report",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/report-off.svg`));     
    this.matIconRegistry.addSvgIcon("report-off",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/report-off.svg`));
    this.matIconRegistry.addSvgIcon("settings",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/settings-off.svg`));
    this.matIconRegistry.addSvgIcon("settings-off",this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.pathIcons}/settings-off.svg`));
  }

}
