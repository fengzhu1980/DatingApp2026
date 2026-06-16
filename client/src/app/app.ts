import { Component, inject } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { Router, RouterOutlet } from "@angular/router";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router = inject(Router);

  // async ngOnInit() {
    // this.http.get('https://localhost:5001/api/members').subscribe({
    //   next: response => this.members.set(response),
    //   error: error => console.log(error),
    //   complete: () => console.log('Completed the http request')
    // })
    // this.members.set(await this.getMembers());
  // }

  // async getMembers() {
  //   try {
  //     return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'));
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
}
