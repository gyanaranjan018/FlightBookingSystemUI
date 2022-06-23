import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookDetails, BookingResponse } from 'src/app/models/bookRequest';
import { Meals } from 'src/app/models/enums/enums';
import { BookingService } from 'src/app/services/booking.service';
import { MessageService } from 'src/app/services/message.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-booking-details-admin',
  templateUrl: './booking-details-admin.component.html'
})
export class BookingDetailsAdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private messageService: MessageService,
    private router: Router,
    private pdfService: PdfService
  ) {}

  id: string = '';
  details: BookDetails[] = [];
  booking: BookingResponse = {
    fromPlace: '',
    id: '',
    toPlace: '',
    userId: '',
    bookingDetails: this.details,
    email: '',
    name: '',
    noOfSeats: 0,
    status: '',
    flightType: '',
    discountPercent: 0,
    returnFlight: null,
    outBoundFlight: {
      airlineName: '',
      date: new Date(),
      flightNumber: '',
      logoPath: '',
      meals: Meals.None,
      price: 0,
    },
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.bookingService.getBookingDetailsAdmin(this.id).subscribe((data) => {
        this.booking = data;
      });
    });
  }

  loadingPdf = false;

  printPage(content: any) {
    this.loadingPdf = true;
    debugger;
    this.pdfService.SavePDF(content, 'ticket.pdf');
    this.loadingPdf = false;
  }

}
