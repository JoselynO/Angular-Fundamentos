import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked{
  
  constructor(){
    console.log("Constructor ejecutado Header")
  }
  ngAfterViewChecked(): void {
    console.log('gAfterViewChecked ejecutado.');
  }
  ngAfterContentChecked(): void {
    console.log('gAfterContentChecked ejecutado.');
  }
  ngDoCheck(): void {
    console.log('gDoCheck ejecutado.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('gOnChanges ejecutado.');
  }
  ngAfterViewInit(): void {
    console.log('gAfterViewInit ejecutado.');
  }
  ngOnDestroy(): void {
    console.log('gOnDestroy ejecutado.');
  }
  ngAfterContentInit(): void {
    console.log('gAfterContentInit ejecutado.');
  }
  ngOnInit(): void {
    console.log('ngOnInit ejecutado');
  }

}
