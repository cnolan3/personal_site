import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { PostApiService } from './../../service/post-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  submitted = false;
  postForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private postApi: PostApiService
  ) { }

  ngOnInit(): void {
  }

  mainForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    })
  }

  get myForm() {
    return this.postForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.postForm.valid) {
      return false;
    } else {
      this.postApi.createPost(this.postForm.value).subscribe(
        (res) => {
          console.log('post created');
          this.ngZone.run(() => this.router.navigateByUrl('/post-list'))
        }, (error) => {
          console.log(error);
        }
      );
    }
  }

}
