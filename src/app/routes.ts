
import { RouterModule, Routes } from '@angular/router';

import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES = [
    {path: 'directory', component: DirectoryComponent},
    {path: '', component: HomeComponent}
  ];
  

  export default RouterModule.forRoot(APP_ROUTES)
