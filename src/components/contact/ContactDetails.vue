<script>
import feather from 'feather-icons';
export default {
	props: ['contacts'],
	data: () => {
		return {};
	},
  mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
  <div class="w-screen h-screen bg-white">
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
      <div class="h-screen bg-white">
      <!-- COMPONENT CODE -->
        <div class="my-4 px-4 lg:px-96">
          <div class="flex p-2 rounded-md shadow-md">
            <div class="w-full w-2/6">
              <div class="md:px-12 pb-32 rounded-md bg-indigo-700">
                  <h2 class="font-general-medium text-2xl text-white text-left pt-5 pb-3">Contact Infomation</h2>
                  <p class="text-gray-400 text-left">Fill up the form and me will get back to within 24 hours</p>
                  <div class="flex flex-row align-bottom">
                    <i
                        data-feather="phone"
                        class="mt-16 w-10 text-white"
                      >
                    </i>
                    <h2 class="font-general-medium text-white text-left xl:text-md 2xl:text-lg mt-14 ml-16">
                      +6664098865
                    </h2>
                  </div>
                  <div class="flex flex-row align-bottom">
                    <i
                        data-feather="mail"
                        class="mt-16 w-10 text-white"
                      >
                    </i>
                    <h2 class="font-general-medium text-white text-left text-lg mt-14 ml-16">
                      thummanunpy@gmail.com
                    </h2>
                  </div>
                  <div class="flex flex-row align-bottom">
                    <i
                      data-feather="map-pin"
                      class="mt-16 w-10 text-white"
                      >
                    </i>
                    <h2 class="font-general-medium text-white text-left text-lg mt-14 ml-16">
                      Huaikhang Bangkok Thailand
                    </h2>
                  </div>
              </div>
            </div>
            <div class="w-full w-4/6 p-10">
              <div class="flex flex-row">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">First Name</span>
                  </label>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">Last Name</span>
                  </label>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">Mail</span>
                  </label>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">Phone</span>
                  </label>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="font-general-medium">Message</span>
                  </label>
                  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
              </div>

            </div>
            </div>
        </div>
        <!-- COMPONENT CODE -->
    </div>

</div>
</div>
</template>

<style lang="scss" scoped>
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
