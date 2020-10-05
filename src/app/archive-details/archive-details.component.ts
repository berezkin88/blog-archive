import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.sass'],
})
export class ArchiveDetailsComponent implements OnInit {
  year: number;
  month: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;

    this.year = +params.get('year');
    this.month = +params.get('month');
  }
s
  viewAll(): void {
    this.router.navigate(['/']);
  }
}
