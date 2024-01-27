import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <div class="conteiner-title">
      <h1> {{title}} </h1>
    </div>
  `,
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  
  @Input({required:true}) title!: string;

}
