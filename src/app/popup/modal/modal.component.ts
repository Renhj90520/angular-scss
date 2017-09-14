import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleOpenClose() {
    this.isOpen = !this.isOpen;
  }

}
