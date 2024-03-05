import { Component } from '@angular/core';
import {IconSetService} from "@coreui/icons-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {
  cibAndroid,
  cibAngular,
  cibBootstrap,
  cibCss3, cibGithub, cibGmail,
  cibHtml5,
  cibJava, cibLinkedin,
  cibMysql,
  cibSpring,
  cibTypescript, cibWhatsapp, cilAlignRight
} from "@coreui/icons";

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  constructor(public iconSet:IconSetService, private route:ActivatedRoute, private router:Router) {
    iconSet.icons = {
      cibAngular,
      cibJava,
      cibTypescript,
      cibCss3,
      cibHtml5,
      cibMysql,
      cibAndroid,
      cibSpring,
      cibBootstrap,
      cilAlignRight,
      cibWhatsapp,
      cibLinkedin,
      cibGithub,
      cibGmail
    }
  }


}
