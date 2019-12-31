import { TestBed } from '@angular/core/testing';

import { MyCommentService } from './my-comment.service';

describe('MyCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCommentService = TestBed.get(MyCommentService);
    expect(service).toBeTruthy();
  });
});
