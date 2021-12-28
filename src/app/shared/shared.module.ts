import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@NgModule({
  declarations: [SearchBarComponent, PageLoaderComponent],
  imports: [CommonModule, NgxSpinnerModule],
  exports: [SearchBarComponent, PageLoaderComponent],
})
export class SharedModule {}
