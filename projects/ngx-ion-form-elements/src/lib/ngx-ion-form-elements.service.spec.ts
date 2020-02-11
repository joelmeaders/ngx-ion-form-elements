import { TestBed } from '@angular/core/testing';

import { NgxIonFormElementsService } from './ngx-ion-form-elements.service';

describe('NgxIonFormElementsService', () => {
  let service: NgxIonFormElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIonFormElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
