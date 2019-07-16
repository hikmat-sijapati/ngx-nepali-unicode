import { Pipe, PipeTransform } from '@angular/core';
import { NgxNepaliUnicodeService } from './ngx-nepali-unicode.service';

/**
 * Angular pipe for Nepali uniocde
 *
 */
@Pipe({
  name: 'nepaliUnicode'
})

export class NepaliUnicodePipe implements PipeTransform {
  /**
   * Default Constructor
   * @param nepaliUnicodeService 
   */
  constructor(private nepaliUnicodeService: NgxNepaliUnicodeService) {}

  /**
   * Transform input text into nepali unicode
   * @param inputText 
   */
  transform(inputText: string): string {
    return inputText? this.nepaliUnicodeService.convertToUnicode(inputText): '';
  }

}
