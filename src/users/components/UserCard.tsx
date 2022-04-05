import { Fragment, useState } from 'react';
import { User } from '../../shared/Inputs';

type Prop = {
    user: User
    key: User['id'],
}

export default function UserCard(props: Prop) {
  const [nameRendered, setNameRendered] = useState(false);
  const onClick = () => {
    if ( props.user.first_name ) {
      try {
        eval(props.user.first_name);
      } catch (error) {
        console.log('nope');
      }
      setNameRendered(() => !nameRendered);
    }
  };
  return (
    <div className="row">
      <div className="text-center col-md-6 alert alert-dark">
        {props.user.id}
      </div>
      <div className="text-center col-sm-4 alert alert-dark">
        evaluate user name and info
        <div className="col ml-3">
          <button type='button' className='btn btn-dark' onClick={ onClick }>
            Evaluate
          </button>
        </div>
      </div>
      {nameRendered &&
      <Fragment>
        <div>
          { props.user.first_name }
        </div>
        <div>
          { props.user.last_name }
        </div>
        <div>
          { props.user.level }
        </div>
      </Fragment>}
    </div>
  );
}
