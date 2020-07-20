import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable()

export class Utility {

  studentList: any =[{id : 101,
    firstName:  'Waqas',
    lastName:'Siddiqui' ,
    age: '26',
    department: 'CS'},
    {id : 102,
      firstName:  'Ahmed',
      lastName:'Tariq' ,
      age: '24',
      department: 'SE'},
    {id : 103,
        firstName:  'Marib',
        lastName:'Sultan' ,
        age: '25',
        department: 'ME'
       },{
        id : 104,
        firstName:  'Sharique',
        lastName:'Shahzad' ,
        age: '26',
        department: 'EE'
       },{
        id : 105,
        firstName:  'Khizar',
        lastName:'Naeem' ,
        age: '27',
        department: 'BBA'
       }];
  public stud : Student;
  setStudent(student: any){
    // tslint:disable-next-line: max-line-length
    this.studentList.push({id : null, firstName:  student.firstName, lastName:student.lastName , age: student.age, department: student.department});
    // this.studentList= tempStudentList;
    console.log( "ShowData",this.studentList);
  }
  getStudent(){
    return this.studentList;
  }
  updateStudent(student: Student, index: number){
    this.studentList[index] = student;
  }
  getSelectedStudent(id){
    let data = null;
     this.studentList.filter(function(item){
       if(item.id == id) {
          data=item;
          console.log(item);
           return;
       }
     });
    return data;
   }
}