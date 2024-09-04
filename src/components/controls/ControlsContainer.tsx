import React from 'react'
import ToolPicker from '@/components/pickers/ToolPicker';
import SizePicker from '@/components/pickers/SizePicker';
import ColorPicker from '@/components/pickers/ColorPicker';
import styles from "@/components/controls/controls.module.scss"
import { Box, Grid, Typography} from '@mui/material'

const ControlsContainer = () => {
    return (
        <Grid container className={styles.container}>
            <Grid item className={styles.item}>
                <Typography component="span" variant="button" className={styles.label}>Select Tool</Typography>
                <Box className={styles.items}>
                    <ToolPicker selected="brush" />
                    <ToolPicker selected="eraser" />
                    <ToolPicker selected="rectangle" />
                </Box>
            </Grid>
            <Grid item className={styles.item}>            
                <Typography component="span" variant="button" className={styles.label}>Select Stroke Size </Typography>
                <Box className={styles.items}>
                    <SizePicker size="Small" value={2} />
                    <SizePicker size="Medium" value={10} />
                    <SizePicker size="Big" value={15} />
                </Box>
            </Grid>
            <Grid item className={styles.item}>
                <Typography component="span" variant="button" className={styles.label}>Select Color </Typography>
                <Box className={styles.items}>
                    <ColorPicker />
                </Box>
            </Grid>
        </Grid>
    )
}

export default ControlsContainer