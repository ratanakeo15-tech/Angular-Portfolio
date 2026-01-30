import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Commonservice {
  viewAndDownloadFile() {
    return window.open("https://drive.google.com/file/d/1Y180bJJVLqgcBHW9k5o_RCmvQeuybJMi/view?usp=sharing", '_blank');
  }
}
