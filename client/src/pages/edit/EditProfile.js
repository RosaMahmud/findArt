import "./editProfile.css";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import React, {useEffect, useState} from 'react'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    title: {
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle
    },
    error: {
      verticalAlign: 'middle'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: 'auto'
    },
    input: {
      display: 'none'
    },
    filename:{
      marginLeft:'10px'
    }
  }))

function EditProfile() {

    const classes = useStyles()
  const [values, setValues] = useState({
    username: '',
    about: '',
    profilePicture: '',
    coverPicture:'',
    email: '',
    password: '',
    redirectToProfile: false,
    error: '',
    id: ''
  })

    return (
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h6" >
            Edit Profile
          </Typography>
          <Avatar  className={classes.bigAvatar} /><br/>
          <input  className="input" id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="default" component="span">
              Upload Profile Picture
              <FileUpload/>
            </Button>
            <Button variant="contained" color="default" component="span">
              Upload Cover Picture
              <FileUpload/>
            </Button>
          </label> <span></span><br/>
          <TextField className={classes.textField}  id="name" label="Name"  margin="normal"/><br/>
          <TextField className={classes.textField}
            id="multiline-flexible"
            label="About"
            multiline
            rows="2"
           
            margin="normal"
          /><br/>
          <TextField className={classes.textField} id="email" type="email" label="Email" margin="normal"/><br/>
          <TextField className={classes.textField} id="password" type="password" label="Password"  margin="normal"/>
          <br/> 
        </CardContent>
        <CardActions>
          <Button className={classes.submit} color="CadetBlue" variant="contained">Submit</Button>
        </CardActions>
      </Card>
    
    )
}


export default EditProfile
