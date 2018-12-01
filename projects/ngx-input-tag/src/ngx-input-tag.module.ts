import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgxInputTagComponent,
  formatter as tagFormatter
} from './ngx-input-tag.component';
import { NGX_INPUT_TAG_TAG_FORMATTER } from './ngx-input-tag.di-tokens';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxInputTagComponent],
  exports: [NgxInputTagComponent]
})
export class NgxInputTagModule {
  static forRoot(config = { tagFormatter }): ModuleWithProviders {
    return {
      ngModule: NgxInputTagModule,
      providers: [
        {
          provide: NGX_INPUT_TAG_TAG_FORMATTER,
          useValue: config.tagFormatter
        }
      ]
    };
  }
}
