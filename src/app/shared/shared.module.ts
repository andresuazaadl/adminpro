import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumdsComponent } from './breadcrumds/breadcrumds.component';


@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumdsComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumdsComponent,
    ]
})

export class SharedModule{}