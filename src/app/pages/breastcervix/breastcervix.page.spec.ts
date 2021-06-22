import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreastcervixPage } from './breastcervix.page';

describe('BreastcervixPage', () => {
  let component: BreastcervixPage;
  let fixture: ComponentFixture<BreastcervixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastcervixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreastcervixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
