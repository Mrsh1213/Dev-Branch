import Grid from '@material-ui/core/Grid';
import React, {useState, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from "react-router";
import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import ImageUploader from "react-images-upload";


const useStyles = makeStyles({

    uploaderClass: {

        width: "99%",
        margin: "5px 3px 5px 3px",
        float: "left",
    },

    titleClass: {
        width: "99%",
        margin: "7.5px 5px 7px 3px",
        fontFamily: "IRANSans",
        fontSize: "15px",
        fontWeight: "550",
        float: "left",

    },

    editorClass: {
        width: "99%",
        margin: "0px 3px 0px 3px",
        float: "left",


    },

    buttonsClass:
        {
            // margin:"15px 0 0 0"
        }
    ,

    backClass: {
        float: "right",
        fontFamily: "IRANSans",
        backgroundColor: "#2E6E8E",
        fontWeight: "500",
        width: "25%",
        margin: "0 3px 0 0px"


    },
    createPostClass:
        {
            float: "left",
            fontFamily: "IRANSans",
            fontWeight: "500",
            margin: "0 0px 0 3px",
            width: "65%"
        },

    uploader:
        {
            width: "100%"
        }

});


function MyEditor(props) {


    const buttonList = [
        ["removeFormat"],
        ["bold", "underline", "italic"],
        ["codeView"],
        ["undo", "redo"],
        ["fontColor"],
        ["link"],
        ["list"]

    ];

    const classes = useStyles();

    const history = useHistory();

    const createNewPost = props.createPost;


    const [content, setContent] = useState("");

    const [title, setTitle] = useState("");

    const [picture, setPicture] = useState(null);

    const onDrop = picture => {
        setPicture(picture);
        console.log(picture);
    };

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    const handleTitletChange = (event) => {
        setTitle(event.target.value);
    };


    return <Fragment>
        <Grid container>

            <Grid item xs={12}>

                <TextField label="عنوان پست را وارد کنید" inputProps={{
                    style: {
                        fontFamily: "IRANSans",
                        fontWeight: "400"
                    }
                }}
                           size="small" color="secondary"
                           className={classes.titleClass} variant="outlined"
                           onChange={handleTitletChange}></TextField>

            </Grid>

            <Grid xs={12} item className={classes.editorClass}>


                <SunEditor lang="fa" setDefaultStyle="font-family: IRANSans; font-size: 18px;text-align:right;"
                           onChange={handleContentChange} height="130"
                           setOptions={{buttonList: buttonList}}/>

            </Grid>

            <Grid item xs={12} className={classes.uploaderClass}>

                <ImageUploader
                    {...props}
                    withIcon={false}
                    singleImage={true}
                    withPreview={true}
                    buttonType="primary"
                    label="حداکثر حجم عکس قابل آپلود 5 مگابایت است"
                    labelStyles={{fontFamily: "IRANSans", fontSize: "14px"}}
                    buttonText="تصویر را انتخاب کنید"
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    className={classes.uploader}
                />

            </Grid>


            <Grid item xs={12} className={classes.buttonsClass}>

                <Button variant="contained" color="default"
                        className={classes.createPostClass}
                        onClick={() => {
                            createNewPost(title, content, picture);
                            setTitle("");
                            setContent("");
                            setPicture(null);
                            history.push("/dashboard/project/wikiProject");
                        }}>
                    ایجاد پست</Button>

                <Button variant="contained" className={classes.backClass}
                        onClick={() => history.push("/dashboard/project/wikiProject")} color="primary">بازگشت</Button>

            </Grid>

        </Grid>

    </Fragment>

}

export default MyEditor;