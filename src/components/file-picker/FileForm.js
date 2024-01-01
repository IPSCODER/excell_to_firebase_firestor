import React from 'react'
import {useState} from 'react'
import * as XLSX from 'xlsx'
import { db } from '../../firebase/Firebase'
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import classes from "./form.module.css"

const FileForm = () => {

    const [excelFile, setExcelFile]=useState(null);
    const [excelFileError, setExcelFileError]=useState(null);  
    const [excelData, setExcelData]=useState(null);

    const fileType=["application/vnd"];
    const handleFile = (e)=>{
      let selectedFile = e.target.files[0];
      if(selectedFile){
        console.log(selectedFile);
        // console.log(selectedFile.type);
        if(selectedFile&&selectedFile.type.includes(fileType)){
          let reader = new FileReader();
          reader.readAsArrayBuffer(selectedFile);
          reader.onload=(e)=>{
            setExcelFileError(null);
            setExcelFile(e.target.result);
          } 
        }
        else{
          setExcelFileError('Please select only excel file types');
          setExcelFile(null);
        }
      }
      else{
        console.log('plz select your file');
      }
    }




    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(excelFile!==null){
          const workbook = XLSX.read(excelFile,{type:'buffer'});
          const worksheetName = workbook.SheetNames[0];
          const worksheet=workbook.Sheets[worksheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          setExcelData(data);
              await setDoc(doc(db, "users", "Data"), {
            users: [...data],
          });
          window.location.reload();
        }
        else{
          setExcelData(null);
        }
        console.log(excelData);
      }




   
    
  return (
    <>
    <h4 style={{color:"#fff"}} >Upload Your Excell File To Firestore</h4>
    <br/>
    <form onSubmit={handleSubmit} className={classes.filePicker} >
        <input type='file' className='form-control'
          onChange={handleFile} required />
          {excelFileError&&<div className='text-danger' 
          style={{marginTop:5+'px', color:"red"}}>{excelFileError}</div>}
        <button type='submit' >Submit</button>
    </form>

          </>
  )
}

export default FileForm