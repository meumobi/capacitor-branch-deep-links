import { Injectable } from '@angular/core';
import { BranchDeepLinks } from 'capacitor-branch-deep-links';

@Injectable({
  providedIn: 'root'
})
export class DeepLinkNativeService {

  async init(): Promise<void> {
    try {
      await BranchDeepLinks.addListener('init', (event: any) => {
        console.log('Branch SDK initialized:', event);
      });

      await BranchDeepLinks.addListener('initError', (error: any) => {
        console.error('Branch SDK initialization error:', error);
        throw error;
      });
    } catch (error) {
      console.error('Error during Branch SDK initialization:', error);
      throw error;
    }
  }

  async link(): Promise<string> {
    try {
      const options = {};
      const response = await BranchDeepLinks.generateShortUrl(options);
      return response.url;
    } catch (error) {
      console.error('Error generating Branch short URL:', error);
      throw error;
    }
  }
}
