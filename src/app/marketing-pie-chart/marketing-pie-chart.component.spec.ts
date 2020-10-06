import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPieChartComponent } from './marketing-pie-chart.component';

describe('MarketingPieChartComponent', () => {
  let component: MarketingPieChartComponent;
  let fixture: ComponentFixture<MarketingPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
