import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IconSetService} from "@coreui/icons-angular";
import {cilAlignRight} from "@coreui/icons";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title: string = 'LORENZO PITTIGLIO';

  fragment:string|null = '';
  constructor(private  iconSet:IconSetService, private route:ActivatedRoute, private router:Router) {
    iconSet.icons = {cilAlignRight};
  }

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (frag) {
        this.router.navigate([''], { fragment: frag }).then(() => {
          this.scrollToFragment(frag);
        });
      }
    });
  }

  scrollToFragment(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
