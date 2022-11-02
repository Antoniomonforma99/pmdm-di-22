import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/interfaces/actor-list';
import { ActorDetailService } from 'src/app/services/actor-detail.service';
import { ListActorsService } from 'src/app/services/list-actors.service';
import { environment } from 'src/environments/environment';
import { ActorDetailDialogComponent } from '../actor-detail-dialog/actor-detail-dialog.component';




@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {


  actorList: Actor[] = [];

  constructor(private actorService: ListActorsService,
    private actorDetailService: ActorDetailService, 
    public dialog: MatDialog) { }
  


  openDialog(actor: Actor): void {

    this.dialog.open(ActorDetailDialogComponent,{
      width: '300px',
      height: '600px',
      data : { actor : actor
    }
    });


  }

  ngOnInit(): void {
    this.getActorList();
  }

  getActorList(){
    this.actorService.getAll().subscribe(res => {
      this.actorList = res.results;
    })
  }

  getPhoto(actor: Actor){
    return `${environment.ACTOR_PHOTO_URL}${actor.profile_path}`
  }

}


