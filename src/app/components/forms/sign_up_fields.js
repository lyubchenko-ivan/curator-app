import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

export default function SignUpFields(props) {
    return props.type === 'sign_up' ? (
        <Grid container spacing={2} md={0}>
            <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Имя"
                    autoFocus
                    InputLabelProps={{
                        style:{
                            color: "#999"
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    autoComplete="family-name"
                    InputLabelProps={{
                        style:{
                            color: "#999"
                        }
                    }}
                />
            </Grid>
        </Grid>
    ) : null;
}