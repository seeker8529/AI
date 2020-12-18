const ColorsEnum =
    Object.freeze({"red":1, "green":2, "dark_blue":3, "grey":4,
        "white": 5, "golden": 6, "black": 7, "pink": 8, "purple": 9})


let treedata = {
    name: "Смартфоны и аксессуары",
    children: [
        {
            name: "Apple",
            children: [
                {
                    name: "Смартфоны",
                    children: [
                        {
                            name: "iPhone XR",
                            diagonal_mm: 6.1,
                            working_time: 65,
                            price: 47290,
                            case_material: "aluminum & glass",
                            colors: [ColorsEnum.black, ColorsEnum.dark_blue, ColorsEnum.grey, ColorsEnum.red],
                            weight_gr: 194,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone SE",
                            diagonal_mm: 4.7,
                            price: 35789,
                            working_time: 40,
                            case_material: "aluminum",
                            colors: [ColorsEnum.black, ColorsEnum.red],
                            weight_gr: 148,
                            rating: 9.5,
                            sim_2: false
                        },
                        /*
                        {
                            name: "iPhone 11",
                            diagonal_mm: 6.1,
                            price: 64980,
                            working_time: 65,
                            case_material: "aluminum & glass",
                            colors: [ColorsEnum.grey, ColorsEnum.green],
                            weight_gr: 194,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 11 Pro",
                            diagonal_mm: 5.8,
                            price: 92900,
                            working_time: 65,
                            case_material: "aluminum",
                            colors: [ColorsEnum.dark_blue, ColorsEnum.white],
                            weight_gr: 188,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 11 Pro Max",
                            diagonal_mm: 6.5,
                            price: 84389,
                            working_time: 80,
                            case_material: "aluminum",
                            colors: [ColorsEnum.golden, ColorsEnum.grey, ColorsEnum.white],
                            weight_gr: 226,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 12",
                            diagonal_mm: 6.5,
                            price: 84389,
                            working_time: 80,
                            case_material: "aluminum & matt glass",
                            colors: [ColorsEnum.red, ColorsEnum.black],
                            weight_gr: 226,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 12 mini",
                            diagonal_mm: 5.4,
                            price: 69990,
                            working_time: 80,
                            case_material: "aluminum & matt glass",
                            colors: [ColorsEnum.golden, ColorsEnum.dark_blue],
                            weight_gr: 133,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 12 Pro",
                            diagonal_mm: 6.1,
                            price: 99990,
                            working_time: 80,
                            case_material: "aluminum & matt glass",
                            colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                            weight_gr: 187,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 12 Pro Max",
                            diagonal_mm: 6.7,
                            price: 109990,
                            working_time: 80,
                            case_material: "aluminum & matt glass",
                            colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                            weight_gr: 226,
                            rating: 9.5,
                            sim_2: false
                        }

                         */

                    ]
                },


                {
                    name: "Часы",
                    children: [
                        {
                            name: "Apple watch series 6",
                            children: [
                                {
                                    name: "Apple watch series 6 max",
                                    display_alw_on: true,
                                    diagonal_mm: 44,
                                    price: 39490,
                                    working_time: 80,
                                    rating: 9.5,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                                    case_material: "aluminum",
                                    use_with: "Apple only"
                                },
                                {
                                    name: "Apple watch series 6 mini",
                                    display_alw_on: true,
                                    diagonal_mm: 40,
                                    price: 36990,
                                    working_time: 80,
                                    rating: 9.5,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                                    case_material: "aluminum",
                                    use_with: "Apple only"

                                }
                            ]

                        },
                        {
                            name: "Apple watch series 3",
                            children: [
                                {
                                    name: "Apple watch series 3 max",
                                    display_alw_on: false,
                                    diagonal_mm: 42,
                                    price: 18990,
                                    working_time: 80,
                                    rating: 9.9,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                                    case_material: "aluminum",
                                    use_with: "Apple only"
                                },
                                {
                                    name: "Apple watch series 3 mini",
                                    display_alw_on: false,
                                    diagonal_mm: 38,
                                    price: 16990,
                                    working_time: 80,
                                    rating: 9.6,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                                    case_material: "aluminum",
                                    use_with: "Apple only"
                                }
                            ]
                        },
                        {
                            name: "Apple watch SE",
                            children: [
                                {
                                    name: "Apple watch SE max",
                                    display_alw_on: false,
                                    diagonal_mm: 44,
                                    price: 27490,
                                    working_time: 80,
                                    rating: 8.5,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                                    case_material: "aluminum",
                                    use_with: "Apple only"
                                },
                                {
                                    name: "Apple watch SE mini",
                                    display_alw_on: false,
                                    diagonal_mm: 40,
                                    price: 24990,
                                    working_time: 80,
                                    rating: 9.5,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                                    case_material: "aluminum",
                                    use_with: "Apple only"
                                }
                            ]
                        }
                    ]
                },
/*
                {
                    name: "Наушники",
                    children: [
                        {
                            name: "AirPods",
                            use_with: "Apple only",
                            is_vacuum: false,
                            working_time: 5,
                            price: 13990,
                            height_mm: 40.5,
                            rating: 9.5,
                            colors: [ColorsEnum.white]
                        },
                        {
                            name: "AirPods Pro",
                            use_with: "Apple only",
                            is_vacuum: true,
                            working_time: 4.5,
                            height_mm: 30.9,
                            rating: 9.5,
                            price: 20990,
                            colors: [ColorsEnum.white, ColorsEnum.black]
                        },
                        {
                            name: "AirPods Max",
                            use_with: "Apple only",
                            is_vacuum: false,
                            working_time: 20,
                            height_mm: 83.4,
                            rating: 9.5,
                            price: 62990,
                            colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.pink]
                        }
                    ]
                }

 */

            ]
        },
    /*
    {
        name: "Samsung",
        children: [
            {
                name: "Смартфоны",
                children: [
                    {
                        name: "Samsung Galaxy Z",
                         children: [
                             {
                                name: "Galaxy Z Flip",
                                diagonal_mm: 6.7,
                                price: 179990,
                                working_time: 35,
                                case_material: "aluminum",
                                weight_gr: 183,
                                sim_2: false,
                                rating: 9.8,
                                colors: [ColorsEnum.white, ColorsEnum.black],
                                is_folding: true
                             },
                             {
                                name: "Galaxy Fold",
                                diagonal_mm: 5.8,
                                price: 159900,
                                working_time: 65,
                                case_material: "aluminum",
                                weight_gr: 188,
                                sim_2: false,
                                rating: 9.8,
                                colors: [ColorsEnum.white, ColorsEnum.black],
                                is_folding: true
                            },
                            {
                                name: "Galaxy Z Fold2",
                                diagonal_mm: 7.6,
                                price: 179990,
                                working_time: 31,
                                case_material: "aluminum",
                                weight_gr: 282,
                                sim_2: false,
                                rating: 9.8,
                                is_folding: true
                            }
                        ]
                    },
                    {
                        name: "Samsung Galaxy S",
                         children: [
                            {
                                display_alw_on: true,
                                diagonal_mm: 7.6,
                                price: 179990,
                                working_time: 31,
                                case_material: "aluminum",
                                weight_gr: 282,
                                sim_2: false,
                                rating: 9.8,
                                is_folding: true
                            }
                        ]
                    },
                    {
                        name: "Samsung Galaxy A",
                         children: [
                            {
                                display_alw_on: true,
                                diagonal_mm_mm: 40,
                                case_material: "aluminum",
                                use_with: "Apple only"

                            }
                        ]
                    },
                    {
                        name: "Samsung Galaxy M",
                         children: [
                            {
                                display_alw_on: true,
                                diagonal_mm_mm: 40,
                                case_material: "aluminum",
                                use_with: "Apple only"

                            }
                        ]
                    }



                ]
            },
            {
                name: "Часы",
                children: [
                    {

                    }
                ]
            },
            {
                name: "Наушники",
                children: [
                    {

                    }
                ]
            },
        ]

    },

     */
        /*
    {
        name: "Xiaomi",
        children: [
            {
                name: "Смартфоны",
                children: [
                    {
                        name: "Линейка Mi",
                        children: [
                            {
                                name: "Mi 10T Pro",
                                diagonal_mm: 6.67,
                                price: 49990,
                                working_time: 39,
                                case_material: "aluminum",
                                weight_gr: 183,
                                sim_2: true,
                                rating: 9.8,
                                colors: [ColorsEnum.grey, ColorsEnum.grey]
                            },
                            {
                                name: "Mi 10T",
                                diagonal_mm: 6.67,
                                price: 44990,
                                working_time: 39,
                                case_material: "aluminum",
                                weight_gr: 183,
                                sim_2: true,
                                rating: 9.0,
                                colors: [ColorsEnum.grey, ColorsEnum.dark_blue]
                            },
                            {
                                name: "Mi Note 10 Lite",
                                diagonal_mm: 6.67,
                                price: 32990,
                                working_time: 24,
                                case_material: "aluminum",
                                weight_gr: 183,
                                sim_2: true,
                                rating: 9.0,
                                colors: [ColorsEnum.dark_blue, ColorsEnum.grey]
                            },
                            {
                                name: "Mi 10",
                                diagonal_mm: 6.67,
                                price: 64990,
                                working_time: 39,
                                case_material: "aluminum",
                                weight_gr: 183,
                                sim_2: false,
                                rating: 9.0,
                                colors: [ColorsEnum.dark_blue, ColorsEnum.pink]
                            },
                            {
                                name: "Mi A3",
                                diagonal_mm: 6.088,
                                price: 14990,
                                working_time: 23,
                                case_material: "aluminum",
                                weight_gr: 173,
                                sim_2: true,
                                rating: 9.0,
                                colors: [ColorsEnum.dark_blue, ColorsEnum.white]
                            },
                            {
                                name: "Mi 9",
                                diagonal_mm: 6.39,
                                price: 25990,
                                working_time: 27,
                                case_material: "aluminum",
                                weight_gr: 173,
                                sim_2: true,
                                rating: 9.0,
                                colors: [ColorsEnum.purple, ColorsEnum.dark_blue]
                            },
                            {
                                name: "Mi 8",
                                diagonal_mm: 6.21,
                                price: 25990,
                                working_time: 33,
                                case_material: "aluminum",
                                weight_gr: 173,
                                sim_2: false,
                                rating: 9.0,
                                colors: [ColorsEnum.purple, ColorsEnum.dark_blue]
                            }

                        ]

                    },
                    {
                        name: "Линейка Redmi",
                        children: [
                            {
                                name: "Redmi 9",
                                diagonal_mm: 6.53,
                                price: 10990,
                                working_time: 30,
                                case_material: "aluminum",
                                weight_gr: 198,
                                sim_2: true,
                                rating: 8.0,
                                colors: [ColorsEnum.purple, ColorsEnum.black, ColorsEnum.green]
                            },
                            {
                                name: "Redmi 8",
                                diagonal_mm: 6.22,
                                price: 9990,
                                working_time: 28,
                                case_material: "aluminum",
                                weight_gr: 198,
                                sim_2: true,
                                rating: 8.3,
                                colors: [ColorsEnum.red, ColorsEnum.black, ColorsEnum.dark_blue]
                            },
                            {
                                name: "Redmi 7",
                                diagonal_mm: 6.53,
                                price: 5990,
                                working_time: 30,
                                case_material: "aluminum",
                                weight_gr: 198,
                                sim_2: true,
                                rating: 8.3,
                                colors: [ColorsEnum.red, ColorsEnum.black, ColorsEnum.dark_blue]
                            },
                            {
                                name: "Redmi Note 9",
                                diagonal_mm: 6.22,
                                price: 14990,
                                working_time: 31,
                                case_material: "aluminum",
                                weight_gr: 198,
                                sim_2: true,
                                rating: 8.3,
                                colors: [ColorsEnum.green, ColorsEnum.grey, ColorsEnum.dark_blue, ColorsEnum.white]
                            },
                            {
                                name: "Redmi Note 9 Pro",
                                diagonal_mm: 6.67,
                                price: 23990,
                                working_time: 35,
                                case_material: "aluminum",
                                weight_gr: 198,
                                sim_2: true,
                                rating: 8.3,
                                colors: [ColorsEnum.green, ColorsEnum.grey, ColorsEnum.dark_blue, ColorsEnum.white]
                            },
                            {
                                name: "Redmi Note 8 Pro",
                                diagonal_mm: 6.53,
                                price: 19990,
                                working_time: 30,
                                case_material: "aluminum",
                                weight_gr: 198,
                                sim_2: true,
                                rating: 8.3,
                                colors: [ColorsEnum.green, ColorsEnum.red, ColorsEnum.grey, ColorsEnum.dark_blue, ColorsEnum.white]
                            }

                        ]
                    }
                ]
            },

            {
                name: "Часы",
                children: [
                    {

                    }
                ]
            },
            {
                name: "Наушники",
                children: [
                    {

                    }
                ]
            },


        ]

    }
    */
    ]
}
