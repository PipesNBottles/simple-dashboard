import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../shared/redux/selectors';
import { fetchUsers } from '../shared/redux/users/actions/getUsersAction';
import UserCard from './components/UserCard';


export default function AllUsers() {
  const dispatch = useDispatch();
  const users = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


  return (
    <div className='container'>
      <header className='mt-3 mb-3'>
        This is the page of all the users
      </header>
      <div className="row">
        <div className="col">
          {users.map((user) => <UserCard key={ user.id } user={ user }/>)}
        </div>
      </div>
    </div>
  );
}
