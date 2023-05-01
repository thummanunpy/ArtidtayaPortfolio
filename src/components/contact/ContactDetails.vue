<script>
import '@lottiefiles/lottie-player';
import feather from 'feather-icons';
import emailjs from 'emailjs-com';
export default {
	props: ['contacts'],
	data: () => {
		return {
      isSend:true,
      isActiveSubmitButton:false,
      name:"",
      email:"",
      phone:"",
      message:""
    };
	},
  mounted() {
		feather.replace();
    emailjs.init('SSK0mPWrP4OwIeocB')
	},
	updated() {
		feather.replace();
	},
  computed:{
    isActive() {
      if(this.name !== "" && this.email !== "" && this.phone !== "" && this.message !== ""){
        return false;
      }else{
        return true;
      }
    },
  },
  methods: {
    sendEmail() {
      const player = document.querySelector("lottie-player");
      const popup = document.getElementById('popUp');
      try {
        emailjs.send("service_mlehulm","template_x4ms38l",
         {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      popup.classList.remove('hidden');
      player.play();
      setTimeout(function() {
        popup.classList.add('hidden');
      }, 4000);
      this.name = ''
      this.email = ''
      this.message = ''
      this.phone = ''
    },
    
  }
};
</script>

<template>
  <div class="w-screen">
		<div class="">
			<h1
				class="font-general-medium font-bold text-center text-4xl text-primary-dark mt-12 mb-6 mx-14"
			>
        Contact Me
			</h1>
			<h2
				class="font-general-medium text-xl text-gray-500 mb-12 mx-10"
			>
				Any question or remarks? Just write a message!
			</h2>
      <div class="2xl:flex 2xl:justify-center">
      <!-- COMPONENT CODE -->
        <div class="2xl:w-4/6 my-4 px-4 lg:mx-12 xl:mx-20 2xl:mx-54">
          <div class="flex flex-col md:flex-row p-2 md:pr-8 rounded-md shadow-md">
            <div class="w-full md:w-2/4 xl:w-2/5">
              <div class=" px-1 sm:px-12 md:px-12 pb-10 md:pb-10 rounded-md bg-indigo-700">
                  <h2 class="font-general-medium text-xl md:text-2xl text-white text-center md:text-left pt-5 pb-3">
                    Contact Infomation
                  </h2>
                  <p class="text-gray-400 text-center md:text-left mx-5 md:mx-0 mt-5">
                    Fill up the form and me will get back to within 24 hours
                  </p>
                  <div class="flex flex-row align-bottom px-5">
                    <i
                        data-feather="phone"
                        class="mt-5 md:mt-16 w-10 text-white"
                      >
                    </i>
                    <h2 class="font-general-medium text-white text-left xl:text-md 2xl:text-lg mt-4 md:mt-14 ml-10">
                      +66 64098865
                    </h2>
                  </div>
                  <div class="flex flex-row align-bottom px-5 ">
                    <i
                        data-feather="mail"
                        class="mt-5 md:mt-16 w-10 text-white"
                      >
                    </i>
                    <h2 class="font-general-medium text-white text-left text-md mt-5 md:mt-16 ml-10">
                      thummanunpy@gmail.com
                    </h2>
                  </div>
                  <div class="flex flex-row align-bottom px-5">
                    <i
                      data-feather="map-pin"
                      class="mt-5 md:mt-16 w-10 text-white"
                      >
                    </i>
                    <h2 class="font-general-medium text-white text-left text-lg mt-5 md:mt-14 ml-10">
                      Huaikhang, Bangkok, Thailand
                    </h2>
                  </div>
                  <div class="flex flex-row align-bottom px-5 mt-14 md:mt-28">
                    <a href="https://www.linkedin.com/in/artidtaya-suwanwarich-a35a99227/" target="_blank">
                    <i
                      data-feather="linkedin"
                      class=" w-10 text-white hover:text-rose-600 "
                      >
                    </i>
                    </a>
                    <i
                      data-feather="facebook"
                      class="ml-2 w-10 text-white hover:text-rose-700"
                      >
                    </i>
                  </div>
              </div>
            </div>
            <form class="w-full md:w-2/4 xl:w-3/5 mt-5 md:pl-10">
              <div class="flex flex-col ">
                <div class="form-control">
                  <label class="label">
                    <span class="font-general-medium">Name</span>
                  </label>
                  <input type="text" v-model="name" name="name" placeholder="Enter your first name" class="input input-bordered w-full text-md" required/>
                </div>
              </div>
              <div class="flex flex-col xl:flex-row">
                <div class="form-control w-full xl:pr-10">
                  <label class="label">
                    <span class="font-general-medium ">Email</span>
                  </label>
                  <input type="email" v-model="email" id="email" placeholder="Enter your Email" class="input input-bordered w-full text-md" required/>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">Phone</span>
                  </label>
                  <input type="text" v-model="phone" placeholder="Enter your phone number" class="input input-bordered w-full text-md" required/>
                </div>
              </div>
              <div class="flex flex-row">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">Message</span>
                  </label>
                  <textarea name="message" v-model="message" placeholder="Message" class="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
              </div>
              <div class="flex flex-col md:flex-row">
                <button type="submit" id="play" class="btn btn-block btn-primary mt-5" :disabled="isActive" v-on:click="sendEmail" >Submit</button>
              </div>

            </form>
            </div>
        </div>
        <!-- COMPONENT CODE -->
        <div id="popUp" class="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <lottie-player autoplay loop id="firstLottie" src="https://assets4.lottiefiles.com/private_files/lf30_o0calpsv.json" ></lottie-player>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.hidden {
  opacity: 0;
  pointer-events: none;
}

@mixin size($point) {
  @if $point == lg-device {
    @media (min-width: 1024px) and (max-width: 1600px) {
      @content;
    }
  } @else if $point == md-device {
    @media (min-width: 768px) and (max-width: 1023px) {
      @content;
    }
  } @else if $point == sm-device {
    @media (max-width: 767px) {
      @content;
    }
  }
}
@font-face {
  font-family: "Material Icons Outlined";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v54/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2)
    format("woff2");
}

.material-icons-outlined {
  font-family: "Material Icons Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: sans-serif;
  font-size: 14px;
  color: #222;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #fff38f 50%, #095a54 50%);
  background-size: 100vw 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @include size(md-device) {
    align-items: baseline;
  }
  @include size(sm-device) {
    align-items: baseline;
  }
}

.contact_wrapper {
  display: flex;
  // align-items: center;
  background: white;
  padding: 40px 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  width: 700px;
  @include size(md-device) {
    width: 80%;
    flex-direction: column;
  }
  @include size(sm-device) {
    width: 90%;
    flex-direction: column;
    padding-top: 0px;
  }
  .contact_info {
    position: relative;
    width: 80%;
    flex: 0 0 230px;
    background: #095a54;
    color: #f6f6f6;
    margin-left: calc(-230px / 2 - 30px);
    padding: 25px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    @include size(md-device) {
      width: 100%;
      flex: 0 0 100%;
      margin-left: -50px;
      margin-top: -15px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    @include size(sm-device) {
      width: 100%;
      flex: 0 0 100%;
      margin-left: -25px;
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    .title {
      font-size: 24px;
      margin: 0px;
      font-weight: 400;
      margin-bottom: 30px;
    }
    .icons_wrapp {
      margin: 0px;
      padding: 0px;
      list-style: none;
      margin-bottom: 30px;
      li {
        display: flex;
        align-items: baseline;
        margin-bottom: 25px;
        .icon {
          .material-icons-outlined {
            vertical-align: middle;
            font-size: 24px;
            width: 32px;
          }
        }
        .text {
          vertical-align: middle;
          line-height: 1.4;
        }
      }
    }
    .soci_wrap {
      margin: 0px;
      padding: 0px;
      list-style: none;
      display: flex;
      position: absolute;
      bottom: 25px;
      li {
        margin: 0px 5px;
        a {
          color: #f4f4f4;
          text-decoration: none;
          transition: all 0.3s ease;
          &:hover {
            color: #fff38f;
          }
          .material-icons-outlined {
            font-size: 32px;
          }
        }
      }
    }
  }

  .contact_msg {
    width: calc(100% - 230px / 2 - 55px);
    flex: 0 0 calc(100% - 230px / 2 - 55px);
    padding: 25px 30px;
    padding-bottom: 0px;
    @include size(md-device) {
      width: calc(100% - 25px - 30px);
      flex: 0 0 calc(100% - 25px - 30px);
    }
    @include size(sm-device) {
      width: calc(100%);
      flex: 0 0 calc(100%);
      padding: 25px 0px;
    }
    .title {
      font-size: 24px;
      margin: 0px;
      font-weight: 400;
      margin-bottom: 30px;
      padding: 0 15px;
      color: #095a54;
    }
    .form_fild {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .input_group {
        position: relative;
        margin-bottom: 25px;
        padding: 0 15px;
        &.w_50 {
          width: calc(50% - 30px);
          flex: 0 0 calc(50% - 30px);
          @include size(sm-device) {
            width: calc(100% - 30px);
            flex: 0 0 calc(100% - 30px);
          }
        }
        &.w_100 {
          width: calc(100% - 30px);
          flex: 0 0 calc(100% - 30px);
        }

        .input {
          width: 100%;
          min-height: 30px;
          padding: 5px 0px;
          border: none;
          font-size: 18px;
          color: #444;
          outline: none;
          font-weight: 400;
          border-bottom: solid 2px #e9e9e9;
          &.input_textarea {
            min-width: 100%;
            min-height: 75px;
            max-height: 75px;
            max-width: 100%;
          }
          &:hover {
            border-bottom-color: #ddd;
          }
          &:focus {
            border-bottom-color: #aaa;
          }
          &:valid,
          &:focus {
            ~ .placeholder {
              top: -50px;
              font-size: 12px !important;
              color: #095a54;
              &.textarea {
                top: -12px;
              }
            }
          }
        }

        .placeholder {
          position: absolute;
          left: 15px;
          top: 0px;
          bottom: 0px;
          display: flex;
          align-items: center;
          font-size: 18px;
          color: #bbb;
          font-weight: 400;
          transition: all 0.3s ease;
          pointer-events: none;
          &.textarea {
            align-items: baseline;
          }
        }

        .btn {
          padding: 12px;
          border: none;
          border-radius: 0px;
          background-color: #095a54;
          color: white;
          min-width: 120px;
          outline: none;
          transition: all 0.3s ease;
          &:hover {
            background-color: #06423e;
          }
          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }
}
</style>
