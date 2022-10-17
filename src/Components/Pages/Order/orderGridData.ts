function createData(name: string, image: string, currentName: string, ammount: number, status: string, orderid: number) {
    type Color = "success" | "error" | "primary" | "warning" | "neutral"
    let color: Color = "primary";
    switch (status) {
        case "completed":
            color = "success";
            break;

        case "canceled":
            color = "neutral";
            break;

        case "active":
            color = "primary";
            break;

        case "pending":
            color = "warning";
            break;

        case "rejected":
            color = "error";
            break;

        default:
            color = "primary";
    }
    return {
        name, image, currentName, ammount, status, orderid, color
    };
}

export const orderRowsData = [
    createData('car toy', "https://p.globalsources.com/IMAGES/PDT/BIG/425/B1160415425.jpg", "david alonso", 109, "completed", 10546),
    createData('shoe', "https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg", "flippe anderson", 37, "canceled", 10586),
    createData('glasess', "https://cdn.fleetfeet.com/products/goodr/Front-View-A-Gingers-Soul-OG-BK-BK1-copy.jpg/width:640-height:480-fit:trim/Front-View-A-Gingers-Soul-OG-BK-BK1-copy.jpg", "jack wilshere", 24, "active", 10646),
    createData('bag', "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/076620/02/fnd/IND/fmt/png/PUMA-Challenger-Small-Unisex-Duffel-Bag", "andrea gomez", 67, "pending", 10656),
    createData('chocolate', "https://m.media-amazon.com/images/I/61pj9OP0IQL._SX522_.jpg", 'selona rordi', 4, "rejected", 10668),
];