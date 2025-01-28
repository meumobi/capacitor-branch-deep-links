import { Component, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeepLinkServiceProvider, DeepLinkService } from './core/deep-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeepLinkServiceProvider],
})
export class AppComponent {
  title = 'mmb-demos.capacitor-branch-deep-links';
  shortUrl = signal<string>('');

  constructor(private deepLinkService: DeepLinkService) {
    this.initializeApp();
  }

  initializeApp() {
    this.deepLinkService
      .init()
      .then((data) => {
        console.log('Branch SDK initialized:', data);
      })
      .catch((error) => {
        console.error('Branch SDK initialization error:', error);
      });
  }

  onGenerateShortUrl() {
    this.deepLinkService
      .link()
      .then((link) => {
        this.shortUrl.set(link);
      })
      .catch((error) => {
        console.error('Error generating Branch short URL:', error);
      });
  }

  copyShortUrlToClipboard() {
    const url = this.shortUrl();
    navigator.clipboard.writeText(url).then(() => {
      alert('Copied to clipboard: ' + url);
    }).catch((error) => {
      console.error('Error copying to clipboard:', error);
    });
  }
}
