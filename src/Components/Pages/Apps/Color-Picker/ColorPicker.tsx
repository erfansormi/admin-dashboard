import { useState } from 'react'
import { ChromePicker, SwatchesPicker } from 'react-color';
import { useSnackbar } from 'notistack';

// css
import styles from "./colorPicker.module.css"

// images
import pencil from "../../../../assets/img/pencil.png"

// components
import TitlePage from '../../TitlePage/TitlePage'

const ColorPicker = () => {
    const [color, setColor] = useState("#fff176")

    const { enqueueSnackbar } = useSnackbar();

    const handleChangeComplete = (color: any) => {
        setColor(color.hex);
        window.navigator.clipboard.writeText(color.hex);
        enqueueSnackbar(`${color.hex} color copied!`, { variant: "success" });
    };

    return (
        <div className={`${styles.container}`}>
            <TitlePage category='app' title='color picker' />
            <div className={`shadow content-colors content-padding ${styles.color_picker_container}`}>
                <div className={styles.layout_container}>
                    <div>
                        <div className={styles.pencil}>
                            <div className={styles.pencil_body} style={{ backgroundColor: color }}>
                                <div className={styles.pencil_head}>
                                    <img src={pencil} alt={"color picker"} />
                                </div>
                                <div className={styles.pencil_eraser}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colors_container}>
                        <div>
                            <h5 className="mb-3 text-capitalize text-center">
                                inline pallete
                            </h5>
                            <SwatchesPicker
                                width={280}
                                color={color}
                                onChangeComplete={handleChangeComplete}
                            />
                        </div>
                        <div>
                            <h5 className="mb-3 text-capitalize text-center">
                                inline picker
                            </h5>
                            <ChromePicker
                                color={color}
                                onChangeComplete={handleChangeComplete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;