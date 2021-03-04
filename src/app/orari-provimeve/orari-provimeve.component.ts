import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orari-provimeve',
  templateUrl: './orari-provimeve.component.html',
  styleUrls: ['./orari-provimeve.component.css'],
})
export class OrariProvimeveComponent implements OnInit {
  constructor(private dataService: DataService) {}

  dega: string = '';
  viti: string = '';
  paraleli: string = '';

  degaSearchData: any[] = [
    'Bachelor në \"Informatikë\"'
  ];

  vitiSearchData: any[] = [1, 2, 3];

  paraleliSearchData: any[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  tableData: any[] = [];

  ngOnInit(): void {}

  getFilteredData() {
    this.dataService
      .getOrariProvimevePerStudentMeParams(this.viti, this.dega, this.paraleli)
      .subscribe(
        (data) => {
          console.log(data);
          this.tableData = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onChangeDega(degaValue) {
    this.dega = degaValue;
  }

  onChangeViti(vitiValue) {
    this.viti = vitiValue;
  }

  onChangeParaleli(paraleliValue) {
    this.paraleli = paraleliValue;
  }
}
