import {Component, HostListener} from '@angular/core';
import {GlobalContext} from "../assets/GlobalContext";
import {LANG, Locale} from "../assets/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'IMCAS\'s feedbacks';
  lang: Array<Locale> = LANG;
  isDisplayed: boolean = true;
  selectedLanguage: string = "";


  constructor(private globalContext: GlobalContext) {
    this.selectedLanguage = this.globalContext.getLang();
  }

  onModelChange() {
    this.globalContext.setLang(this.selectedLanguage);
    window.location.reload();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024 && this.globalContext.deviceIsMobile()) {
      this.globalContext.setDevice("desktop");
    } else if (window.innerWidth < 1024 && !this.globalContext.deviceIsMobile()) {
      this.globalContext.setDevice("mobile");
    }
  }
}
