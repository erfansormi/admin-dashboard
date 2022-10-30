function createData(
    name: string,
    image: string,
    currentName: string,
    ammount: number,
    status: "completed" | "pending" | "canceled" | "active" | "rejected",
    orderid: number
) {
    type Color = "success" | "error" | "primary" | "warning" | "neutral";
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
        name,
        image,
        currentName,
        ammount,
        status,
        orderid,
        color,
    };
}

export const orderRowsData = [
    createData(
        "car toy",
        "https://p.globalsources.com/IMAGES/PDT/BIG/425/B1160415425.jpg",
        "david alonso",
        109,
        "completed",
        10546
    ),
    createData(
        "shoe",
        "https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg",
        "flippe anderson",
        37,
        "canceled",
        10586
    ),
    createData(
        "glasess",
        "https://cdn.fleetfeet.com/products/goodr/Front-View-A-Gingers-Soul-OG-BK-BK1-copy.jpg/width:640-height:480-fit:trim/Front-View-A-Gingers-Soul-OG-BK-BK1-copy.jpg",
        "jack wilshere",
        24,
        "active",
        10646
    ),
    createData(
        "bag",
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/076620/02/fnd/IND/fmt/png/PUMA-Challenger-Small-Unisex-Duffel-Bag",
        "andrea gomez",
        67,
        "pending",
        10656
    ),
    createData(
        "chocolate",
        "https://m.media-amazon.com/images/I/61pj9OP0IQL._SX522_.jpg",
        "selona rordi",
        4,
        "rejected",
        10668
    ),
    createData(
        "phone",
        "https://www.eir.ie/opencms/export/sites/default/.galleries/eir/devices/samsung/Samsung_A53-front-min.png",
        "selona rordi",
        590,
        "completed",
        10768
    ),
    createData(
        "laptop",
        "https://shemroonshop.ir/wp-content/uploads/2021/12/711jgF2LHPL._AC_SL1500_.jpg",
        "ricardo sanchez",
        1230,
        "completed",
        10868
    ),
    createData(
        "apple watch",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215938cv11d.jpg",
        "simeone zaza",
        380,
        "pending",
        10968
    ),
    createData(
        "ps4 controller",
        "https://m.media-amazon.com/images/I/61IG46p-yHL.jpg",
        "luis suarez",
        210,
        "active",
        11068
    ),
];
