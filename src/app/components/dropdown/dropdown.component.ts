import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { TweenLite } from 'gsap'
import { MenusInterface } from "src/app/app.component";
import * as _ from 'lodash'
@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements AfterViewInit, OnChanges, AfterViewChecked {
  @ViewChild('labelContainer') labelContainer: ElementRef;
  @Input() data: MenusInterface[];
  @Input() elements: any[];
  dataPass: MenusInterface[] = [];
  showContent = false;
  constructor(private cd: ChangeDetectorRef) {
  }
  ngAfterViewChecked() {
    this.dataPass = _.sortBy(this.data, (e) => e.id)
  }
  ngOnChanges(changes) {
    this.dataPass = _.sortBy(this.data, (e) => e.id)
  }
  ngAfterViewInit(): void {
    // console.log(this.data)
  }
  clickEvent() {
    this.showContent = !this.showContent;
  }
  mouseLeave() {
    this.showContent = false;
  }
}
