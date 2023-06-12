import { Component, Input } from '@angular/core';
import { TrendsForYou } from 'src/app/interface/trends-for-you';

@Component({
  selector: 'app-trends-for-you-item [trendsForYou]',
  templateUrl: './trends-for-you-item.component.html',
  styleUrls: ['./trends-for-you-item.component.css']
})
export class TrendsForYouItemComponent {
  @Input() trendsForYou!:TrendsForYou;
}
