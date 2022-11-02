import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActorDetailResponse } from 'src/app/interfaces/actor-detail';
import { Actor } from 'src/app/interfaces/actor-list';
import { ActorDetailService } from 'src/app/services/actor-detail.service';


@Component({
  selector: 'app-actor-detail-dialog',
  templateUrl: './actor-detail-dialog.component.html',
  styleUrls: ['./actor-detail-dialog.component.css']
})
export class ActorDetailDialogComponent {

  actorDetail: ActorDetailResponse = {} as ActorDetailResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      actorDetails: ActorDetailResponse,
      actor: Actor
    },
    private actorDetailservice: ActorDetailService
  ) {}
  
  ngOnInit(): void {
    this.getDetails(this.data.actor);
  }
  

  getDetails(actor: Actor): void {
    this.actorDetailservice.getById(actor.id).subscribe (res => {
      this.actorDetail = res;
    })
  }
}
