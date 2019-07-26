import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumdsComponent } from './breadcrumds/breadcrumds.component';

@NgModule({
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