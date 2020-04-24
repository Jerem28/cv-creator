import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { async, TestBed } from '@angular/core/testing';

describe('SafeUrlPipe', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        providers: [
          {
            provide: DomSanitizer,
            useValue: {
                sanitize: () => 'safeString',
                bypassSecurityTrustHtml: () => 'safeString'
            }
          }
        ],
    })
    .compileComponents();
  }));

  it('create an instance', () => {
    const spySanitizer = jasmine.createSpyObj('spySanitizer', ['bypassSecurityTrustHtml']);
    const pipe = new SafeUrlPipe(spySanitizer);
    expect(pipe).toBeTruthy();
  });
});
