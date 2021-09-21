import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../@core/filter.pipe';


//ng-zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
    declarations: [FilterPipe],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        NzTableModule,
        NzModalModule,
        BrowserModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule,
        NzSpinModule,
        
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        NzTableModule,
        NzModalModule,
        BrowserModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule,
        NzSpinModule,
        FilterPipe
    ]
})

export class SharedModule { }