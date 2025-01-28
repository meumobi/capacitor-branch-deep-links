import { Injectable } from '@angular/core';
import branch from 'branch-sdk';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeepLinkWebService {

  async init(): Promise<void> {
    try {
      const options = {};
      await new Promise<void>((resolve, reject) => {
        branch.init(environment.branch_key_live, options, (err, data) => {
          if (err) {
            console.error('Branch SDK initialization error:', err);
            reject(err);
          } else {
            console.log('Branch SDK initialized:', data);
            resolve();
          }
        });
      });
    } catch (error) {
      console.error('Error during Branch SDK initialization:', error);
      throw error;
    }
  }
  async link(): Promise<string|null> {
    try {
      const properties = {};
      const response = await new Promise<string|null>((resolve, reject) => {
        branch.link(properties, (err, link) => {
          if (err) {
            console.error('Error generating Branch short URL:', err);
            reject(err);
          } else {
            console.log('Branch short URL generated:', link);
            resolve(link);
          }
        });
      });
      return response;
    } catch (error) {
      console.error('Error generating Branch short URL:', error);
      throw error;
    }
  }
}
