import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airport } from 'src/app/models/airport';
import { FlightList, FlightModel } from 'src/app/models/flightModel';
import { AirlineService } from 'src/app/services/airline.service';
import { AirportService } from 'src/app/services/airport.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
})
export class SearchFlightComponent implements OnInit {
  searchForm = this.formBuilder.group({
    toPlaceId: new FormControl('', Validators.required),
    fromPlaceId: new FormControl('', Validators.required),
    date: new FormControl('', Validators.compose([Validators.required])),
    flightType: 'Oneway',
    returnDate: '',
  });

  outboundFlight: FlightModel | null = null;
  returnFlight: FlightModel | null = null;

  flights: FlightList = { outboundFlights: [], returnFlights: [] };
  airports: Airport[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private airportService: AirportService,
    private airlineService: AirlineService,
    private messageService: MessageService,
    private router: Router
  ) {}

  submitted = false;

  ngOnInit(): void {
    this.airportService
      .getAirports()
      .subscribe((data) => (this.airports = data));

  }

  selectOutbound = (inventoryId: string) => {
    this.outboundFlight =
      this.flights.outboundFlights.find((x) => x.inventoryId === inventoryId) ||
      null;
  };

  selectReturn = (inventoryId: string) => {
    this.returnFlight =
      this.flights.returnFlights.find((x) => x.inventoryId === inventoryId) ||
      null;
  };

  bookWithReturn = () => {
    this.router.navigate(['/flight/book'], {
      state: {
        flightType: this.searchForm.value.flightType,
        outboundFlightId: this.outboundFlight?.inventoryId,
        date: this.searchForm.value.date,
        returnFlightId: this.returnFlight?.inventoryId,
        returnDate: this.searchForm.value.returnDate,
      },
    });
  };

  bookFlight = (inventoryId: string) => {
    this.router.navigate(['/flight/book'], {
      state: {
        flightType: this.searchForm.value.flightType,
        outboundFlightId: inventoryId,
        date: this.searchForm.value.date,
      },
    });
  };

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.valid) {
      const searchParam = this.searchForm.value;
      if (searchParam.flightType === 'Roundtrip') {
        if (searchParam.returnDate === '') {
          alert(
            'Return date is required in case of round trip'
          );
          return;
        }
        if (searchParam.returnDate <= searchParam.date) {
          alert('Return should be greater than the date');
          return;
        }
      }
      this.airlineService.searchFlight(searchParam).subscribe({
        next: (data) => {
          this.flights = data;
          this.outboundFlight = data.outboundFlights[0];
          if (searchParam.flightType === 'Roundtrip')
            this.returnFlight = data.returnFlights[0];
        },
        error: this.messageService.handleError,
      });
    }
  }
}