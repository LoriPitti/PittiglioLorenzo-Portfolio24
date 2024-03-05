import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {IconDirective, IconSetService} from "@coreui/icons-angular";
import { DropdownListComponent } from './home/dropdown-list/dropdown-list.component';
import { SkillsComponent } from './home/skills/skills.component';
import { SkillCardComponent } from './home/skills/skill-card/skill-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectComponent } from './project/project.component';
import {NgOptimizedImage} from "@angular/common";
import { ProjectCardComponent } from './project/project-card/project-card.component';
import {FormsModule} from "@angular/forms";
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownListComponent,
    SkillsComponent,
    SkillCardComponent,
    ContactsComponent,
    FooterComponent,
    PersonalComponent,
    ProjectComponent,
    ProjectCardComponent,
    CurriculumComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IconDirective,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule,
        PdfViewerModule
    ],
  providers: [
    IconSetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
