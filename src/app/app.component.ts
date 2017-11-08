import { Component, ViewChildren } from "@angular/core";
import { SectionComponent } from "./section/section.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentSection: any;
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
