import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/_services'
import { User } from 'src/app/_models'

declare let $: any

@Component({ 
    selector: 'app-login-form',
    templateUrl: 'login-form.component.html' 
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup
    recoverPassForm: FormGroup
    registerForm: FormGroup

    loginSubmitted: boolean = false
    recoverPassSubmitted: boolean = false
    registerSubmitted: boolean = false

    categories = ['illustration', 'photography', 'watcher']
    returnUrl: string
    error: string = ''

    $divForms: any

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.initLoginFormValidator()
        this.initRecoverPassFormValidator()
        this.initRegisterFormValidator()
        this.formAnimationHandler()

        this.$divForms= $('#div-forms')
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    }

    initLoginFormValidator() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required, Validators.minLength(6)]
        })
    }

    initRecoverPassFormValidator() {
        this.recoverPassForm = this.formBuilder.group({
            emailToRecoverPass: ['', Validators.required]
        })
    }

    initRegisterFormValidator() {
        this.registerForm = this.formBuilder.group({
            emailToRegister: ['', Validators.required],
            passwordToRegister: ['', Validators.required],
            username: ['', Validators.required],
            fullname: ['', Validators.required],
            category: ['', Validators.required],
            birthday: ['', Validators.required]
        })
    }

    formAnimationHandler() {
        let $formLogin = $('#login-form')
        let $formRecoverPass = $('#recoverpass-form')
        let $formRegister = $('#register-form')
    
        $('#login_register_btn').click( () => { this._modalAnimation($formLogin, $formRegister) })
        $('#register_login_btn').click( () => { this._modalAnimation($formRegister, $formLogin) })
        $('#login_recoverpass_btn').click( () => { this._modalAnimation($formLogin, $formRecoverPass) })
        $('#recoverpass_login_btn').click( () => { this._modalAnimation($formRecoverPass, $formLogin) })
        $('#recoverpass_register_btn').click( () => { this._modalAnimation($formRecoverPass, $formRegister) })
        $('#register_recoverpass_btn').click( () => { this._modalAnimation($formRegister, $formRecoverPass) })
    }

    private _modalAnimation ($oldForm: any, $newForm: any) {
        let $oldH = $oldForm.height()
        let $newH = $newForm.height()
        const $modalAnimationTime = 300
        
        this.$divForms.css('height', $oldH)
        $oldForm.fadeToggle($modalAnimationTime, () => {
            this.$divForms.animate({height: $newH}, $modalAnimationTime, () => {
                $newForm.fadeToggle($modalAnimationTime)
            })
        })
    }

    private _changeMessagesOfLoginForm($divTag, $textTag, $divClass, $msgText) {
        this._fadeOutMessage($textTag, $msgText)
        
        if ($divClass === '') {
          $divTag.removeClass('error')
          $divTag.removeClass('success')
        }
        $divTag.addClass($divClass)
    }

    private _fadeOutMessage ($msgId, $msgText) {
        let $msgAnimateTime = 150
        $msgId.fadeOut($msgAnimateTime, () => {
          $($msgId).text($msgText).fadeIn($msgAnimateTime)
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls }
    get p() { return this.recoverPassForm.controls }
    get r() { return this.registerForm.controls }

    onSubmitLogin() {
        this.loginSubmitted = true

        if (this.loginForm.invalid) return

        this._authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl])
                    location.reload()
                },
                error => {
                    this.error = error
                })
    }

    onSubmitRecoverPass() {
        let form = (<HTMLInputElement>document.getElementById("recoverpass-form"))
        this.recoverPassSubmitted = true

        if (this.recoverPassForm.invalid) return

        this._changeMessagesOfLoginForm(
            $('#div-recoverpass-msg'), 
            $('#text-recoverpass-msg'), 
            "success", 
            "We have sent you an email with your password!!") 

        form.classList.add('was-validated')
        console.log('AQUI LLAMO AL SERVICIO QUE REALIZA LA PETICIÓN')
    }

    onSubmitRegister() {
        this.registerSubmitted = true

        if (this.registerForm.invalid) return

        let userToRegister = new User()
        userToRegister.email = this.registerForm.value['emailToRegister']
        userToRegister.password = this.registerForm.value['passwordToRegister']
        userToRegister.username = this.registerForm.value['username']
        userToRegister.fullname = this.registerForm.value['fullname']
        userToRegister.category = this.registerForm.value['category']
        userToRegister.birthday = this.registerForm.value['birthday']
        userToRegister.role = 'user'

        this._authenticationService.register(userToRegister)
    }
}