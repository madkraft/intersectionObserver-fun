import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLazyLoad]"
})
export class LazyLoadDirective implements AfterViewInit {
  @Input() src: string;
  @Input() alt: string;

  private io: any;
  private oldSrc: string;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.element.nativeElement.src = "http://via.placeholder.com/350x150";
    this.addIntersectionObserver();
  }

  private addIntersectionObserver() {
    if ("IntersectionObserver" in window && this.src !== null) {
      this.io = new IntersectionObserver(data => {
        if (data[0].intersectionRatio > 0.011) {
          console.log("load");
          this.handleImage();
          this.removeIntersectionObserver();
        }
      });

      this.io.observe(this.element.nativeElement);
    } else {
      setTimeout(() => {
        this.handleImage();
      }, 300);
    }
  }

  private removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  private handleImage() {
    const image: HTMLImageElement = this.element.nativeElement;
    image.src = this.src;
  }
}
