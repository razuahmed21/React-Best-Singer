import React from "react";
import userData from "../../userData/users";
import { useState } from "react";
import Users from "../Users/Users";
import bg from '../../images/bg.jpg'

const Home = () => {
  const billboard = userData.slice(0, 9);
  const [users, setUsers] = useState(billboard);
  return (
      <div className="content-wrapper" style={{backgroundImage:`url(${bg})`}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {users.map(users => (
              <Users user={users}></Users>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
