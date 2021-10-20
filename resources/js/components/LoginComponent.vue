<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-black" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" name="email" class="form-control form-control-lg" v-model="formData.email"/>
                <p class="text-danger" v-text="errors.emailError"></p>
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" name="password" class="form-control form-control-lg" v-model="formData.password" />
                <p class="text-danger" v-text="errors.passwordError"></p>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button @click="login" class="btn btn-outline btn-lg px-5">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data(){
    return{
      formData:{
        email:'',
        password: '',
        device_name: 'browser'
      },
      errors: {
        emailError: '',
        passwordError: ''
      }
    }
  },
  methods: {
    login(){
      axios.post('api/login', this.formData).then((response) => {

      }).catch((errors) => {
        if(errors.response.data.errors.email){
          this.errors.emailError = errors.response.data.errors.email[0]
        }
        if(errors.response.data.errors.password){
          this.errors.passwordError = errors.response.data.errors.password[0]
          
        }
          

      })
    }

  }
}
</script>