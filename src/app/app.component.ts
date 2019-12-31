import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-dream-app';
  submitted = false;
  rows = [];
  listComments: Comments[];
  listOfPosts: Posts[];
  objPost: Posts;
  flag: boolean;
  
  profileForm = new FormGroup({ 
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private _freeApiService: freeApiService) {   
   } 

  ngOnInit() {
    this.profileForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        body: ['', Validators.required],       
        userId: ['', Validators.required]
      });

       this._freeApiService.getComments().subscribe(
         data=> {
           this.listComments = data;
         }
       );

       this._freeApiService.getCommentsByParameter().subscribe(
        data=> {
          this.listOfPosts = data;
        }
      );

        
      this.fetchDataFromService((data: any[]) => {
        this.rows = data;
      });
}

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }else{
      var _post = new Posts();      
      _post.userId = this.profileForm.value.userId;
      _post.title = this.profileForm.value.title;      
      _post.body = this.profileForm.value.body;

      this._freeApiService.postService(_post).subscribe(
        data=> {
          this.objPost = data;
          this.flag = true;
          console.log("========="+ JSON.stringify(data));
        }
      );
    }

  }

  fetchDataFromService(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`); 
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };
 
    req.send();
  }

 

}
