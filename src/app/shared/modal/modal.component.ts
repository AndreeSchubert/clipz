import {Component, Input} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModalService]
})
export class ModalComponent {
@Input() modalID:string = '';

  constructor(public modal: ModalService) {
  }

  closeModal():void {
    this.modal.toggleModal(this.modalID);
  }
}
