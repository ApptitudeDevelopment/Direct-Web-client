export default {
    palette: {
      primary: {
        light: '#ff7893',
        main: '#ee4266',
        dark: '#b6003c',
        contrastText: '#fff',
      },
      secondary: {
        light: '#aaffff',
        main: '#75dddd',
        dark: '#3eabab',
        contrastText: '#fff',
      }
    },
    spreadThis: {
      typography: {
        useNextVariants: true
      },
      form: {
        textAlign: 'center'
      },
      image: {
        margin: '20px auto 20px auto',
        height: '100px'
      },
      pageTitle: {
        margin: '10px auto 20px auto'
      },
      textField: {
        margin: '10px auto 20px auto'
      },
      button: {
        marginTop: 20,
        position: 'relative'
      },
      customError: {
        color: '#b6003c',
        fontSize: '0.8rem',
        marginTop: '10px'
      },
      progress: {
        position: 'absolute'
      },
      invisibleSeparator: {
        border: 'none',
        margin: 4
      },
      visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 20
      },
      paper: {
        padding: 20
      },
      profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#ef5350'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px 10px'
        }
      },
      call: {
        fontSize: '0.8rem'
      }
  }
};