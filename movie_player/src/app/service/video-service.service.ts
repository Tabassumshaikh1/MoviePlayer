import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/env';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  constructor(private http: HttpClient) { }
  apiURL = environment.apiURL;
  postvideo(data: any) {
    return lastValueFrom(this.http.post(`${this.apiURL}movie/postvideo`, data))
  }
  getvideo() {
    return lastValueFrom(this.http.get(`${this.apiURL}movie/getvideo`))
  }
  getvideobyid(id:any) {
    return lastValueFrom(this.http.post(`${this.apiURL}movie/getvideobyid`,id))
  }
  deleteVideo(id:any){
    return lastValueFrom(this.http.post(`${this.apiURL}movie/deletevideobyid`,id))
  }
}
