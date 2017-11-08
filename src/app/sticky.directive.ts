import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";

@Directive({
  selector: "[appSticky]"
})
export class StickyDirective implements OnInit {
  private element: HTMLElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {}
}
