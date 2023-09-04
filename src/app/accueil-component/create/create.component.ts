import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/studentservice';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor (private studentService:StudentService)
  {

  }
public receive (form : NgForm)
{
  console.log(form.value);
  this.studentService.create(form.value).subscribe(data=>
    {console.log(data);}
    );
}
}
