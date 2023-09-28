import { TestBed } from '@angular/core/testing';

import { ProductosServices } from './producto.service';

describe('ProductoService', () => {
  let service: ProductosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
