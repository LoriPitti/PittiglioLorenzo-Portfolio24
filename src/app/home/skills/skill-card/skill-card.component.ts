import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IconSetService} from "@coreui/icons-angular";
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
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
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
export class SkillCardComponent implements OnInit{
  @Input()skill: string = '';
  show: boolean = false;
  @Output()toggle = new EventEmitter<boolean>();
  @Input() description: string = '';
  @Input()java=false;
  @Input()sql=false;
  @Input()boot=false;
  @Input()angular=false;
  @Input()spring=false;
  @Input()html=false;
  @Input() css=false;
  @Input()types=false;
  @Input()android=false;

  constructor(public iconSet:IconSetService) {
    iconSet.icons = {cibAngular, cibJava, cibTypescript,cibCss3, cibHtml5, cibMysql,  cibAndroid, cibSpring, cibBootstrap, cilAlignRight,
    cibWhatsapp, cibLinkedin, cibGithub,cibGmail }
    //----------------1 ------------2-------------3-----------4-------5-------6-------------7----------8-----------9
  }


  ngOnInit(): void {
  }

  showText() {
    this.show=true;
    this.toggle.emit(true);
  }

  hideText() {
    this.show=false;
    this.toggle.emit(false);
  }


}
