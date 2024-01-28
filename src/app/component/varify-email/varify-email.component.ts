import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrl: './varify-email.component.css'
})
export class VarifyEmailComponent implements OnInit{
  constructor(private auth : AuthService){
    
  }
  ngOnInit(): void {

    }
    
}
