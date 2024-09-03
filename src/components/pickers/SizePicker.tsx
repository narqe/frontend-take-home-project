import Image from 'next/image';
import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/pickers/pickers.module.css';

const SizePicker = ({ size, value }: { size: string, value: number }) => {
    const { lineWidth, setLineWidth } = AppContext();
    const sizePicker = value >= 5 ? value : value * 3

    return (
        <button 
            className={`${lineWidth === value ? styles[`button-selected`] : styles.button}`} 
            onClick={() => setLineWidth(value)}
        >
            <Image
                src={`/controls/circle.svg`}
                width={sizePicker}
                height={sizePicker}
                alt={size}
            />
        </button>
    )
}

export default SizePicker