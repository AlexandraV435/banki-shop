<template>
  <div>
    <p class="name">{{ name }}</p>
    <MyModal v-if="is_visible" @closePopup="closePopupInfo" :pict='pict' class="my__modal">
    </MyModal>
    <div class="main">
      <div v-for="(picture, index) in pictures" :key="index" class="wrapper__pictures">
        <div v-if="picture.in_stok">
          <img :src='picture.image' alt="" @click="showPopupInfo(index)">
          <div>
            <div class="description">
              <p @click="showPopupInfo(index)">«{{ picture.name }}»</p>
              <p>{{ picture.author }}</p>
            </div>
            <div class="wrapper__price">
              <div class="price">
                <p>{{ picture.withon_discount }}</p>
                <p>{{ picture.price }}</p>
              </div>
              <button :class="picture.btn_class" @click="change_status(picture.button_status, picture.name)">{{picture.button_status}}</button>  
            </div>
          </div>        
        </div>
        <div v-else class="sold__picture">
          <div class="foreground"></div>
          <img :src='picture.image' alt="">
          <div class="desc">
            <p>«{{ picture.name }}»</p>
            <p>{{ picture.author }}</p>
          </div>
          <p class="status">Продана на аукционе</p>            

        </div>
      </div>      
    </div>
    
  </div>
</template>

<script>
import MyModal from './MyModal';
  export default {
    props: ['pictures', 'name'],
    data: () => ({
      is_visible: false,
      pict: [],
  }),
  components: {
    MyModal,
  },
  methods: {
    change_status(value, name) {
      this.$emit('change_status', {
        button_status: value,
        name: name,
      })
    },
    showPopupInfo(index) {
      this.is_visible = true
      for (let key in this.pictures) {
        if (key == index) {
          this.pict = this.pictures[key]
        }
      }
      console.log(this.pict)
    },
    closePopupInfo() {
      this.is_visible = false
    }
  },
}
</script>

<style sroped>
  @font-face {
    font-family: Merriweather;
    src: url(./styles/fonts/Merriweather/Merriweather-Regular.ttf);
  }
  @font-face {
    font-family: Merriweather-light;
    src: url(./styles/fonts/Merriweather/Merriweather-Light.ttf);
  }

  .name {
    font-family: Merriweather;
    font-size: 24px;
    font-weight: 700;
    margin-left: 10px
  }

  .wrapper__pictures {
    width: 280px;
    height: 328px;
    margin: 20px;
    float: left;
  }

  img {
    width: 280;
    height: 160px;
  }

  .main {
    display: flex;
  }

  button {
    border: none;
    min-width: 112px;
    height: 48px;
    color: rgba(244, 246, 249, 1);
    font-family: Merriweather;
    font-size: 14px;
    font-weight: 400;
  }

  .buy, .load {
    background: rgba(56, 46, 43, 1);
  }

  .backet {
    background: rgba(91, 58, 50, 1);
  }

  button:hover {
    background: rgba(119, 103, 99, 1);
    transition: 0.5s
  }

  button:disabled {
    background: rgba(193, 180, 177, 1);
  }

  .description p {
    font-family: Merriweather;
    font-size: 18px;
    color:rgba(52, 48, 48, 1);
  }

  .description {
    margin: 24px;
    margin-top: 20px;
    line-height: 0.5
  }

  .wrapper__price {
    display: flex;
  }

  .price {
    margin-left: 24px;
    margin-right: 21px;
    line-height: 0.5
  }

  .wrapper__pictures {
    border: 1px solid rgba(231, 231, 231, 1);
  }

  p {
    font-family: Merriweather;
  }

  .price p:first-child {
    font-family: Merriweather-light;
    color: rgba(160, 160, 160, 1);
    font-size: 14px;
    text-decoration: line-through;
    font-weight: 200;
  }

  .status {
    font-size: 14px;
    font-weight: 700;
    margin-left: 24px;
    margin-top: 34px;
  }

  .desc{
    margin-left: 24px;
    margin-top: 20px;
    line-height: 0.5
  }

  .foreground {
    position: absolute;
    background: white;
    width: 280px;
    height: 328px;
    opacity: 0.6
  }

  .my__modal {
    text-align: center;
    margin-left: 30vw;
  }

  @media screen and (max-width: 1290px) {
    .wrapper__pictures {
    width: 230px;
    height: 298px;
    margin: 10px;
    float: left;
    }

    img {
    width: 230;
    height: 130px;
    }

    .foreground {
      width: 230px;
      height: 298px;
  }

  .price {
    margin-left: 10px;
    margin-right: 10px;
    line-height: 0.5

  }

  .description {
    margin: 10px;
    margin-top: 10px;
    line-height: 0.5
    }

  button {
    min-width: 102px;
    height: 45px;
    }
  }

  @media screen and (max-width: 1010px) {
    .main {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  .wrapper__pictures {
    width: 460px;
    height: 438px;
    margin: 20px;
    float: left;
    text-align: center;
  }
  .foreground {
    width: 460px;
    height: 438px;
  }

  img {
    width: 460px;
    height: 300px;
  }

  .my__modal {
    text-align: center;
    margin-left: 1vw;
  }

  .wrapper__price {
    margin-left: 140px
  }
}

</style>
