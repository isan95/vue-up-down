<template>
  <div class="upload">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="upload">
          <div class="input-group">
            <div class="input-file">
              <input type="file" ref="file" @change="selectFile"/>
            </div>
          </div>
          <div class="modal-footer input-group justify-content-between">
            <button class="btn btn-success" :disabled="!selectedFiles">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Subir</span>
            </button>
            <button class="btn btn-danger" data-dismiss="modal">
              Cancelar
            </button>
            <div v-if="currentFile" class="progress">
              <div
                class="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                :aria-valuenow="uploadProgress"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: uploadProgress + '%' }"
              >
                {{ uploadProgress }}%
              </div>
            </div>
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
                    selectedFiles: undefined,
                    currentFile: undefined,
                    message: "",
                    uploadProgress: 0,
                    loading: false,

                    fileInfos: []
                };
            },
            methods: {
                selectFile() {
                    this.selectedFiles = this.$refs.file.files;
                },

                upload() {
                    this.uploadProgress = 0;
                    this.loading = true;
                    this.currentFile = this.selectedFiles.item(0);
                    FileService.fileUpload(this.currentFile, event => {
                      this.uploadProgress = Math.round((100 * event.loaded) / event.total);
                    })
                        .then(response => {
                        this.message = response.data.message;
                        this.loading = false;
                        return this.message;
                        })
                        .catch(() => {
                        this.uploadProgress = 0;
                        this.message = "Could not upload the file!";
                        this.loading = false;
                        this.currentFile = undefined;
                        });
                    this.selectedFiles = undefined;
                }
            },
        };
</script>
