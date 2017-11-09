import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
  @Input() currentSection: any;
  @Input() sections: any[];
  @Output() scrollToSection = new EventEmitter();
  @ViewChild("banner") bannerEl;
  @ViewChild("placeholder") placeholderEl;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const options = {
      threshold: 1
    };

    const io = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio >= options.threshold) {
        this.renderer.removeClass(this.bannerEl.nativeElement, "sticky");
      } else {
        this.renderer.addClass(this.bannerEl.nativeElement, "sticky");
      }
    }, options);

    io.observe(this.placeholderEl.nativeElement);
  }

  onButtonClick(section) {
    this.scrollToSection.emit(section);
  }
}
