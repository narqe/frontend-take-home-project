import ControlsContainer from '@/components/controls/ControlsContainer';
import CanvasContainer from '@/components/canvas/CanvasContainer';
import styles from '@/components/playground/playground.module.scss';
import { Grid } from '@mui/material';

const PlaygroundContainer = () => {

  return (
    <Grid className={styles.container}>
      <Grid>
        <ControlsContainer />
      </Grid>
      <Grid>
        <CanvasContainer />
      </Grid>
    </Grid>
  );
}

export default PlaygroundContainer;
