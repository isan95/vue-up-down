import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://javaupdown-env.eba-i5cemnij.us-east-2.elasticbeanstalk.com/api/file/';

class FileService {
  
   
  fileUpload(file, uploadProgress) {

    let formData = new FormData();
    formData.append("file", file);

    return axios.post(API_URL + 'upload',  formData,
    { headers: authHeader(), 'Content-Type':'multipart/form-data' }, uploadProgress);
  }; 

  listFileUploaded(){

    return axios.get(API_URL + 'list',{ headers: authHeader()});
  };

 

  downloadFile(fileKey){
    return axios.get(API_URL+'download/'+fileKey, {headers: authHeader(), responseType: 'blob'});
    
  }
}

export default new FileService();