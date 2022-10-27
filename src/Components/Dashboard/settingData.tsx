// colors
import { primaryColor, cyanColor, errorColor, neutralColor, successColor, warningColor } from "../Mui/CustomizeColor"

interface ThemeColors {
    hex: string,
    name: string
}
export const themeColorsData: ThemeColors[] = [
    {
        hex: primaryColor,
        name: "primary"
    },
    {
        hex: cyanColor,
        name: "cyan"
    },
    {
        hex: successColor,
        name: "success"
    },
    {
        hex: neutralColor,
        name: "neutral"
    },
    {
        hex: warningColor,
        name: "warning"
    },
    {
        hex: errorColor,
        name: "error"
    },
]