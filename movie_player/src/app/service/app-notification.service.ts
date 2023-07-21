import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppNotificationService {
  constructor(private toast: ToastrService) {}
  showError(e: any) {
    console.log(e);
    const message: string = e.error
      ? e.error.message
      : e.message || 'Something went wrong!';
    this.toast.error(message, 'Error', {
      timeOut: 1000,         
    });
  }
  showSuccess(message: string) {
    this.toast.success(message, 'Success', {
      timeOut: 1000,
    });
  }

  confirm(message: string, confirmCallback: () => void) {
    this.toast.warning(message, 'Confirm', {
      closeButton: true,
      timeOut: 10000, // Adjust the timeOut based on your needs
      onActivateTick: true,
    }).onTap.subscribe(() => {
      confirmCallback();
    });
  }
}
