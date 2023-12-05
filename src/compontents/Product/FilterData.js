export const color=[
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
];

export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white", label:"White"},
            {value:"beige", label:"Beige"},
            {value:"blue", label:"Blue"},
            {value:"brown", label:"Brown"},
            {value:"green", label:"Green"},
            {value:"purple", label:"Purple"},
            {value:"yellow", label:"Yellow"},
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},

        ]
    },
];

export const singleFilter=[
    {
        id:"price",
        name:"Precio",
        options:[
            {value:"5-30", label:"$5 to $30"},
            {value:"30-60", label:"$30 to $60"},
            {value:"60-150", label:"$60 to $150"},
        ]
    },
    {
        id:"discount",
        name:"Rango Descuento",
        options:[
            {value:"10", label:"10% and Above"},
            {value:"20", label:"20% and Above"},
            {value:"40", label:"40% and Above"},
        ]
    },
    {
        id:"stock",
        name:"Disponibiidad",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out of stock"},

        ]
    },
]