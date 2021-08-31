import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { isDevMode } from '@angular/core';


if (environment.production) {
  enableProdMode();
}
export const isInDevMode = isDevMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  enableProdMode();