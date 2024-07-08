import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../core/services/uploadService/upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  selectedFile: File | null = null;
  uploadMessage: string = '';
  imageSrc: string = '';
  progress: number = 0;
  isLoading: boolean = false;
  customerData: any = null;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {
    this.uploadService.getCustomerInfo().subscribe({
      next: (response) => {
        this.customerData = response;
      },
      error: (error) => {
        this.uploadMessage = 'Failed to get customer info: ' + error.message;
      },
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target?.files?.item(0);
    this.imageSrc = '';
    this.uploadMessage = '';

    if (this.selectedFile) {
      const file = this.selectedFile;
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrc = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onUpload() {
    this.uploadMessage = '';
    this.progress = 0;
    this.isLoading = true;

    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe({
        next: (response) => {
          this.uploadMessage =
            'File uploaded successfully. URL: ' + response.url;
          this.selectedFile = null;
        },
        error: (error) => {
          this.uploadMessage = 'Failed to upload file: ' + error.message;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.uploadMessage = 'No file selected';
    }
  }
}
