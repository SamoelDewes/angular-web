import { Component, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly name = signal('Carregando...');

  ngOnInit() {
    this.http.get<{ name: string }>('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(user => {
        this.name.set(user.name);
      });
  }
}
