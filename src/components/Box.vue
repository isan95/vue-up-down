<template>	
	<div id="box" class="box">
		<a href="/" class="image fit">
			<center>
				<img src="../assets/images/file-zip-fill.svg" style="width: 120px; height: 120px;" />
			</center>
		</a>
		<div class="inner">
			<h3>{{file.key}}</h3>
			<p>{{file.lastModified}}</p>
			<button @click="getDownloadUrl(file.key)" class="button fit" data-poptrox="youtube,800x400">Descargar</button>
		</div>
	</div> 
</template>

<script>
	import FileService from '../services/file.service';
	export default {
		name: 'Box',
		data(){
			return {
				file_name: String,
				post_date: Date
			}
		},
		props: ['file'],

		methods: {

			getDownloadUrl(fileKey){

				return FileService.downloadFile(fileKey)
				.then(response=>{

					let blob = new Blob([response.data]);
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');

					//let filename = response.headers.get('Content-disposition').split('filename=')[1];

					a.style.display = 'none';

					a.href = url;
					a.setAttribute('Descargar', '*.*')
					document.body.appendChild(a);
					a.download = fileKey;
					a.click();

					document.body.removeChild(a);
					window.URL.revokeObjectURL(url);

				});
			
			}
		}
			
	}

</script>