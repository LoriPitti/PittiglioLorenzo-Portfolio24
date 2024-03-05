import {Component, OnInit} from '@angular/core';
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
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent implements OnInit{

  constructor(public iconSet:IconSetService, private route:ActivatedRoute, private router:Router) {
    iconSet.icons = {cibAngular, cibJava, cibTypescript,cibCss3, cibHtml5, cibMysql,  cibAndroid, cibSpring, cibBootstrap, cilAlignRight,
      cibWhatsapp, cibLinkedin, cibGithub,cibGmail }
    //----------------1 ------------2-------------3-----------4-------5-------6-------------7----------8-----------9
  }


  ngOnInit(): void {
    this.route.fragment.subscribe(frag=>{
      if(frag){
        this.router.navigate(['about-me'], {fragment:frag}).then(()=>{
          this.scrollToFragment(frag);
        })
      }

    })
  }
  showInfo(){
    let info = document.getElementById("div-info");
    let photo = document.getElementById("photo");
    let deco = document.getElementById("deco");
    if(info){
      info.style.visibility="visible"
      info.style.transform = "scale(1.1)"
    }
    if(photo)
      photo.style.transform="scale(1.1)"
    if(deco)
      deco.style.transform="rotate(90deg)"
  }
  hideInfo() {
    let info = document.getElementById("div-info");
    let photo = document.getElementById("photo");
    let deco = document.getElementById("deco");
    if(info){
      info.style.visibility="hidden";
     info.style.transform = "scale(1)"
    }
    if(photo)
      photo.style.transform="scale(1)"
    if(deco)
      deco.style.transform="rotate(0deg)"
  }

  scrollToFragment(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
