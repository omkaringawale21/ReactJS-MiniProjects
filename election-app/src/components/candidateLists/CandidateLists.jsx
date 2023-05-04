import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { eventFormData } from '../../context/context';

const CandidateLists = () => {
  return (
    <Box sx={{padding: '20px'}}>
      <Container maxWidth='md' sx={{padding: '20px 0'}} >
        <Typography variant='h3' align='center' sx={{
                      color: '#707f8f',
                      fontSize: "28px",
                      fontWeight: "600",
                      fontFamily: "'Alata', sans-serif",
        }} >
          Candidates Lists
        </Typography>
        <Box>
          <Grid container spacing={4}>
          {eventFormData.map((curItem) => {
            return (
              <Grid item key={curItem.empId} sx={{margin: '20px 0'}} xs='12' sm='12' md='6' lg='4' xl='3' >
                <Card sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                }} >
                  <CardContent sx={{
                    flexGrow: 1,
                  }} >
                    <Typography gutterBottom variant='h4' sx={{
                      color: '#707f8f',
                      fontSize: "28px",
                      fontWeight: "600",
                      fontFamily: "'Alata', sans-serif",
                    }} >{curItem.eventTitle}</Typography>
                    <Box sx={{
                      fontSize: '20px',
                      margin: '10px 0'
                    }} >Date : {curItem.date}</Box>
                    <Box sx={{
                      fontSize: '20px',
                    }} >Price : ${curItem.prize}</Box>
                    <Box sx={{
                      margin: '10px 0',
                      fontSize: '20px',
                      color: '#707f8f',
                      fontWeight: '600',
                    }} >Candidates: {curItem.candidate.map((nameCandidate, index) => {
                      return(
                        <Box sx={{
                          margin: '10px 0',
                          color: '#000',
                          fontWeight: '400',
                        }} key={index} >
                          {nameCandidate.name}
                        </Box>
                      )
                    })}</Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CandidateLists;