import { TestBed } from '@angular/core/testing';

import { DocumentIndexerService } from './document-indexer.service';

describe('DocumentIndexerService', () => {
  let service: DocumentIndexerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentIndexerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
