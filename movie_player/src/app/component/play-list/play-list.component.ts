import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppNotificationService } from 'src/app/service/app-notification.service';
import { VideoServiceService } from 'src/app/service/video-service.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css'],
})
export class PlayListComponent implements OnInit {
  public data: any;
  constructor(
    private videoservice: VideoServiceService,
    private router: Router,
    private notifySvc: AppNotificationService
  ) {}
  ngOnInit(): void {
    this.getAllVideoList();
  }
  async getAllVideoList() {
    try {
      this.data = await this.videoservice.getvideo();
    } catch (err) {
      this.notifySvc.showError(err);
    }
  }
  playvideo(id: String) {
    this.router.navigate([`/seperate/${id}`]);
  }
}
