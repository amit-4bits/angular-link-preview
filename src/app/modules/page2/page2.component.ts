import {Component, OnInit, Optional} from '@angular/core';
import {MetadataService} from '../../metadata.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(@Optional() private metadataService: MetadataService) { }

  ngOnInit(): void {
    this.metadataService.updateMetadata({
      title: 'SpaceJammit',
      description: 'This is Amit\'s content for spacejammit',
      imageRelativeUrl: 'https://source.unsplash.com/user/c_v_r/1900x800',
      keywords: ['page 2', 'content', 'angular universal'],
      type: 'article',
    });
  }

}
