import { Component, input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qrcode',
  imports: [QRCodeComponent],
  template: `
  @if (!!url()) {
    <qrcode [qrdata]="url()" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
  }

  `,
  styles: ``
})
export class QrcodeComponent {
  url = input<string>('');
}
