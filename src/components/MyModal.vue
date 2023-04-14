<template>
  <div class="v-popup">
    <span>
      <i class="material-icons" @click="closePopup()">close</i>
    </span>
    <div class="slider">
      <img v-if="sliderActive == 1" :src="pict.image" alt="1">
      <img v-else-if="sliderActive == 2" alt="Здесь вторая картинка"> 
      <!-- Если бы эти картинки были, то брались бы из pict.image_2 -->
      <img v-else alt="Здесь третья картинка">
      <i class="material-icons arrow__back" @click="sliderActiveMinus()">arrow_back_ios</i>
      <i class="material-icons arrow__forward" @click="sliderActivePlus()">arrow_forward_ios</i>
    </div>
    <div class="content">
      <p>«{{ pict.name }}»</p>
      <p>{{ pict.author }}</p>
      <p>{{ pict.price }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pict'],
    data: () => ({
      sliderAllCount: 3,
      sliderActive: 1,
    }),
    methods: {
      closePopup() {
        this.$emit('closePopup')
      },
      sliderActivePlus() {
        if (this.sliderActive < 3) {
          this.sliderActive = this.sliderActive + 1
        }
        console.log(this.sliderActive)
      },
      sliderActiveMinus() {
        if (this.sliderActive > 1) {
          this.sliderActive = this.sliderActive - 1
        }
        console.log(this.sliderActive)
      }
    }
  }

</script>

<style scope>
  @font-face {
    font-family: Merriweather;
    src: url(./styles/fonts/Merriweather/Merriweather-Regular.ttf);
  }
  .v-popup {
    z-index: 10;
    position: fixed;
    background: white;
    width: 320px;
    border: 1px solid rgba(225, 225, 225, 1);
    align-content: center;
    padding: 20px;
    box-shadow: 4px 6px 45px 46px rgba(0, 0, 0, 0.2);
  }

  i {
    margin: 0 0 10px 0;
    float: left;
  }

  p {
   font-family: Merriweather;
   line-height: 0.5
  }

  img {
    width: 280;
    height: 160px;
  }

  .content {
    margin-top: 20px;
    margin-left: 14px
  }

  .arrow__forward {
    position: relative;
    float: right;
  }

  .arrow__forward, .arrow__back {
    margin-top: 10px
  }

  @media screen and (max-width: 1010px) {
    .v-popup {
      /* width: 500px; */
      padding: 50px;
    }
}

@media screen and (max-width: 1290px) {
      .v-popup {
      width: 500px;
      padding: 20px;
    }
}

</style>