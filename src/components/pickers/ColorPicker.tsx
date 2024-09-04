import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/pickers/pickers.module.scss';
import { HexColor } from '@/models/Types';

const ColorPicker = () => {
    const { color, setColor } = AppContext();

    return (
        <input
            className={styles.colorPicker} 
            type="color" 
            id="colorPicker" 
            value={color} 
            onChange={(e) => setColor(e.target.value as unknown as HexColor)} 
        />
    )
}

export default ColorPicker