import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const SEASONS_DATA: PeriodicElement[] = [
  {name: 'Spring 2014', symbol: '13-8-0'},
  {name: 'Fall 2014', symbol: '6-5-1'},
  {name: 'Spring 2015', symbol: '5-13-1'},
  {name: 'Fall 2015', symbol: '9-4-0'},
  {name: 'Spring 2016', symbol: '12-8-1'},
  {name: 'Fall 2016', symbol: '10-2-0'},
  {name: 'Spring 2017', symbol: '6-13-0'},
  {name: 'Fall 2017', symbol: '3-7-0'},
  {name: 'Spring 2018', symbol: '11-8-0'},
  {name: 'All Time', symbol: '225-210-8'},
];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],

  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]


})
export class TablesComponent implements OnInit {

  tables$: Object;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  seasonColumns: string[] = ['Season', 'Record'];
  dataSeasons = SEASONS_DATA;

 // dataSourceArray1 =  new MatTableDataSource(); //<===**NUANCE**. should be clearly mandated.
 // dataSourceArray2 =  new MatTableDataSource(); // <===**NUANCE**. should be clearly mandated.

  constructor() { }

  ngOnInit() {
  }

}
