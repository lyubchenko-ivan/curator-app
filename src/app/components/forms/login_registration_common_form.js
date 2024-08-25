'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SignUpFields from './sign_up_fields';


function getTitle(type) {
    return type === 'sign_up' ? 'Регистрация' : 'Вход'
}


export default function LoginRegistrationCommonForm(props) {
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'end'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              { getTitle(props.type) }
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container rowSpacing={2}>
                <SignUpFields type={props.type} />
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    InputLabelProps={{
                        style:{
                            color: "#999"
                        }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    InputLabelProps={{
                        style:{
                            color: "#999"
                        }
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                { getTitle(props.type) }
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    { props.type === 'sign_up' ? 'Уже есть аккаунт? Вход' : 'Еще не зарегистрированы?' }
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    );
}