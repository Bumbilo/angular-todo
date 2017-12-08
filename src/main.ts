import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Method start loads App (bootstrapModule for browser apps)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
