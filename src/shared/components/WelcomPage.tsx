import { useReactMediaRecorder } from '../../MediaRecorder/MediaRecorder';
import { useDispatch } from 'react-redux';
import {
  errorNotice,
  successNotice } from '../redux/dialogs/actions/toastActions';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function WelcomPage() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      video: false,
      blobPropertyBag: {
        type: 'audio/wav',
      },
      mediaRecorderOptions: {
        mimeType: 'audio/wav',
      },
    });

  const onClick = async (data: any) => {
    // @ts-ignore
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    const audiofile = new File(
      [audioBlob],
      'audiofile.wav',
      { type: 'audio/wav' });
    const formData = new FormData();
    formData.append('file', audiofile);
    axios.post('http://0.0.0.0:8000/v1/arabic', formData, { params: { word: data.word } })
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
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <div>
            <p>{status}</p>
            <button
              className='btn btn-dark'
              onClick={startRecording}
            >
              Start Recording
            </button>
            <button
              className='btn btn-dark'
              onClick={stopRecording}
            >
              Stop Recording
            </button>
            <audio src={ mediaBlobUrl } controls />
          </div>
          <div>
            <form>
              <div className="form-row">
                <div className="form-group col-md">
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit(onClick)}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
