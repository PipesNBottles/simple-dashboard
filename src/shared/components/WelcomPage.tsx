import { useDispatch } from 'react-redux';
import {
  errorNotice,
  successNotice } from '../redux/dialogs/actions/toastActions';
import axios from 'axios';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function WelcomPage() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [selectedFile, setSelectedFile] = useState<any>(null);

  const onClick = (data: any) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    // formData.append('file', selectedFile);
    // formData.append('word', name);
    axios.post('http://0.0.0.0:8000/v1/arabic', formData)
      .then((response) => {
        dispatch(successNotice(response.data.msg));
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          dispatch(errorNotice(error.response));
        } else {
          dispatch(errorNotice(error.request));
        }
      });
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="input-email">word</label>
          <input
            type="text"
            className="form-control"
            id="input-word"
            placeholder="Enter word"
            {...register('word', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3 mt-3">
          <label htmlFor="input-password">File</label>
          <input
            type="file"
            className="form-control"
            id="input-file"
            {...register('file', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3 mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit(onClick)}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
