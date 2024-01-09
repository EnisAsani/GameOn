import { GraphicCardProps } from "../components/GraphicCardProduct"
import { ProcessorProps } from "../components/ProcessorProduct"
import { Pcus } from "../pages/Pcus"

const graphicCards:GraphicCardProps[] = [{
    id: "gc1",
    name: "RTX 3070 Ti",
    brand: 0,
    imgUrl: "/gpu_1-avif.avif",
    memory: 12,
    price: 753
},
{
    id: "gc2",
    name: "RTX 3080",
    brand: 0,
    imgUrl: "/gpu_1-avif.avif",
    memory: 12,
    price: 953
},
{
    id: "gc3",
    name: "RX 7700 X",
    brand: 1,
    imgUrl: "/gpu_2-avif.avif",
    memory: 12,
    price: 820
}

]
const processors:ProcessorProps[] = [
    {
        id: 'proc1',
        processorBrand: 0,
        name: "Intel I5-10400 F",
        imgUrl: "/cpu_2-avif.avif",
        coreClock: 3.7,
        maxClock: 4.7,
        price: 260
    },
    {
        id: 'proc2',
        processorBrand: 0,
        name: "Intel I7-13900 K",
        imgUrl: "/cpu_2-avif.avif",
        coreClock: 3.9,
        maxClock: 4.9,
        price: 660
    },
    {
        id: 'proc3',
        processorBrand: 1,
        name: "Ryzen 5 5700 X",
        imgUrl: "/cpu_1-avif.avif",
        coreClock: 3.5,
        maxClock: 4.5,
        price: 360
    }
]
const computers:Pcus[] = [
    {
        id:"pc1",
        name:"Gaming Intel Extreme",
        graphicCardId: "gc1",
        graphicCard: {
            id: "gc1",
            name: "RTX 3070 Ti",
            brand: 0,
            imgUrl: "/gpu_1-avif.avif",
            memory: 12,
            price: 753
        } ,
        imgUrl: "/pcu_1-avif.avif",
        motherBoard: "ASUS",
        powerSupply: "850 W",
        price: 1200,
        procesorId: "proc2",
        processor: {
            id: 'proc2',
            processorBrand: 0,
            name: "Intel I7-13900 K",
            imgUrl: "/cpu_2-avif.avif",
            coreClock: 3.9,
            maxClock: 4.9,
            price: 660
        },
        ram: 16

    },
    {
        id:"pc2",
        name:"Gaming Intel Extreme",
        graphicCardId: "gc2",
        graphicCard: {
            id: "gc2",
            name: "RTX 3080",
            brand: 0,
            imgUrl: "/gpu_1-avif.avif",
            memory: 12,
            price: 953
        } ,
        imgUrl: "/pcu_1-avif.avif",
        motherBoard: "ASUS",
        powerSupply: "850 W",
        price: 1300,
        procesorId: "proc2",
        processor: {
            id: 'proc2',
            processorBrand: 0,
            name: "Intel I7-13900 K",
            imgUrl: "/cpu_2-avif.avif",
            coreClock: 3.9,
            maxClock: 4.9,
            price: 660
        },
        ram: 16

    }
]


const useData = () => {
    return {graphicCards, processors, computers}
}
export {useData}