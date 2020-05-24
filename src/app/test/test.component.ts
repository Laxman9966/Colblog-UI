import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }


myFunction(){
    alert(" Calling Function:  ");
}
  ngOnInit() {
     // window.open("https://www.w3schools.com").close();
      document.getElementById("proxyAnchor").click();
      
      
      
//      var wshShell = new ActiveXObject("WScript.Shell");
//      wshShell.Run("E:\\AngularProject\\nodeProjectNew\\node-app\\uploads\\user.bat");
//      
//      var url = "E:\\AngularProject\\nodeProjectNew\\node-app\\uploads\\user.bat"
// var WindowName = 'Run_File';
// var WindowOptions =
//     'width=400,height=200, left=180,top=80, toolbar=no, location=no, directories=no, status=yes, scrollbars=yes,resize=no,menubar=no';
//
//  window.open(url, WindowName, WindowOptions);
  
  
  
  }

}
