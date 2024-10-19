'use client';
import * as React from 'react';
import {
  Container, Grid, Stack, TextField, Button, Typography, Link, Box,
} from '@mui/material';

export default function Login() {
  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [erro, setErro] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!login || !senha) {
      setErro(true); // Exibe erro se os campos estiverem vazios
      return;
    }
    console.log('Login efetuado:', { login, senha });
    // Simulação de redirecionamento ou chamada de API aqui.
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: '100vh',
        width: "100vw",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}>

        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Stack spacing={3} mt={2}>
          <TextField
            label="Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            error={erro && !login}
            helperText={erro && !login ? 'Usuário é obrigatório' : ''}
            variant="outlined"
            fullWidth
            autoFocus
          />
          <TextField
            type="password"
            label="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={erro && !senha}
            helperText={erro && !senha ? 'Senha é obrigatória' : ''}
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Entrar
          </Button>
          <Grid container justifyContent="space-between">
            <Link href="#" variant="body2">
              Esqueceu a senha?
            </Link>
            <Link href="#" variant="body2">
              Criar conta
            </Link>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
