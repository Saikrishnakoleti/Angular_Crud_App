import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addUser: boolean = true;
  item = {};
  index: any;

  EmployeesData: any = [
    { empname: "Sai", id: 1, company: "Infosys", age: 25, disignation: "UI Developer" },
    { empname: "harry", id: 2, company: "Verizon", age: 26, disignation: "Java Developer" },
    { empname: "John", id: 3, company: "Qualcome", age: 27, disignation: ".Net Developer" },
    { empname: "Satwik", id: 4, company: "Tech Mahindra", age: 25, disignation: "JavaScript Developer" },
    { empname: "Ram", id: 5, company: "Wipro", age: 28, disignation: "Python Developer" }
  ]

  addEmp(emp) {
    this.EmployeesData.push(emp)
    this.item = {};
  }

  updateEmpData(update) {
    this.EmployeesData[this.index] = update;
    this.addUser = true;
    this.item = {};
  }
  editEmpData(useredit) {
    this.addUser = false;
    this.item = useredit;
  }
  deleteData(index) {
    this.EmployeesData.splice(index, 1)
  }


}
