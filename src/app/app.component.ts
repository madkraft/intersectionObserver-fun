import { Component, ViewChildren } from "@angular/core";
import { SectionComponent } from "./section/section.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentSection: any;
  sectionsConf = [
    {
      label: "First",
      id: 1
    },
    {
      label: "Second",
      id: 2
    },
    {
      label: "Third",
      id: 3
    }
  ];

  cards = [
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum eos non maxime natus provident veritatis sequi.",
      image: "http://fillmurray.com/g/200/300",
      alt: "one"
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum eos non maxime natus provident veritatis sequi.",
      image: "http://fillmurray.com/g/300/300",
      alt: "two"
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum eos non maxime natus provident veritatis sequi.",
      image: "http://fillmurray.com/g/400/300",
      alt: "three"
    },
    {
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum eos non maxime natus provident veritatis sequi.",
      image: "http://fillmurray.com/g/500/300",
      alt: "four"
    }
  ];

  @ViewChildren(SectionComponent) sections: any;

  onVisibilityChanged(event) {
    if (event.visible) {
      this.currentSection = event.section;
    }
  }

  scrollToSection(selectedSection) {
    const res = this.sections.find(section => {
      return section.sectionTitle === selectedSection;
    });

    res.el.nativeElement.scrollIntoView(false);
    console.log(res);
  }
}
