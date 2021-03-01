import { Component, Input, OnInit } from "@angular/core";
import { MenusInterface } from "../../app.component";

@Component({
  selector: "app-collapsible",
  templateUrl: "./collapsible.component.html",
  styleUrls: ["./collapsible.component.scss"]
})
export class CollapsibleComponent implements OnInit {
  @Input() data: MenusInterface[];
  showContent = false;
  constructor() {}

  ngOnInit(): void {}
  clickEvent() {
    this.showContent = !this.showContent;
  }
  mouseLeave() {
    this.showContent = false;
  }
}
