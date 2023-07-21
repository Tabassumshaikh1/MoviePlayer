import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppNotificationService } from 'src/app/service/app-notification.service';
import { VideoServiceService } from 'src/app/service/video-service.service';

@Component({
  selector: 'app-seperatevideo',
  templateUrl: './seperatevideo.component.html',
  styleUrls: ['./seperatevideo.component.css'],
})
export class SeperatevideoComponent implements OnInit {
  constructor(
    private videoservice: VideoServiceService,
    private route: ActivatedRoute,
    private notifySvc: AppNotificationService,
    private router:Router
  ) {}
  public id: any;
  public data: any;
  ngOnInit(): void {
    this.getVideoById();
  }
  async getVideoById() {
    try {
      this.id = this.route.snapshot.paramMap.get('id');
      this.data = await this.videoservice.getvideobyid({ id: this.id });
    } catch (err) {
      this.notifySvc.showError(err);
    }
  }
  async deleteVideo(videoid:any){
   try{
    this.notifySvc.confirm('Are you sure you want to delete this video?', async () => {
      const res:any = await this.videoservice.deleteVideo({ id: videoid})
      this.notifySvc.showSuccess(`${res.message}`);
      this.router.navigate(['/']);
    });    
    } catch (err) {
      this.notifySvc.showError(err);
    }
  }
}
