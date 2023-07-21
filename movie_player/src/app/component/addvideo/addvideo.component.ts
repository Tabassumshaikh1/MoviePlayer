import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppNotificationService } from 'src/app/service/app-notification.service';
import { VideoServiceService } from 'src/app/service/video-service.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css'],
})
export class AddvideoComponent {
  addVideoForm: FormGroup;
  constructor(
    private videoservice: VideoServiceService,
    private router: Router,
    private notifySvc: AppNotificationService
  ) {
    this.addVideoForm = new FormGroup({
      thumbnail: new FormControl('', [Validators.required]),
      video_url: new FormControl('', [Validators.required]),
    });
  }
  async sendData() {
    try {
      if (this.addVideoForm.invalid) {
        throw new Error('Please fill required fields');
      }
      const data = this.addVideoForm.value;
      const res: any = await this.videoservice.postvideo(data);
      this.notifySvc.showSuccess(`${res.message}`);
      this.router.navigate(['/']);
    } catch (err) {
      this.notifySvc.showError(err);
    }
  }
  get formdata() {
    return this.addVideoForm.controls;
  }
}
