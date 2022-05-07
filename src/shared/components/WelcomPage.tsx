import { useReactMediaRecorder } from '../../MediaRecorder/MediaRecorder';
import { useDispatch } from 'react-redux';
import {
  errorNotice,
  successNotice } from '../redux/dialogs/actions/toastActions';
import axios from 'axios';

export default function WelcomPage() {
  const dispatch = useDispatch();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false, askPermissionOnMount: true });

  const onClick = async () => {
    // @ts-ignore
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    const audiofile = new File(
      [audioBlob],
      'audiofile.webm',
      { type: 'audio/wav' });
    const formData = new FormData();
    formData.append('file', audiofile);
    axios.post('http://0.0.0.0:8000/v1/arabic', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          dispatch(errorNotice(error.response));
        } else {
          dispatch(errorNotice(error.request));
        }
      });
    dispatch(successNotice('helllo world'));
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
            <audio src={ mediaBlobUrl } controls autoPlay />
          </div>
          <div>
            <button
              type='submit'
              className="btn btn-dark btn-large"
              onClick={ onClick }>
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
