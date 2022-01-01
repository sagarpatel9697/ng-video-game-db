import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private mediaSubscription!: Subscription;
  private activeMediaQuery = '';
  constructor(
    private spinner: NgxSpinnerService,
    private mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    /** spinner starts on init */
    //this.spinner.show();
    /* setTimeout(() => {
      this.spinner.hide();
    }, 1000); */
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        change.forEach((item) => {
          this.activeMediaQuery = item
            ? `'${item.mqAlias}' = (${item.mediaQuery})`
            : '';
          if (item.mqAlias === 'xs') {
            this.loadMobileContent();
          }
          console.log('activeMediaQuery', this.activeMediaQuery);
        });
      });
  }

  loadMobileContent() {
    // Do something special since the viewport is currently
    // using mobile display sizes.
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }
}
