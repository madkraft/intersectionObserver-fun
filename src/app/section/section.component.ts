import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SectionComponent implements OnInit {
  @HostBinding("attr.class") class = "node";
  @Input() sectionTitle: string;
  @Input() threshold: number = 1;
  @Output() visibilityChanged: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const options = {
      threshold: this.threshold
    };

    const io = new IntersectionObserver(entries => {
      let visible: boolean;
      if (entries[0].intersectionRatio >= this.threshold) {
        visible = true;
      } else {
        visible = false;
      }

      this.visibilityChanged.emit({
        visible,
        section: this.sectionTitle
      });
    }, options);

    io.observe(this.el.nativeElement);
  }
}
