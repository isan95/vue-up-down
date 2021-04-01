import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/file/';

class FileService {
  
   
  fileUpload(files) {

    let formUpload = document.getElementById("form-upload");
    let formData = new FormData(formUpload);
    let file;
    for(var i=0; i<files.length ;i++){
      file = files[i];
      console.log(file);
      formData.append('file',file);
    }
    console.log(formData);
    return axios.post(API_URL + 'upload',  formData,
    { headers: authHeader(), 'Content-Type':'multipart/form-data' });
  }; 

  listFileUploaded(){

    return axios.get(API_URL + 'list',{ headers: authHeader()});
  };

 

  downloadFile(filename){
    return axios.get(API_URL+'download/'+filename, {headers: authHeader(), responseType: 'blob'});
    
  }
}

export default new FileService();