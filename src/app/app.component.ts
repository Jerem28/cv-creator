import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cv-creator';
  langInfo = 'fr';

  constructor(translate: TranslateService, lang: LangService) {
    translate.setDefaultLang(this.langInfo);
    lang.getValue().subscribe( (languageValue) => {
        translate.use(languageValue);
    });
  }
}