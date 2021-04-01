<template>
  <div class="upload">
    <div class="card">
      <div class="card-body">
        <form id="form-upload" @submit.prevent="upload()" enctype="multipart/form-data" >
          <div class="input-group">
            <div class="input-file">
              <input type="file" ref="file" name="my-file" multiple="multiple" />
            </div>
          </div>
          <div class="modal-footer input-group justify-content-between">
            <button class="btn btn-success">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Subir</span>
            </button>
            <button class="btn btn-danger" data-dismiss="modal">
              Cancelar
            </button>
            <!--
                   <div v-if="currentFile" class="progress">
              <div
                class="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                :aria-valuenow="uploadProgress"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: uploadProgress + '%' }"
              >
                
              </div>
            </div>
            -->
       
          </div>
        </form>
        <div class="alert alert-light" role="alert">{{ message }}</div>
      </div>
    </div>
  </div>
</template>
<script>
    import FileService from "../services/file.service";

        export default {
        name: 'Upload',
            data() {
                return {
                    loading : false,
                    message: ''
                };
            },
            methods: {
                /*selectFile(event) {
                    const file = event.target.files[0];
                    const formData = new FormData();
                    formData.append("my-file", file);
                    FileService.fileUpload(formData)
                    .then(response => {
                        this.message = response.data.message;
                        this.loading = false;
                        return this.message;
                        })
                        .catch(() => {
                        this.message = "Could not upload the file!";
                        this.loading = false;
                        });
                },*/

                upload() {
                    
                    this.loading = true; 
                    
                    FileService.fileUpload(this.$refs.file.files)
                        .then(response => {
                        this.message = response.data.message;
                        this.loading = false;
                        return this.message;
                        })
                        .catch(() => {
                        this.message = "Could not upload the file!";
                        this.loading = false;
                        });
                }
            },
        };
</script>
