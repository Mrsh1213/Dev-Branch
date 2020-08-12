import React from 'react';
import PropTypes from 'prop-types';

import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {GoProject} from "react-icons/go";
import {useHistory} from "react-router";

CardProject.propTypes = {projectData: PropTypes.object};

const useStyles = makeStyles((theme) => ({
    // appBar: {
    //     [theme.breakpoints.down('md')]: {
    //         height: 100
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         height: 64,
    //         width: `calc(100% - ${drawerWidth}px)`,
    //         marginLeft: drawerWidth,
    //     },
    // },
    card: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: '#9676c5'
    },
    textContent: {
        textAlign: "center",
        color: "#f7f7f7",
        fontSize: '0.6rem'
    },
    textValue: {
        textAlign: "center",
        color: "#f7f7f7",
        fontSize: '0.9rem'
    },
    textSubtitle: {
        fontSize: '0.6rem',
        color: "#f7f7f7"
    },
    textTitle: {
        fontSize: '1rem',
        color: "#f7f7f7"
    }
}));

function CardProject(props) {
    const classes = useStyles();
    const history = useHistory();
    const {projectData} = props;
    const {
        avatar, combinedCode,
        latestDate,
        subProjectName,
        unSolveIssue,
        wikiCount,members
    } = projectData;


    return (
        <Card className={classes.card}>
            <CardActionArea style={{padding: 10}} onClick={() => {
                history.push({
                    pathname: '/dashboard/project',
                    state: projectData
                })
            }}>
                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item xs={3}>
                        <Avatar  variant={"circle"}
                                src={avatar}>
                            {!avatar ? <GoProject style={{width: "60%", height: "60%"}}/> : ""}
                        </Avatar>
                    </Grid>
                    <Grid item xs={6} container>
                        <Grid className={classes.textTitle} item xs={12}>{subProjectName}</Grid>
                        <Grid className={classes.textSubtitle} item xs={12}>{combinedCode}</Grid>
                    </Grid>
                    <Grid item xs={3} container>
                        <Grid className={classes.textValue} item xs={12}>{unSolveIssue}</Grid>
                        <Grid className={classes.textContent} item xs={12}>حل نشده</Grid>
                    </Grid>
                    <Grid justify={"center"} alignItems={"center"} item xs={12} container>
                        <Grid className={classes.textValue} item xs={3}>
                            {wikiCount}
                        </Grid>
                        <Grid className={classes.textValue} item xs={3}>
                            {members.length}
                        </Grid>
                        <Grid className={classes.textValue} item xs={3}>
                            {latestDate}
                        </Grid>
                    </Grid>
                    <Grid justify={"center"} alignItems={"center"} item xs={12} container>
                        <Grid className={classes.textContent} item xs={3}>
                            دانش
                        </Grid>
                        <Grid className={classes.textContent} item xs={3}>
                            نفر
                        </Grid>
                        <Grid className={classes.textContent} item xs={3}>
                            روز گذشته
                        </Grid>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}


export default (CardProject);