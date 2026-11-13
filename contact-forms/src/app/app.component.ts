import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
    }
  }
}
