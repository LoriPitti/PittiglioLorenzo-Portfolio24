import {Component, OnInit} from '@angular/core';
import {brandSet} from "@coreui/icons";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{


  protected readonly brandSet = brandSet;
  ngOnInit(): void {
    this.scrollToTop()
  }


  toggleDiv($event: boolean, id: string) {
    if($event)
      this.growDiv(id);
    else
      this.shrinkDiv(id);
  }

  growDiv(id:string){
    const li = document.getElementById(id);
    if(li)
      li.style.minHeight="110vh";

  }
  shrinkDiv(id:string){
    const li = document.getElementById(id);
    if(li) {
      li.style.minHeight = "40vh";
      li.style.height = "40vh";
    }

  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
