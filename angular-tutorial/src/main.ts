import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/todo/app.module';
import { AppModule } from './app/basic/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
