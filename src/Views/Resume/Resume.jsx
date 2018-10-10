import React, { Component } from 'react';


import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    resume: {
        marginTop: 100,
        marginLeft: 45,
        marginRight: 45,
    },
    subBullet: {
        listStyle: 'none',
    }
})

class Resume extends Component {
    render() {
        let { classes } = this.props
        return (
            <div className={classes.resume}>
                <Typography variant="title" color="inherit">PROFESSIONAL EXPERIENCE</Typography>
                <br/>
                <Typography variant="subheading" color="inherit">
                    Prime Digital Academy • Full Stack Software Engineering Student
                </Typography>
                <Typography variant="body2" color="inherit">
                    Minneapolis, MN • May 2018 – Sept 2018
                </Typography>
                <Typography variant="body1">
                        <ul>
                            <li>
                                Full time student in Prime Digital Academy’s immersive full stack development program.
                            </li>
                            <li>
                                Daily collaborative learning and working in diverse professional setting.
                            </li>
                            <li>
                                Creator of Locker Room – a full stack application that allows users to track Fantasy Football news and notes.
                            </li>
                            <li className={classes.subBullet}>
                            ◦ Application uses SQL to store data that is called from Fantasy Football Nerd API, then passed through Redux Store as the user builds a team.
                            </li>
                            <li className={classes.subBullet}>
                            ◦ User team is then called from database to be displayed in a Material-UI based environment with the ability to modify the team, view player specific news sources, and keep notes on individuals.
                            </li>
                            <li>
                                Co-Creator of Tier Four –  alumni engagement application for Prime Digital Academy.
                            </li>
                            <li className={classes.subBullet}>
                                ◦ Application utilizes GitHub API and OAuth to allow users to login in, while tracking their commit history for a thirty day period that is initialized by an administrative user.
                            </li>
                            <li className={classes.subBullet}>
                                ◦ Functionality of app also includes data collection from Prime graduates to track employment search processes and incorporates Nodemailer to provide instant feedback and reminders to make commits.
                            </li>
                        </ul>
                    </Typography>
                    <Typography variant="subheading" color="inherit">
                        TRIA Orthopaedic Center • Office Service Coordinator</Typography>
                    <Typography variant="body2" color="inherit">
                        Bloomington, MN • 2014 –  2017
                    </Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>
                                Responsible for the shipping, receiving, verifying, and handling of three hundred plus pieces of company related materials and packages, in compliance with HIPAA regulations.
                            </li>
                            <li>
                                Oversee print production and distribution of company collateral and operational forms.
                            </li>
                            <li>
                                Create process efficiency through use of inventory management and other supporting software.
                            </li>
                        </ul>
                    </Typography>
                    <Typography variant="subheading" color="inherit">
                        Indeed Brewing Company • Production Assistant
                    </Typography> 
                    <Typography variant="body2" color="inherit">
                        Minneapolis, MN • March 2014 – June 2014
                    </Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>
                                Complete production order of twelve thousand units or greater on a daily basis
                            </li>
                            <li>
                                Aid in Quality control of both product and packaging materials.
                            </li>
                        </ul>
                    </Typography>
                    <Typography variant="subheading" color="inherit">
                        Wells Fargo Bank • Inbound Sales Specialist Shoreview, MN • January 2013 – Nov 2013
                    </Typography>
                    <Typography>
                        <ul>
                            <li>
                                Provide custom financial solutions to approximately forty customers on a daily basis, while delivering above-average levels of customer satisfaction (90%) and quality standards (97.25%)
                            </li>
                            <li>
                                Take part in continuous training to ensure compliance with Federal and institutional regulations.
                            </li>
                            <li>
                                Sustain a high level of schedule adherence in order to efficiently meet call volume demand.
                            </li>
                        </ul>
                    </Typography>
                    <Typography variant="subheading" color="inherit">
                        Papa Murphy’s • Assistant Store Manager Vadnais Heights, MN • 2006 – 2009 and 2011 –  2012  
                    </Typography>
                    <Typography>
          • Analyzed sales numbers and trends and synthesized information for business stakeholders.
          • Assisted in product forecasting and purchasing to retain consistent levels of inventory.
          • Effectively managed weekly cash flow of approximately two thousand dollars.
          • Hire, train, and challenge a team of seven employees in a fast paced environment.
      
      
      
      
      EDUCATION
      
      Prime Digital Academy                                                                   Minneapolis, MN • May 2018 – Sept 2018
          • Full Stack Software Engineering Certification
      University of Wisconsin – River Falls                                                              River Falls, WI • 2008 – 2011
          • Studied Business Administration
      
      LEADERSHIP & ACTIVITIES
      
      Minnedemo 29 • Attendee			                                                                                 St. Paul, MN • July 2018
      White Bear Lake Lacrosse Club • Head Coach             White Bear Lake, MN • May 2011 – Aug 2011,  May 2012 – Aug 2012
      Hudson Area Lacrosse Association • Head Coach                                                         Hudson, WI • May 2010 – Aug 2010
      UW-River Falls Men’s Lacrosse Club • Coach/Captain		                                 River Falls, WI • Sept 2008 – June 2011
Regional Lacrosse Presentation for The Sports Authority • Keynote Speaker			       Oakdale, MN • 2009</Typography>
            </div>
        );
    }
}

const StyledResume = withStyles(styles)(Resume)
export default StyledResume;