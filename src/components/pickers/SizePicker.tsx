import Image from 'next/image';
import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/pickers/pickers.module.scss';
import { Button, Tooltip } from '@mui/material'

const SizePicker = ({ size, value }: { size: string, value: number }) => {
    const { lineWidth, setLineWidth } = AppContext();
    const sizePicker = value >= 5 ? value : value * 3

    return (
        <Tooltip title={`Stroke size ${size} (${value}px)`}>
            <Button 
                className={`${lineWidth === value ? styles[`button-selected`] : styles.button}`} 
                onClick={() => setLineWidth(value)}
                id={`stroke-${size}`}
            >
                <Image
                    src={`/controls/circle.svg`}
                    width={sizePicker}
                    height={sizePicker}
                    alt={size}
                />
            </Button>
        </Tooltip>
    )
}

export default SizePicker