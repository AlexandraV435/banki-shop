<template>
  <div id="app">
      <header>
        <div class="wrapp">
          <h5>Каталог</h5>
          <h5>Детали</h5>
          <h5>Оплата</h5>
          <h5>Контакты</h5>
          <h5>О компании</h5>          
        </div>

        <form>
          <input 
            placeholder="Поиск по названию картины"
            v-model="search_input"
            >
          <button type="button" @click="search()">Найти</button>
        </form>
      </header>
    <main>
      <Main_page class="main_page" :pictures='pictures' :name="name" @change_status="change_status"/>
    </main>
      
    <footer>
      <div>
        <h5>Каталог</h5>
        <h5>Детали</h5>
        <h5>Оплата</h5>
        <h5>Контакты</h5>
        <h5>О компании</h5>
      </div>
      <div class="contacts">
        <h5>+7 (812) 555-55-55</h5>
        <h5>г. Санкт-Петербург, ул. Ефимова, 3</h5>
      </div>
    </footer> 
  </div>
</template>

<script>
import Main_page from './components/Main_page';


export default {
  name: 'App',

  components: {
    Main_page,
  },
  localStorage: {},

  data: () => ({
    search_input: '',
    name: 'Картины эпохи возрождения',
    pictures: {
      birth_of_venus: {
        in_stok: true,
        name: 'Рождение Венеры',
        author: 'Сандро Боттичелли',
        price: '1 000 000 $',
        withon_discount: '2 000 000 $',
        image: './images/birth_of_venus.png',
        button_status: 'Купить',
        btn_class: 'buy',
        in_backet: false,
      },
      last_supper: {
        in_stok: true,
        name: 'Тайная Вечеря',
        author: 'Леонардо да Винчи',
        price: '3 000 000 $',
        withon_discount: '',
        image: './images/last_supper.png',
        button_status: 'Купить',
        in_backet: false,
        btn_class: 'buy'

      },
      adam: {
        in_stok: true,
        name: 'Сотворение Адама',
        author: 'Микеланджело',
        price: '5 000 000 $',
        withon_discount: '6 000 000 $',
        image: './images/adam.png',
        button_status: 'Купить',
        in_backet: false,
        btn_class: 'buy'


      },
      anatomy_lesson: {
        in_stok: false,
        name: 'Урок анатомии',
        author: 'Рембрандт',
        price: '',
        withon_discount: '',
        image: './images/anatomy_lesson.png',
        button_status: 'Купить',
        in_backet: false,
        btn_class: 'buy'

      }
    },
    obj: {}
  }),
  methods: {

    search() {
      if (this.search_input.length) {
      this.pictures = Object.fromEntries(
        Object.entries(this.pictures).filter(key => { return key[1].name.toLowerCase().startsWith(this.search_input.toLowerCase())})
      )        
    } else {
      return 
    }
  },
  change_status(data) {
    let val = data.name;
    for (let key in this.pictures) {
      if (this.pictures[key].name == val) {
        this.pictures[key].button_status = 'Обрабатывается';
        this.pictures[key].btn_class = 'load'

        this.pictures[key].in_backet = !this.pictures[key].in_backet;
        setTimeout(() => {
        if (this.pictures[key].in_backet) {
          this.pictures[key].button_status = 'В корзине'
          this.pictures[key].btn_class = 'backet'
        } else {
          this.pictures[key].button_status = 'Купить'
          this.pictures[key].btn_class = 'buy'
        }
        let objj = JSON.stringify(this.pictures)
        localStorage.setItem('obj', objj)
      }, 2000)
      }
    }
  },
  },
  mounted() {
    if (localStorage.length>0) {
    let obj2 = JSON.parse(localStorage.getItem('obj'))
    this.pictures = obj2
  }

  },
  
};
</script>

<style scoped>
@font-face {
  font-family: Merriweather;
  src: url(./components/styles/fonts/Merriweather/Merriweather-Regular.ttf);
  }

  #app {
    height: 100vh;
    width: 100vw;
  }
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    position: relative;
    display: flex;
    flex-direction: column;
  }

header div {
  display: flex;
}
  header , footer{
    min-height: 97px;
    height: auto;
    border-bottom: 1px solid rgba(225, 225, 225, 1);
    padding-left: 18%;
    padding-right: 20%;
    display: flex;
  }

  h5 {
    font-family: Merriweather;
    font-size: 14px;
    font-weight: 400;
    margin-right: 2.5vw;
    white-space: nowrap;
    margin-top: 37px;
  }

  form {
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 9vw;
    display: flex;
  }

  input, button {
    height: 48px;
  }

  input {
    border: 1px solid rgba(225, 225, 225, 1);
    width: 20vw;
    outline:none;
    padding: 16px;
  }

  input:focus {
    border: 1px solid rgba(181, 181, 181, 1);
     color: rgba(52, 48, 48, 1);
  }

  ::placeholder {
    color: rgba(159, 159, 159, 1)
  }

  input:focus::placeholder {
     color: rgba(52, 48, 48, 1);
  }

  button {
    background-color: rgba(64, 52, 50, 1);
    font-family: Merriweather;
    border: none;
    width: 122px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 700;
    }

  main {
    position: relative;
    margin: 0 auto;
    margin-top: 45px;
  }

  footer {
    border: none;
    position: fixed;
    background: rgba(236, 234, 234, 1);
    left: 0;
    bottom: 0;
  }

  footer div {
    display: flex;
  }

  footer div:nth-child(2n+2){
    margin-left: 9vw
  }
  .my_modal {
    margin: 50px;
  }

  @media screen and (max-width:1250px){
    footer {
      width: 100vw;
      flex-direction: column;
      box-sizing: content-box;
      padding-left: 0;
      padding-right: 0;
    }

  header {
    width: 100vw;
    box-sizing: content-box;
  }

  footer div:nth-child(2n+2){
    margin-left: auto;
    margin-right: auto;
  }

  footer div:first-child {
    margin-left: auto;
    margin-right: auto;
  }
  }

  @media screen and (max-width:1150px){
    header{
    padding-left: 10%;
    padding-right: 15%;
    display: flex;
    }
 
  }

  @media screen and (max-width:1000px){
    header{
    padding-left: 5%;
    flex-direction: column;
    position: relative;
    }

    form {
      margin-left: auto;
      margin-right: auto;
    }

    .wrapp {
      margin-left: auto;
      margin-right: auto;
    }

    .contacts {
      margin-left: 0;
      margin-right: auto;
    } 
  }
  
</style>