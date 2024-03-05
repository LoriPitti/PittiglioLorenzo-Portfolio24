import { Component } from '@angular/core';

import {growIn, shrinkOut} from "../animations/animation";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [shrinkOut, growIn]

})
export class SkillsComponent {


  growDiv(id:string) {
    const li = document.getElementById(id);
    if(li){
      li.style.height="70vh";
    }
  }
  shrinkDiv(id:string) {
    const li = document.getElementById(id);
    if(li){
      li.style.height="35vh";
    }
  }

  toggleDiv($event: boolean, id:string) {
    console.log($event)
      if($event)
        this.growDiv(id);
      else
        this.shrinkDiv(id);
  }
}
