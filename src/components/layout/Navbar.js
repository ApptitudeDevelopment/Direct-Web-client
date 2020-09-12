import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import MyButton from '../../util/MyButton';
import CreatePost from '../post/CreatePost';
import Notifications from './Notifications';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import withStyles from '@material-ui/core/styles/withStyles';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

// Redux
import {connect} from 'react-redux';

const styles = (theme) => ({
    ...theme.spreadThis,
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        left: '0%',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#ff7893',
        '&:hover': {
          backgroundColor: '#b6003c',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      }
})

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            errors: {}
        };
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const {authenticated, classes} = this.props;
        const {errors} = this.state;
        return (
            <AppBar>
                <Toolbar className="nav-container">
                {authenticated ? (
                        <Fragment>
                            <CreatePost/>
                            <Link to="/">
                            <MyButton tip="Home">
                                <HomeIcon/>
                            </MyButton>
                            </Link>
                            <Notifications/>
                            <div className={classes.search}>
                              <div className={classes.searchIcon}>
                                <SearchIcon 
                              />
                              </div>
                              <InputBase
                              placeholder="Search user..."
                              classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                              }}
                              inputProps={{ 'aria-label': 'search' }}
                              id="search" 
                              name="search" 
                              type="text" 
                              label="Search" 
                              helperText={errors.search} 
                              error={errors.search ? true : false} 
                              value={this.state.search} 
                              onChange={this.handleChange}
                              fullWidth
                              />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/signup">Signup</Button>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
};

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    userHandle: PropTypes.string
};

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
