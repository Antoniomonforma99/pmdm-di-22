import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/interfaces/actor-list';
import { ActorDetailService } from 'src/app/services/actor-detail.service';
import { ListActorsService } from 'src/app/services/list-actors.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {


  actorList: Actor[] = [];
  actor: Actor | undefined;
  actorId : number | undefined;

  constructor(private actorService: ListActorsService, 
    private actorDetailService: ActorDetailService, 
    public dialog: MatDialog,
    private ruta: ActivatedRoute) { }
  

  getActor(){
    this.actorId = +this.ruta.snapshot.paramMap.get('person_id')!;
    this.actorDetailService.getById(this.actorId).subscribe(res => {
      this.actor = res.result;
    })
    

  }

  openDialog(): void {
    let actor  = this.getActor();
    let dialogRef = this.dialog.open(ActorDetailDialog,{
      width: '300px',
      height: '600px',
      data : { actor : actor
    }
    });
    console.log(actor);
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

@Component({
  selector: 'actor-detail-dialog',
  templateUrl: 'actor-detail-dialog.html'
})
export class ActorDetailDialog {

  actor: Actor | undefined;

  constructor(
    public dialogRef: MatDialogRef<ActorDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Actor,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
