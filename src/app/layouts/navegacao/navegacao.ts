import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  imports: [MatSidenavModule, MatIconModule, RouterModule],
  templateUrl: './navegacao.html',
  styleUrl: './navegacao.css',
})
export class Navegacao {}
