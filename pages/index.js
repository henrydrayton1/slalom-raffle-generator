import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import { SideBar } from '../components/toolbar';
import styles from '../styles/Home.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function Home() {
  const [numberState, setNumberState] = React.useState(0);
  const [top, setTop] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [arr, setArr] = React.useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Slalom Raffle Generator</title>
        <meta name="slalom_2022_food_drive" content="A raffle ticket generator" />
        <link rel="icon" href="/slalom-logo.ico" />
      </Head>
      <SideBar />

      <main className={styles.main}>
        <div style={{ marginBottom: 3 }}>
          <Box sx={{ mt: 0 }}>
            <Image src="/slalom-oz.png" width="503.82" height="198" component="div" />
          </Box>
          <Box sx={{ margin: '0 auto', width: '50%' }}>
            <Typography sx={{ textAlign: 'center', fontSize: 50, mb: 10, mt: 10 }}>
              <CountUp end={512000 + numberState} />
            </Typography>
            <Button
              sx={{ width: 280 }}
              onClick={() => {
                setNumberState(Math.floor(Math.random() * top) + 1);
                setArr([...arr, 512000 + numberState]);
              }}
              variant="contained">
              Generate random winner
            </Button>
          </Box>

          <Box sx={{ margin: '0 auto', width: '50%', align: 'center' }}>
            <Button onClick={handleOpen} variant="outlined" sx={{ width: 280, mt: 3 }}>
              Set Range
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Set number of raffle tickets
                </Typography>
                <hr />
                <Box mt={3}>
                  <TextField
                    id="outlined-basic"
                    label="Set Range"
                    variant="outlined"
                    size="small"
                    value={top}
                    onChange={(event) => {
                      setTop(event.target.value);
                    }}
                  />
                </Box>
                <Box mt={3}>
                  <Button onClick={handleClose} variant="outlined">
                    Set Range
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </div>
        <Box sx={{ maxWidth: 1250, display: 'flex', mt: 3 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexWrap: 'wrap',

              justifyContent: 'right'
            }}>
            {arr.slice(1).map((a, i) => (
              <Chip label={a} key={i} />
            ))}
          </Stack>
        </Box>
      </main>
    </div>
  );
}
