import { Component } from '@angular/core';
import { StudentService } from 'src/app/studentservice';

@Component({
  selector: 'app-readall',
  templateUrl: './readall.component.html',
  styleUrls: ['./readall.component.css']
})
export class ReadallComponent {
constructor(private studentService: StudentService )
{

}
public   readAll()
{
  alert("ok");
  this.studentService.getAll().subscribe(data=>{

    console.log(data);
  });
}
}
