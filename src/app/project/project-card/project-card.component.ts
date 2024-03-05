import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconSetService} from "@coreui/icons-angular";
import {
  cibAndroid,
  cibAngular,
  cibBootstrap,
  cibCss3, cibGithub, cibGmail,
  cibHtml5,
  cibJava, cibLinkedin, cibMathworks,
  cibMysql,
  cibSpring,
  cibTypescript, cibWhatsapp, cilAlignRight
} from "@coreui/icons";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  animations: [
    trigger('slideDown', [
      state('void', style({
        transform: 'translateY(-50%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('1.2s ease', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('1.2s ease', style({
          transform: 'translateY(-50%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ProjectCardComponent {
 @Input() title: string =''
  hidden=false;
  @Input()description: string = '';
  @Input()imgs:string[] = [];
  @Input()mathlab=false;
  @Input()java = false;
  @Input()angular = false;
  @Input()spring = false;
  @Input()id='';
  @Output()toggle = new EventEmitter<boolean>();

  constructor(public iconSet:IconSetService) {
    iconSet.icons = {cibAngular, cibJava, cibTypescript,cibCss3, cibHtml5, cibMysql,  cibAndroid, cibSpring, cibBootstrap, cilAlignRight,
      cibWhatsapp, cibLinkedin, cibGithub,cibGmail, cibMathworks }

  }

  showHideContent() {
      this.hidden = !this.hidden;
      const card = document.getElementById(this.id);
      if(this.hidden){
        if(card)
          card.style.transform="rotate(90deg)"
        this.toggle.emit(true);
      }
      else{
        if(card)
          card.style.transform="rotate(0deg)"
        this.toggle.emit(false);
      }
  }

}
