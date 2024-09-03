import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/pickers/pickers.module.css';
import { HexColor } from '@/models/Types';

const ColorPicker = () => {
    const { color, setColor } = AppContext();

    return (
        <div>
            <label htmlFor="colorPicker">Select Color:</label>
            <input
                className={styles.colorPicker} 
                type="color" 
                id="colorPicker" 
                value={color} 
                onChange={(e) => setColor(e.target.value as unknown as HexColor)} 
            />
        </div>
    )
}

export default ColorPicker