import { Injectable } from "@angular/core";
import { Capacitor } from '@capacitor/core';
import { DeepLinkWebService } from "./deep-link-web.service";
import { DeepLinkNativeService } from "./deep-link-native.service";
import { BranchDeepLinks } from 'capacitor-branch-deep-links';

@Injectable({
  providedIn: 'root'
})
export abstract class DeepLinkService {
  abstract init(): Promise<void>;
  abstract link(): Promise<string>;
}

const deepLinkFactory = (webService: DeepLinkWebService, nativeService: DeepLinkNativeService) => {
  if (Capacitor.isNativePlatform()) {
    return nativeService;
  } else {
    return webService;
  }
};

export const DeepLinkServiceProvider = {
  provide: DeepLinkService,
  useFactory: deepLinkFactory,
  deps: [DeepLinkWebService, DeepLinkNativeService],
};