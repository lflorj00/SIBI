<template>
  <v-main>
    <v-app style="background: grey-darken-4">
      <v-card>
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

        <v-app-bar absolute dense color="grey darken-4">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase white-text">
            <v-icon>mdi-music</v-icon>
            <span class="font-weight-light">Electro</span>
            <span>Hits</span>
          </v-toolbar-title>
        </v-app-bar>

        <v-img
          max-height="320"
          max-width="max-width"
          src="https://houseandujar.files.wordpress.com/2017/03/ultra-music-festival-video-youredm.jpg"
        ></v-img>

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

        <v-container>
          <v-layout mt-4 column align-center wrap>
            <v-flex xs12>
              <v-btn @click="can" color="blue" dark outlined rounded
                >Canciones</v-btn
              >

              <v-btn @click="art" color="red" dark outlined rounded
                >Artistas</v-btn
              >

              <v-btn @click="alb" color="green" dark outlined rounded
                >Álbumes</v-btn
              >
            </v-flex>
          </v-layout>
        </v-container>

        <v-container>
          <v-layout mt-4 column align-center wrap>
            <v-flex xs12>
              <v-autocomplete
                v-model="row"
                :items="items"
                dense
                rounded
                solo
                label="Subgenero"
              ></v-autocomplete>

              <v-btn @click="real" color="orange" outlined dark rounded
                >Aleatorio</v-btn
              >
              <v-btn @click="reco" color="orange" outlined dark rounded
                >Recomendar</v-btn
              >
               <v-btn @click="limpiar" color="orange" outlined dark rounded>Limpiar</v-btn>
            </v-flex>
          </v-layout>
        </v-container>

        <v-main v-if="this.buti2">
          <v-container grid-list-md text-xs-center fluid pa-12>
            <v-text-field
              label="Canción"
              single-line
              disabled
            ></v-text-field>
            <v-layout row wrap fill-height fill-width justify-center>
              <v-flex v-for="(item, index) in array" v-bind:key="index">
                <v-card elevation="18" shaped dark>
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-subtitle>
                    Lanzamiento: {{ item.released }}
                    <br />
                    Duración: {{ item.duration }}
                    <br />
                    Album: {{ item.album }}
                    <br />
                    Número de pista: {{ item.trackNumber }}
                    <br />
                    Grupo: {{ item.group }}
                    <br />
                    Subgenero: {{ item.subgender }}
                  </v-card-subtitle>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-main>

        <v-main v-if="this.buti6">
          <v-container grid-list-md text-xs-center fluid pa-12>
            <v-layout row wrap fill-height fill-width justify-center>
              <v-flex v-for="(item, index) in array" v-bind:key="index">
                <v-card elevation="18" shaped dark min-width="200">
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
        </v-main>

        <v-main v-if="this.buti5">
          <v-container grid-list-md text-xs-center fluid pa-12>
            <v-layout row wrap fill-height fill-width justify-center>
              <v-flex v-for="(item, index) in yarra" v-bind:key="index">
                <v-card elevation="18" shaped dark min-width="200">
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-subtitle>
                    Subgenero: {{ item.subgender }}
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
        </v-main>

        <v-main v-if="this.buti3">
          <v-container grid-list-md text-xs-center fluid pa-12>
              <v-text-field
                label="Artistas"
                v-model="search"
                single-line
                disabled
              ></v-text-field>
                <v-layout row wrap fill-height fill-width justify-center>
              <v-flex v-for="(item, index) in array" v-bind:key="index">
                <v-card elevation="18" shaped dark>
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-subtitle>
                    Nombre: {{ item.name }}
                    <br />
                    Lugar de nacimiento: {{ item.from }}
                    <br />
                    Año de nacimiento: {{ item.born }}
                  </v-card-subtitle>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-main>

        <v-main v-if="this.buti4">
          <v-container grid-list-md text-xs-center fluid pa-12>
              <v-text-field
                label="Álbumes"
                v-model="search"
                single-line
                disabled
              ></v-text-field>
               <v-layout row wrap fill-height fill-width justify-center>
              <v-flex v-for="(item, index) in array" v-bind:key="index">
                <v-card elevation="18" shaped dark>
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
        </v-main>
      </v-card>
    </v-app>
  </v-main>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    i: false,
    array: [],
    yarra: [],
    row: { type: Object, default: () => ({}) },
    buti2: false,
    buti3: false,
    buti4: false,
    buti5: false,
    buti6: false,
    fab: false,
    search: "",
    drawer: false,
    group: null,
    items: [
      "House",
      "Electro House",
      "Dance",
      "Deep House",
      "Trance progresivo",
      "Dubpstep",
      "House progresivo",
    ],
    watch: {
      group() {
        this.drawer = false;
      },
    },
    return: {},
  }),
  methods: {
      limpiar() {
      this.array = [];
      this.yarra = [];
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = false;
    },
    reco() {
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = true;
      this.buti6 = false;
      var subgender = this.row;
      this.$vuetify.goTo(window.innerHeight);
      var data = { subgender: subgender };
      this.$http.post("http://localhost:8000/reco", data).then((response) => {
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
      this.$http.get("http://localhost:8000/real").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    can() {
      this.buti2 = true;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = false;
      this.$http.get("http://localhost:8000/can").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    alb() {
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = true;
      this.buti5 = false;
      this.buti6 = false;
      this.$http.get("http://localhost:8000/alb").then((response) => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    art() {
      this.buti2 = false;
      this.buti3 = true;
      this.buti4 = false;
      this.buti5 = false;
      this.buti6 = false;
      this.$http.get("http://localhost:8000/art").then((response) => {
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