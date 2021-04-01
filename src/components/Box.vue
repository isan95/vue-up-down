<template>	
	<div id="box" class="box">
		<a href="/" class="image fit" style="outline: 0px;">
			<center>
				<img src="../assets/images/file-zip-fill.svg" style="width: 120px; height: 120px;" />
			</center>
		</a>
		<div class="inner">
			<h6>{{file.name}}</h6>
			<p>{{file.experation_date}}</p>
			<button @click="getDownloadUrl(file.name)" class="button fit" data-poptrox="youtube,800x400" style="cursor: pointer; outline: 0px;">Descargar</button>
		</div>
	</div> 
</template>

<script>
	import FileService from '../services/file.service';
	export default {
		name: 'Box',
		data(){
			return {
				name: String,
				experation_date: Date
			}
		},
		props: ['file'],

		methods: {

			getDownloadUrl(name){

				return FileService.downloadFile(name)
				.then(response=>{

					let blob = new Blob([response.data]);
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');


					a.style.display = 'none';

					a.href = url;
					a.setAttribute('Descargar', '*.*')
					document.body.appendChild(a);
					a.download = name;
					a.click();

					document.body.removeChild(a);
					window.URL.revokeObjectURL(url);

				});
			
			}
		}
			
	}

</script>
<style scoped>
	
</style>