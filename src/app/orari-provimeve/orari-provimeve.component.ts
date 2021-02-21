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

  //
  searchData: any[] = [
    { dega: 'Master Info', viti: '1', paraleli: 'B1' },
    { dega: 'Master Tik', viti: '2', paraleli: 'B122' },
    { dega: 'agron3', viti: 'shehu3', paraleli: 'B13' },
  ];

  degaSearchData: any[] = [
    'Master Info',
    'Master Tik',
    'Inxhinieri Matematike Dhe Informatike',
  ];

  vitiSearchData: any[] = [1, 2, 3];

  paraleliSearchData: any[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  tableData: any[] = [
    {
      data: '19 Mars 2021',
      ora: '9:00- 10:00',
      dega: 'Informatike',
      lenda: 'C++',
      vitiLenda: '2',
      vitiStudent: '2',
      paraleli: 'B1',
      klasa1: '301C',
      klasa2: '301C'
    }
  ];

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
