import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.css'
})
export class DropdownListComponent {
  isRotated=false;

//-----monitoring the dropdown show/hide to rotate icon
  rotateIcon(){
    const icon = document.getElementById("dropdown-icon");
    if(icon){
      if(!this.isRotated){
        this.isRotated = true;
        icon.style.transform = "rotate(90deg)";
      }
      else{
        this.isRotated = false;
        icon.style.transform ="rotate(0deg)";
      }
    }
  }
}
