import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/source/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);