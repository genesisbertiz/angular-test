import {
  Component,
  VERSION,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

interface menus {
  title: string;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("navbar") nav: ElementRef;
  menus: menus[] = Array(5).fill({
    title: "lorem ipsum"
  });
  constructor() {}
  collapse(maxheight) {
    const height = this.nav.nativeElement.offsetHeight;
    const count = this.nav.nativeElement.children.length;
    console.log(height >= maxheight);
    if (height >= maxheight) {
      console.log(this.nav.nativeElement.children[count - 1]);
    }
  }
  ngAfterViewInit() {
    this.collapse(50);
    window.addEventListener("resize", () => {
      this.collapse(50);
    });
  }
}
