<template>
  <v-app>
    <v-card color="grey darken-4" dark height="50px" tile>
      <v-content>
        <router-view></router-view>
      </v-content>

      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="grey darken-4"
        @click="toTop"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar flat color="grey darken-4">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-icon>mdi-music</v-icon>
          ElectroHits
        </v-toolbar-title>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" temporary dark>
        <v-layout mt-4 column align-center>
          <v-flex>
            <v-avatar color="blue">
              <span class="white--text headline">LF</span>
            </v-avatar>
          </v-flex>
          <v-flex>
            <p class="white--text mt-3 headline">Luis Flórez</p>
          </v-flex>
          <v-btn href="https://github.com/lflorj00/SIBI" target="_blank" text>
            <span class="mr-2">GitHub</span>
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            href="https://www.instagram.com/luisfj_98/"
            target="_blank"
            text
          >
            <span class="mr-2">Instagram</span>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn href="https://twitter.com/luisfj_98" target="_blank" text>
            <span class="mr-2">Twitter</span>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-layout>
      </v-navigation-drawer>

      <v-carousel
        cycle
        height="300"
        hide-delimiters
        show-arrows-on-hover
        alingn="center"
        justify="center"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slides.src"
          transition="fade-transition"
          :position="slide.position"
        >
          <v-row class="fill-height" align="center" justify="center"> </v-row>
        </v-carousel-item>
      </v-carousel>

      <v-container>
        <v-layout mt-4 column align-center wrap>
          <v-flex>
            <v-btn @click="can" color="blue" dark outlined>Canciones</v-btn>

            <v-btn @click="art" color="red" dark outlined>Artistas</v-btn>

            <v-btn @click="alb" color="green" dark outlined>Álbumes</v-btn>

            <v-btn @click="tulbi" color="orange" dark outlined>Recomendación</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <v-card class="mx-auto" v-if="tultul">
        <v-card-title
          >¿Que subgénero de música electrónica quieres escuchar?</v-card-title>
        <v-card-text>
          <v-row justify="space-around">
            <v-radio-group v-model="row" row>
              <v-radio label="House" value="House"></v-radio>
              <v-radio label="Deep House" value="Deep House"></v-radio>
              <v-radio
                label="Trance Progresivo"
                value="Trance Progresivo"
              ></v-radio>
              <v-radio label="Dubpstep" value="Dubpstep"></v-radio>
              <v-radio label="Dance" value="Dance"></v-radio>
              <v-radio label="Electro House" value="Electro House"></v-radio>
              <v-radio
                label="House Progrsivo"
                value="House Progresivo"
              ></v-radio>
            </v-radio-group>
          </v-row>
          <v-container>
            <v-layout mt-4 column align-center wrap>
              <v-btn @click="real" color="orange" outlined dark
                >Aleatorio</v-btn
              >
              <v-btn @click="reco" color="orange" outlined dark
                >Recomendar</v-btn
              >
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>

      <v-content v-if="this.buti2">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-text-field
            label="Canción"
            v-model="search"
            single-line
          ></v-text-field>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
              >
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>
                  Nombre: {{ item.name }}
                  <br />
                  Lanzamiento: {{ item.released }}
                  <br />
                  Duración: {{ item.duration }}
                  <br />
                  Album: {{ item.album }}
                  <br />
                  Número de pista: {{ item.trackNumber }}
                  <br />
                  Grupo: {{ item.group }}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti6">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
                min-width="200"
              >
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>
                  Año: {{ item.released }}
                  <br />
                  Duración: {{ item.duration }}
                  <br />
                  Número de pista: {{ item.trackNumber }}
                  <br />
                  Album: {{ item.album }}
                  <br />
                  Grupo: {{ item.group }}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti5">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in yarra" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
                min-width="200"
              >
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>
                  Mood: {{ item.mood }}
                  <br />
                  Grupo: {{ item.group }}
                  <br />
                  Duración: {{ item.duration }}
                  <br />
                  Número de pista: {{ item.trackNumber }}
                  <br />
                  Album: {{ item.album }}
                  <br />
                  Año: {{ item.released }}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti3">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-text-field
              label="Artistas"
              v-model="search"
              single-line
            ></v-text-field>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
              >
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>
                  Nombre: {{ item.name }}
                  <br />
                  Lugar de nacimiento: {{ item.from }}
                  <br />
                  Año de nacimiento: {{ item.born }}
                  <br />
                  Subgénero: {{ item.subgender }}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti4">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-text-field
              label="Álbumes"
              v-model="search"
              single-line
            ></v-text-field>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
              >
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>
                  Nombre: {{ item.name }}
                  <br />
                  Lanzamiento: {{ item.released }}
                  <br />
                  Grupo: {{ item.group }}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import App from "../App.vue";
export default {
  name: "Home",
  data: () => ({
    i: false,
    array: [],
    yarra: [],
    pras: "0",
    row: "Melancolia",
    buti2: false,
    buti3: false,
    buti4: false,
    buti5: false,
    buti6: false,
    tultul: false,
    fab: false,
    search: "",
    drawer: false,
    group: null,

    watch: {
      group() {
        this.drawer = false;
      },
    },

    return: {
      slides: [
        {
          src: "https://i.ytimg.com/vi/WKuaujIHBT4/maxresdefault.jpg",
        },
        {
          src:
            "https://i2.wp.com/www.knobstudio.com.mx/wp-content/uploads/2019/05/UMF-Bayfront.jpg?fit=2048%2C1152&ssl=1",
        },
        {
          src: "https://wallpapercave.com/wp/wp3770767.jpg",
        },
        {
          src:
            "https://betronicmusic.com/wp-content/uploads/2018/08/ultra-music-festival-video-youredm.jpg",
        },
      ],
    },
  }),

  methods: {
    tulbi() {
      this.tultul = true;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = false;
    },
    buscar() {
      this.array = [];
      var data = { name: this.search };
      this.$http.post("http://localhost:3000/bscr", data).then((response) => {
        if (response.body.length != 0) this.array = response.body;
        else {
          var error = [
            {
              name: "No se encontró ninguna coincidencia",
            },
          ];
          this.array = error;
        }
      });
    },

    reco() {
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = true;
      this.buti5 = false;
      //var last = "";
      var mood = this.row;
      //if (this.yarra.length != 0){
      //  last = this.yarra[this.yarra.length - 1].group;
      //}
      this.$vuetify.goTo(window.innerHeight);
      var data = { mood: mood };
      this.$http.post("http://localhost:3000/reco", data).then((response) => {
        this.yarra.push(response.body[0]);
        //alert(response.body);
      });
    },
    real() {
      //this.tultul = false;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = true;
      this.$http.get("http://localhost:3000/real").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    can() {
      this.tultul = false;
      this.buti2 = true;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = false;
      this.$http.get("http://localhost:3000/can").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    alb() {
      this.tultul = false;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = true;
      this.buti5 = false;
      this.buti6 = false;
      this.$http.get("http://localhost:3000/alb").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    art() {
      this.tultul = false;
      this.buti2 = false;
      this.buti3 = true;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = false;
      this.$http.get("http://localhost:3000/art").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
