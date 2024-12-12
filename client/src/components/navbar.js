import { Box, Stack, Typography } from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';

const Navbar = () => {
    return ( 
        <Box display="flex" justifyContent='center' alignItems='center' p={2}>
            <Stack spacing={1} direction="row">
                <CelebrationIcon />
                <Typography variant="h5" fontWeight={600}>Mellodian Community Park</Typography> 
            </Stack>
        </Box>
     );
}
 
export default Navbar;