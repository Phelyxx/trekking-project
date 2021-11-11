import { Component, OnInit } from '@angular/core';
import { Quotation } from '../quotation';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-quotation-listar',
  templateUrl: './quotation-listar.component.html',
  styleUrls: ['./quotation-listar.component.css']
})
export class QuotationListarComponent implements OnInit {

  quotations: Array<Quotation>;
  quotationSelected: Quotation;
  selected: boolean = false;

  constructor(private quotationService: QuotationService) {
  }

  getQuotations(): void {
    this.quotationService.getQuotations()
      .subscribe(quotations => {
        this.quotations = quotations;
        console.log(quotations);
      });
  }

  ngOnInit(): void {
    this.getQuotations();
  }

  onSelected(quotationSelected:Quotation): void{
    if (this.quotationSelected==quotationSelected && this.selected){
      this.selected=false;
    } else {
      this.selected=true;
      this.quotationSelected=quotationSelected;
    }
  }

}
