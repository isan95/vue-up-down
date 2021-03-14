<template>
  <div class="home">
    <NavBar />
    <router-view />
    <div class="main">
      <div class="inner">
        <div class="thumbnails">
          <div v-for="file in fileList" :key="file.key">       
            <Box :file="file"/>        
          </div>   
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Upload from '@/components/Upload.vue';
import Box from '@/components/Box.vue';
import FileService from '../services/file.service';

export default {
  
  name: 'Home',
  data(){
    return {
      fileList: []
    };
  },
  mounted() {
    FileService.listFileUploaded().then(response => {
      this.fileList = response.data;
    });
  },
  components: {
    NavBar,
    Upload,
    Box
  }
}
</script>

<style scoped>

  /*thumbnails*/
  /*
  .thumbnails {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-align-items: stretch;
		-webkit-align-items: stretch;
		-ms-align-items: stretch;
		align-items: stretch;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

		.thumbnails .box {
			margin: 0 1em 2em 1em;
			width: 30%;
		}

			@media screen and (max-width: 1280px) {

				.thumbnails .box {
					width: 45%;
				}

			}

			@media screen and (max-width: 736px) {

				.thumbnails .box {
					width: 100%;
				}

			}
*/
  /*main*/
/*
  #main {
		padding: 4em 0 2em 0;
	}

		@media screen and (max-width: 736px) {

			#main {
				padding: 3em 0 1em 0;
			}

		}

		#main .inner {
			width: 90%;
			max-width: 80em;
			margin: 0 auto;
		}

			@media screen and (max-width: 480px) {

				#main .inner {
					width: 95%;
				}

			}
			*/
      /*Box */
	  /*  
    .box {
		border-radius: 4px;
		margin-bottom: 2em;
		background: #2c2c32;
		text-align: center;
	}

		.box > :last-child,
		.box > :last-child > :last-child,
		.box > :last-child > :last-child > :last-child {
			margin-bottom: 0;
		}

		.box .image.fit {
			margin: 0;
		}

		.box .image img {
			border-radius: 4px 4px 0 0;
		}

		.box .inner {
			padding: 1.5em;
			width: 100% !important;
		}

			@media screen and (max-width: 480px) {

				.box .inner {
					padding: 1em;
				}

			}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
		}
*/
</style>