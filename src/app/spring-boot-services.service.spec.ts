import { TestBed } from '@angular/core/testing';

import { SpringBootServicesService } from './spring-boot-services.service';

describe('SpringBootServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringBootServicesService = TestBed.get(SpringBootServicesService);
    expect(service).toBeTruthy();
  });
});
