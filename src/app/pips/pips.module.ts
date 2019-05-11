import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonParsePipePipe } from './json-parse-pipe.pipe';

@NgModule({
  declarations: [JsonParsePipePipe],
  imports: [
    CommonModule
  ],
  exports: [JsonParsePipePipe]
})
export class PipsModule {
  static forRoot() {
    return {
        ngModule: PipsModule,
        providers: [],
    };
 }
}
