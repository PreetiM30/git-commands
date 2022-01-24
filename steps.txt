step 1 : created static Html creation as per the design in app.component.html
step 2 : created 'todolist' componenent and added in app.component.html
step 3 : for total count to be calculated
         A) add onCreate() method in todolist.component.html 
            <button (click)="onCreate(myInput)">Create</button>

            and then create a method in todolist.component.ts

                onCreate(inpVal) {
                    this.count = this.count + 1; //on click, it should increase count by 1
                    alert(inpVal.value);
                }

         B) create a property of 'count' in todolist.componeent.ts with a default value of 0 in 
            todolist.component.ts

            count:number = 0;       

            then add this 'count' property in todolist.component.html to get dynamic value using interpolation and '*ngIf="count"' is used to hide the count if count=0 and as it increases to 1 it will show the count.

            <div class="count" *ngIf="count">Total Count : <b>{{count}}</b></div> 

step 4 : to get the value from input, using template reference variable

            // create a template reference in input '#myInput' in todolist.component.html file

            <input type="text" name="" id="" placeholder="Type here...." #myInput>
            
            //then pass in click event '(click)="onCreate(myInput)"', where as a parameter pass template reference variable in onCreate() method'#myInput' in todolist.component.html file

            <button (click)="onCreate(myInput)">Create</button> 
            
            //in todolist.component.ts file, where onCreate() method is written, add a parameter 'inpVal' and print that in console

            onCreate(inpVal) {
                console.log(inpVal.value);
            }

step 5 : to check whether the input field is blank or not. If input field is blank then count 
         should not be increased   

         create a 'if' condition under onCreate() method and check the length of input value field 
         'inpVal.value.length > 0'

         onCreate(inpVal) {
            if(inpVal.value.length > 0) {
            this.count = this.count + 1;
            alert(inpVal.value);
          }
        }

step 6 : whenever i create a todolist, it should be added in parent component using binding technique 
         by creating custom event (emit)     

         //create EventEmitter() instance in todolist.component.ts and also import them in same file

         @Output() inputEvent = new EventEmitter();

         import { Component, OnInit, Output, EventEmitter } from '@angular/core';


         //sending data to parent using emit() in 'onCreate(inpVal)' method in todolist.component.ts file 
            onCreate(inpVal) {
                if(inpVal.value.length > 0) {
                this.count = this.count + 1;
                // alert(inpVal.value);
                this.inputEvent.emit(inpVal.value); //will pass data to parent component
              }
            }

         //now add dynamic data to parent html file 'app.component.html' using ngFor 
         <li *ngFor="let user of users">

         //now will create a array of 'users' in app.component.ts file and will include 'user' in 
         app.component.html file using interpolation 

         <p>{{user}}</p> ---> app.component.html

         // now we need to bind the input field event '(inputEvent)' just to get the value of input field in
         app.component.html file
         <app-todolist (inputEvent)=""></app-todolist>

         // need to create a method 'pushUser' in '(inputEvent)', which will be declare in 
            app.component.ts file and whenever we bind custom event we uses '($event)' inside method 'pushUser'
         <app-todolist (inputEvent)="pushUser($event)"></app-todolist> --> app.component.html

         // now will create a method 'pushUser($event)' in app.component.ts
          pushUser(data) {
            this.users.push(data);
          }

step 7 : Delete functionality

         // create a click function and insert a method inside click function '(click)="onRemoveItem(i)"'
         in app.component.html file and also include 'index as i' for iteration

         <p (click)="onRemoveItem(i)">Remove</p>

         // create 'onRemoveItem(i)' method in app.component.ts file, where splice method is used for delete 
            functionality

           onRemoveItem(item) {
            this.users.splice(item, 1);
           }











   