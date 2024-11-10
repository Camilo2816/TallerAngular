import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';  
import { SeriesService } from './series.service';  

@NgModule({
  declarations: [
    ListarSeriesComponent,  
  ],
  imports: [
    CommonModule  
  ],
  providers: [SeriesService],  
  exports: [ListarSeriesComponent]  // Exporta el componente aquí
})
export class SeriesModule { }
