import { Injectable } from '@angular/core';
import { unicodeMapping, replacementRules } from './mapping';

/**
 * Nepali Unicode Service
 *
 */
@Injectable({
  providedIn: 'root'
})

export class NgxNepaliUnicodeService {

  /**
   * Default Constructor
   */
  constructor() { }

  /**
   * Function that converts passed input text string into nepali unicode text
   * @param inputText Input Text 
   */
  public convertToUnicode(inputText: string): string {
    //Converted text to be returned
    let outputText: string;
    //Map each input text character
    outputText = inputText.toString().split('').map((key) => {
      return unicodeMapping[key] || key;
    }).join('');
    //Replace converted values
    replacementRules.forEach((rule) => {
      outputText = outputText.replace(new RegExp(rule[0], 'g'), rule[1]);
    });
    return outputText;
  }
}
