import { Component, OnInit } from '@angular/core';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubScription: any;
  positionSubscription: any;
  savePositionSubscription: any;

  position: Position;

  successMessage: boolean = false;
  failMessage: boolean = false;

  positionForm: FormGroup;

  constructor(private ps: PositionService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.paramSubScription = this.route.params.subscribe((params) => {
      this.positionSubscription = this.ps.getPosition(params['_id']).subscribe(data => {
        this.position = data[0];

        this.positionForm = this.fb.group ({
          PositionName: [this.position.PositionName, [Validators.required]],
          PositionDescription: [this.position.PositionDescription]
        })

      });
    });
  }

  onSubmit() {
    this.savePositionSubscription = this.ps.savePosition(this.position).subscribe(() => {
      this.successMessage = true;

      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    },(err) => {
      console.log("Subscription onSubmit failed " + err);
      this.failMessage = true;

      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    }); 
  }

  ngOnDestroy() {
    if (this.paramSubScription) { this.paramSubScription.unsubscribe(); }
    if (this.positionSubscription) { this.positionSubscription.unsubscribe(); }
    if (this.savePositionSubscription) { this.savePositionSubscription.unsubscribe(); }
  }
}
