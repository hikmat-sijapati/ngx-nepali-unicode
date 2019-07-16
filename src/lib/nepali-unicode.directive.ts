import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxNepaliUnicodeService } from './ngx-nepali-unicode.service';

/**
 * Angular Directive for Nepali unicode
 *
 */
@Directive({
  selector: '[nepaliUnicode]'
})

export class NepaliUnicodeDirective {

   /**
   * FormControl to bind converted value on change
   *
   */
  @Input() public formControl: FormControl;

  /**
   * Default Constructor
   * @param nepaliUnicodeService 
   */
  constructor(private elementRef: ElementRef,private nepaliUnicodeService: NgxNepaliUnicodeService) { }

  /**
   * Handle element input element
   */
  @HostListener('input') oninput() {
    //Input text on element
    const inputText: string =  this.elementRef.nativeElement.value;
    if(!inputText)
      return;
    //Convert into Nepali unicode
    const convertedValue: string = this.nepaliUnicodeService.convertToUnicode(inputText);
    //Set Converted value
    this.elementRef.nativeElement.value = convertedValue;

    /**
     * Set value to passed formcontrol instance
     */
    if (this.formControl) {
      this.formControl.setValue(convertedValue);
    }
  }
}
