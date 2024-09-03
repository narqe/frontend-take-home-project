import ControlsContainer from '@/components/controls/ControlsContainer';
import CanvasContainer from '@/components/canvas/CanvasContainer';
import styles from '@/components/playground/playground.module.css';

const PlaygroundContainer = () => {

  return (
    <div className={styles.container}>
      <ControlsContainer />
      <CanvasContainer />
    </div>
  );
}

export default PlaygroundContainer;
