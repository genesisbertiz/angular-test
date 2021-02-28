import {
  Component,
  VERSION,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterViewChecked,
} from "@angular/core";
import * as _ from "lodash";

declare var $: any;

export interface MenusInterface {
  id?: number;
  title: string;
  children?: MenusInterface[];
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild("navbar") nav: ElementRef;
  showMore: MenusInterface[] = [];
  menus: MenusInterface[] = [
    {
      id: 1,
      title: "Visual Language",
    },
    {
      id: 2,
      title: "Components",
      children: [
        {
          title: "Action",
        },
        {
          title: "Another Action",
        },
        {
          title: "Something else here",
        },
      ],
    },
    {
      id: 3,
      title: "Component 1",
    },
    {
      id: 4,
      title: "Component 2",
    },
    {
      id: 5,
      title: "Component 3",
    },
    {
      id: 6,
      title: "Component 4",
      children: [
        {
          title: "Action",
        },
        {
          title: "Another Action",
        },
        {
          title: "Something else here",
        },
      ],
    },
    {
      id: 7,
      title: "Component 5",
    },
    {
      id: 8,
      title: "Component 6",
    },
  ];
  elements: any[] = [];
  firstLoad = true
  constructor() {}
  collapse(maxheight) {
    let height = this.nav.nativeElement.offsetHeight;
    const el = this.nav.nativeElement as HTMLElement;
    if (height >= maxheight) {
      try {
        let n = 0;
        while (height > maxheight && n <= 1000) {
          const count = el.children.length;
          if (
            el.lastElementChild &&
            this.showMore.filter((e) => e.id !== this.menus[count - 1].id)
          ) {
            this.elements.push(el.lastElementChild);
            el.lastElementChild.remove();
            this.showMore.push(this.menus[count - 1]);
            height = this.nav.nativeElement.offsetHeight;
            n++;
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let n = 0;
        while (
          height < maxheight &&
          this.showMore.length > 0 &&
          this.elements.length > 0 &&
          n <= 1000
        ) {
          const appendEl = this.elements[this.elements.length - 1];
          if (appendEl) {
            el.insertAdjacentElement("beforeend", appendEl);
            this.elements.pop();
            this.showMore.pop();
            height = this.nav.nativeElement.offsetHeight;
          }
          n++;
          if (height > maxheight) {
            this.collapse(maxheight);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      this.collapse(50);
    });
  }
  ngAfterViewChecked() {
    this.collapse(50);
    if (this.firstLoad) {
      this.firstLoad = false
    }
  }
}
