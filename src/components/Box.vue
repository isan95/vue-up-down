<template>
  <div class="box">
    <div class="card">
      <div class="card-header bg-dark text-light">
        <h3 class="limited">{{ file.name }}</h3>
      </div>
      <div class="card-body bg-dark text-light">
        <p>{{ file.experation_date }}</p>
        <button
          @click="getDownloadUrl(file.name)"
          class="btn btn-outline-success"
          style="cursor: pointer; outline: 0px;"
        >
          Descargar
        </button>
      </div>
    </div>
  </div>

  <!--
    <div id="box" class="box bg-dark">
    <a href="/" class="image" style=" curso: pointer; outline: 0px;">
      <img src="../assets/images/file-zip-fill.svg" />
    </a>
    <div class="inner">
      <h6>{{ file.name }}</h6>
      <p>{{ file.experation_date }}</p>
      <button
        @click="getDownloadUrl(file.name)"
        class="button fit"
        data-poptrox="youtube,800x400"
        style="cursor: pointer; outline: 0px;"
      >
        Descargar
      </button>
    </div>:key="item.id
  </div>
  -->
</template>

<script>
import FileService from "../services/file.service";
export default {
  name: "Box",
  data() {
    return {
      name: String,
      experation_date: Date,
    };
  },
  props: ["file"],

  methods: {
    getDownloadUrl(name) {
      return FileService.downloadFile(name).then((response) => {
        let blob = new Blob([response.data]);
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");

        a.style.display = "none";

        a.href = url;
        a.setAttribute("Descargar", "*.*");
        document.body.appendChild(a);
        a.download = name;
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
    },
  },
};
</script>
<style scoped>
.limited {
  width: 200px;
  height: 20px;
  padding: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  transition: all 1s;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.limited:hover {
  width: 100%;
  white-space: initial;
  overflow: visible;
  cursor: pointer;
}
</style>
