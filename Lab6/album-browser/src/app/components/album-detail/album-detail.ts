import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { Subject, takeUntil, timeout, catchError, of, retry } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  album: Album | null = null;
  loading = true;
  saving = false;
  editTitle = '';
  error: string | null = null;
  saveSuccess = false;
  albumId: number = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(this.albumId) || this.albumId <= 0) {
      this.error = 'Invalid album ID.';
      this.loading = false;
      return;
    }

    this.loadAlbum();
  }

  loadAlbum(): void {
    this.loading = true;
    this.error = null;

    this.albumService.getAlbum(this.albumId)
      .pipe(
        timeout(8000),
        retry(2),
        catchError((err) => {
          if (err.name === 'TimeoutError') {
            this.error = 'Request timed out. Please check your connection and try again.';
          } else {
            this.error = 'Failed to load album. Please try again.';
          }
          this.loading = false;
          return of(null);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        if (data) {
          this.album = data;
          this.editTitle = data.title;
        }
        this.loading = false;
      });
  }

  saveAlbum(): void {
    if (!this.album || !this.editTitle.trim()) return;

    this.saving = true;
    this.saveSuccess = false;

    const updated = { ...this.album, title: this.editTitle.trim() };

    this.albumService.updateAlbum(updated)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.album!.title = this.editTitle;
          this.saving = false;
          this.saveSuccess = true;
          setTimeout(() => this.saveSuccess = false, 3000);
        },
        error: (err) => {
          console.error('Error updating album', err);
          this.saving = false;
          this.error = 'Failed to save. Please try again.';
        }
      });
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album?.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}