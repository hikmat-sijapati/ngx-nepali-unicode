import { NgModule, ModuleWithProviders } from '@angular/core';
import { NepaliUnicodeDirective } from './nepali-unicode.directive';
import { NepaliUnicodePipe } from './nepali-unicode.pipe';

@NgModule({
  declarations: [NepaliUnicodeDirective, NepaliUnicodePipe],
  imports: [],
  exports: [NepaliUnicodeDirective, NepaliUnicodePipe]
})

/**
 * Ngx Nepali Unicode Module
 */
export class NgxNepaliUnicodeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNepaliUnicodeModule,
      providers: []
    };
  }
}
