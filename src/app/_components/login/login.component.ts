import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/_services'

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    loading: boolean = false
    submitted: boolean = false
    returnUrl: string
    error: string = ''

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.initLoginFormValidator()
        // reset login status
        this._authenticationService.logout()
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    }

    initLoginFormValidator() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls }

    onSubmit() {
        this.submitted = true

        if (this.loginForm.invalid)
            return

        this.loading = true
        this._authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data)
                    this.router.navigate([this.returnUrl])
                },
                error => {
                    this.error = error
                    this.loading = false
                })
    }
}