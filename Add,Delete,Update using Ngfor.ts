import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jai',
  templateUrl: './jai.component.html',
  styleUrls: ['./jai.component.css']
})
export class JaiComponent implements OnInit {
	
	Math:any;
	Science:any;
	Physics:any;
	Chemistry:any;
	English:any;
	ListAllValues = [];
  btnName='Add';
  EditIndex:number;

  	constructor() { }

  	ngOnInit() {
	}

  	submit() {
  		debugger;
      if(this.btnName == 'Add') {
        let obj = {
          'math':this.Math,
          'science':this.Science,
          'physics':this.Physics,
          'chemistry':this.Chemistry,
          'english':this.English
        }

        this.ListAllValues.push(obj);
        this.Math='';
        this.Science='';
        this.Physics='';
        this.Chemistry='';
        this.English='';
      } else if(this.btnName == 'Update') {
        this.ListAllValues[this.EditIndex].math = this.Math;
        this.ListAllValues[this.EditIndex].science = this.Science;
        this.ListAllValues[this.EditIndex].physics = this.Physics;
        this.ListAllValues[this.EditIndex].chemistry = this.Chemistry;
        this.ListAllValues[this.EditIndex].english = this.English;
        this.btnName = 'Add';
        this.Math='';
        this.Science='';
        this.Physics='';
        this.Chemistry='';
        this.English='';
      }
  		


  	}

    edit(index) {
      debugger;
      this.EditIndex=index;
      this.btnName='Update';
      this.Math = this.ListAllValues[index].math;
      this.Science = this.ListAllValues[index].science;
      this.Physics = this.ListAllValues[index].physics;
      this.Chemistry = this.ListAllValues[index].chemistry;
      this.English = this.ListAllValues[index].english;
    }

    delete(index) {
      this.ListAllValues.splice(index, 1);

    }

}
