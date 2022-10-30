// mui
import { Avatar } from "@mui/material";

//css
import styles from "./customersTable.module.css"

export type Order = "asc" | "desc";

export interface Data {
    name: string,
    productName: "elite admin" | "weekly WP theme" | "hosting press WP" | "real home WP" | "cloud service WP",
    img: string,
    status: "active" | "pending" | "cancel",
    weeks: number,
    budget: number
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
    {
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "name",
    },
    {
        id: "productName",
        numeric: false,
        disablePadding: false,
        label: "product name",
    },
    {
        id: "status",
        numeric: false,
        disablePadding: false,
        label: "status",
    },
    {
        id: "weeks",
        numeric: true,
        disablePadding: false,
        label: "weeks",
    },
    {
        id: "budget",
        numeric: true,
        disablePadding: false,
        label: "budget",
    },
];

const handleRowCustomers = (
    name: string,
    productName: "elite admin" | "weekly WP theme" | "hosting press WP" | "real home WP" | "cloud service WP",
    img: string,
    status: "active" | "pending" | "cancel",
    weeks: number,
    budget: number
): Data => {
    return {
        img,
        name,
        productName,
        status,
        weeks,
        budget
    }
}

export const rowCustomers = [
    handleRowCustomers(
        "david sancho",
        "elite admin",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVP69yYHdwjs2tSmmu8OgrYGhfVDDwT_0bILAHH4AqF7yuSrmugNzWjpp4Zr6GmDpXfA&usqp=CAU",
        "active",
        40,
        6
    ),
    handleRowCustomers(
        "alberto moreno",
        "weekly WP theme",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9soNa4oIdGqd2yMX0YhhoprruZECKETazbcQD0t6zLVKeOSdU_WMHGSw-9HXSxWPxLy8&usqp=CAU",
        "active",
        20,
        12
    ),
    handleRowCustomers(
        "jack smith",
        "hosting press WP",
        "https://spunout.ie/wp-content/uploads/2021/01/portrait-black-young-man-face-man-person-ethnic-student-diversity-diverse-confident-millennial_t20_K6aZOV-2.jpg",
        "pending",
        9,
        3
    ),
    handleRowCustomers(
        "david alaba",
        "real home WP",
        "https://www.fuersie.de/sites/default/files/styles/image360w/public/2022-06/egozentrische-person.jpg?h=fa6d1f7a&itok=da_GdqKf",
        "cancel",
        5,
        6
    ),
    handleRowCustomers(
        "hernanez simeo",
        "cloud service WP",
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "active",
        2,
        10
    ),
    handleRowCustomers(
        "rakitic",
        "elite admin",
        "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
        "active",
        2,
        10
    ),
    handleRowCustomers(
        "samuel mendez",
        "elite admin",
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "active",
        21,
        16
    ),
    handleRowCustomers(
        "cavier hernandez",
        "hosting press WP",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1Ruf2u4sizi0ssuKc85KqmylKaaQ38A4B4znY88A3AM2vjf-Hzkq58r5ZsGSXl1YPrI&usqp=CAU",
        "pending",
        5,
        6
    ),
    handleRowCustomers(
        "nilson semedo",
        "weekly WP theme",
        "https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg",
        "pending",
        15,
        7
    ),
    handleRowCustomers(
        "ricardo alvez",
        "weekly WP theme",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BRhsApYWRRMYFtZhht7qOGELtkBtlmuhqnhOZvqPURQ2TUemUdwjsi8YJNISZmgrKk&usqp=CAU",
        "active",
        15,
        7
    ),
    handleRowCustomers(
        "robinho",
        "weekly WP theme",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHzLEwQx65NMYBnJJYTM3SXVnoSxLLVfyFVoZoNyc_xbGURsLGigl6bqn00E8AL8Q0fg&usqp=CAU",
        "cancel",
        5,
        7
    ),
    handleRowCustomers(
        "canavaro",
        "elite admin",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQORhBE_-B7JnAoMdNtLe2kthebd_BkOH1Vw&usqp=CAU",
        "cancel",
        5,
        7
    ),
    handleRowCustomers(
        "alvaro morata",
        "elite admin",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BRhsApYWRRMYFtZhht7qOGELtkBtlmuhqnhOZvqPURQ2TUemUdwjsi8YJNISZmgrKk&usqp=CAU",
        "active",
        20,
        2
    ),
    handleRowCustomers(
        "samiato",
        "elite admin",
        "https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg",
        "active",
        20,
        2
    ),
    handleRowCustomers(
        "zanelly",
        "real home WP",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BRhsApYWRRMYFtZhht7qOGELtkBtlmuhqnhOZvqPURQ2TUemUdwjsi8YJNISZmgrKk&usqp=CAU",
        "active",
        10,
        4
    ),
    handleRowCustomers(
        "zanneti",
        "elite admin",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVP69yYHdwjs2tSmmu8OgrYGhfVDDwT_0bILAHH4AqF7yuSrmugNzWjpp4Zr6GmDpXfA&usqp=CAU",
        "active",
        40,
        6
    ),
    handleRowCustomers(
        "gonzalo romero",
        "weekly WP theme",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9soNa4oIdGqd2yMX0YhhoprruZECKETazbcQD0t6zLVKeOSdU_WMHGSw-9HXSxWPxLy8&usqp=CAU",
        "active",
        20,
        12
    ),
    handleRowCustomers(
        "roberto bajo",
        "hosting press WP",
        "https://spunout.ie/wp-content/uploads/2021/01/portrait-black-young-man-face-man-person-ethnic-student-diversity-diverse-confident-millennial_t20_K6aZOV-2.jpg",
        "pending",
        9,
        3
    ),
    handleRowCustomers(
        "romaro niquiz",
        "real home WP",
        "https://www.fuersie.de/sites/default/files/styles/image360w/public/2022-06/egozentrische-person.jpg?h=fa6d1f7a&itok=da_GdqKf",
        "cancel",
        5,
        6
    ),
    handleRowCustomers(
        "sadio sane",
        "cloud service WP",
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "active",
        2,
        10
    ),
    handleRowCustomers(
        "madio mane",
        "elite admin",
        "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
        "active",
        2,
        10
    ),
    handleRowCustomers(
        "yan oblack",
        "elite admin",
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "active",
        21,
        16
    ),
    handleRowCustomers(
        "bruno fernandez",
        "hosting press WP",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1Ruf2u4sizi0ssuKc85KqmylKaaQ38A4B4znY88A3AM2vjf-Hzkq58r5ZsGSXl1YPrI&usqp=CAU",
        "pending",
        5,
        6
    ),
    handleRowCustomers(
        "fred alberto",
        "weekly WP theme",
        "https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg",
        "pending",
        15,
        7
    ),
    handleRowCustomers(
        "de paul",
        "weekly WP theme",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BRhsApYWRRMYFtZhht7qOGELtkBtlmuhqnhOZvqPURQ2TUemUdwjsi8YJNISZmgrKk&usqp=CAU",
        "active",
        15,
        7
    ),
    handleRowCustomers(
        "daniel davari",
        "weekly WP theme",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHzLEwQx65NMYBnJJYTM3SXVnoSxLLVfyFVoZoNyc_xbGURsLGigl6bqn00E8AL8Q0fg&usqp=CAU",
        "cancel",
        5,
        7
    ),
    handleRowCustomers(
        "karim mustafa",
        "cloud service WP",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQORhBE_-B7JnAoMdNtLe2kthebd_BkOH1Vw&usqp=CAU",
        "cancel",
        5,
        7
    ),
    handleRowCustomers(
        "icker ckacias",
        "elite admin",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BRhsApYWRRMYFtZhht7qOGELtkBtlmuhqnhOZvqPURQ2TUemUdwjsi8YJNISZmgrKk&usqp=CAU",
        "active",
        20,
        2
    ),
    handleRowCustomers(
        "harry maguire",
        "cloud service WP",
        "https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg",
        "active",
        20,
        2
    ),
    handleRowCustomers(
        "raphael varan",
        "real home WP",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-BRhsApYWRRMYFtZhht7qOGELtkBtlmuhqnhOZvqPURQ2TUemUdwjsi8YJNISZmgrKk&usqp=CAU",
        "active",
        10,
        4
    ),
];

export const perRowCustomersT = (row: Data) => {
    return [
        {
            value:
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                        src={row.img}
                        sx={{ width: 30, height: 30, marginRight: "6px" }}
                        alt={row.name}
                    />
                    {row.name}
                </div>
        },
        {
            value: row.productName
        },
        {
            value:
                <span>
                    <span
                        style={{ marginRight: 6 }}
                        className={`status-user ${row.status == "active" ?
                            "status-success" : row.status == "pending" ?
                                "status-warning" : "status-error"
                            }`}>
                    </span>
                    <span>
                        {row.status}
                    </span>
                </span>
        },
        {
            value: row.weeks
        },
        {
            value: `$${row.budget}k`
        },
    ]
} 