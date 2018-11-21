import { Component, OnInit } from '@angular/core';//import eg: date or filter

@Component({//metadata
  selector: 'app-dhananjaya',
  templateUrl: './dhananjaya.component.html',
  styleUrls: ['./dhananjaya.component.css']
})
export class DhananjayaComponent implements OnInit {//class portion
  telugu:any;
  english:any;
  maths:any;
  science:any;
  social:any;
  dj:any = [];
  teluguGrade:string;
  englishGrade:string;
  mathsGrade:string;
  scienceGrade:string;
  socialGrade:string;

  
constructor() { }

    ngOnInit() {
    }

  add(){
  	let jai = {
  		'telugu':this.telugu,
  		'engilsh':this.english,
  		'maths':this.maths,
  		'science':this.science,
  		'social':this.social
  	}
  	this.dj.push(jai);
  }
  teluguInput(value){
    	if(value >90 && value <=100) {
    		this.teluguGrade = 'S';
    	}
    	else if(value >80 && value <=90){
    		this.teluguGrade = 'A';
    	}
    	else if(value >70 && value <=80){
    		this.teluguGrade = 'B';
    	}
    	else if(value >60 && value <=70){
    		this.teluguGrade = 'C';
    	}
    	else if(value >50 && value <=60){
    		this.teluguGrade = 'D';
    	}
    	else if(value >=40 && value <=50){
    		this.teluguGrade = 'E';
    	}
    	else{
    		this.teluguGrade = 'F';
    	}
    }
    englishInput(value){
    	if(value >90 && value <=100) {
    		this.englishGrade = 'S';
    	}
    	else if(value >80 && value <=90){
    		this.englishGrade = 'A';
    	}
    	else if(value >70 && value <=80){
    		this.englishGrade = 'B';
    	}
    	else if(value >60 && value <=70){
    		this.englishGrade = 'C';
    	}
    	else if(value >50 && value <=60){
    		this.englishGrade = 'D';
    	}
    	else if(value >=40 && value <=50){
    		this.englishGrade = 'E';
    	}
    	else{
    		this.englishGrade = 'F';
    	}
    }
    mathsInput(value){
    	if(value >90 && value <=100) {
    		this.mathsGrade = 'S';
    	}
    	else if(value >80 && value <=90){
    		this.mathsGrade = 'A';
    	}
    	else if(value >70 && value <=80){
    		this.mathsGrade = 'B';
    	}
    	else if(value >60 && value <=70){
    		this.mathsGrade = 'C';
    	}
    	else if(value >50 && value <=60){
    		this.mathsGrade = 'D';
    	}
    	else if(value >=40 && value <=50){
    		this.mathsGrade = 'E';
    	}
    	else{
    		this.mathsGrade = 'F';
    	}
    }
    scienceInput(value){
    	if(value >90 && value <=100) {
    		this.scienceGrade = 'S';
    	}
    	else if(value >80 && value <=90){
    		this.scienceGrade = 'A';
    	}
    	else if(value >70 && value <=80){
    		this.scienceGrade = 'B';
    	}
    	else if(value >60 && value <=70){
    		this.scienceGrade = 'C';
    	}
    	else if(value >50 && value <=60){
    		this.scienceGrade = 'D';
    	}
    	else if(value >=40 && value <=50){
    		this.scienceGrade = 'E';
    	}
    	else{
    		this.scienceGrade = 'F';
    	}
    }
    socialInput(value){
    	if(value >90 && value <=100) {
    		this.socialGrade = 'S';
    	}
    	else if(value >80 && value <=90){
    		this.socialGrade = 'A';
    	}
    	else if(value >70 && value <=80){
    		this.socialGrade = 'B';
    	}
    	else if(value >60 && value <=70){
    		this.socialGrade = 'C';
    	}
    	else if(value >50 && value <=60){
    		this.socialGrade = 'D';
    	}
    	else if(value >=40 && value <=50){
    		this.socialGrade = 'E';
    	}
    	else{
    		this.socialGrade = 'F';
    	}
    }
}
