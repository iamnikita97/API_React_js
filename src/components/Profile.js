import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Profile extends PureComponent {

    render() {
        /* After Login Display the Login User Name */
        const { history, loggedInUserData } = this.props;
        const { first_name } = loggedInUserData;
        const loginUserName = `${first_name}`.trim();
        return (

            (history) ?
                <div>
                    <p className="name_tag" > Hi, {loginUserName} </p>
                    {/* Logout Button */}
                    <Link to="/logout" className="btn btn-primary"><ExitToAppIcon /></Link >
                </div>
                :
                <div> </div>

        );
    }

}
export default withRouter(Profile);