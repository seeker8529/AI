const ColorsEnum =
    Object.freeze({"red":1, "green":2, "dark_blue":3, "grey":4,
        "white": 5, "golden": 6, "black": 7, "pink": 8, "purple": 9, "yellow":10})


let treedata = {
    name: "Смартфоны и аксессуары",
    children: [
        {
            name: "Смартфоны",
            children: [
                {
                    name: "Apple",
                    children: [
                        {
                            name: "iPhone XR",
                            diagonal_mm: 154.94,
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
                            diagonal_mm: 119.4,
                            price: 35789,
                            working_time: 40,
                            case_material: "aluminum",
                            colors: [ColorsEnum.black, ColorsEnum.red],
                            weight_gr: 148,
                            rating: 9.5,
                            sim_2: false
                        },
                        {
                            name: "iPhone 11",
                            diagonal_mm: 154.9,
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
                            diagonal_mm: 147.32,
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
                            diagonal_mm: 165.1,
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
                            diagonal_mm: 165.1,
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
                            diagonal_mm: 137.2,
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
                            diagonal_mm: 154.9,
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
                            diagonal_mm: 170.2,
                            price: 109990,
                            working_time: 80,
                            case_material: "aluminum & matt glass",
                            colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.red, ColorsEnum.grey],
                            weight_gr: 226,
                            rating: 9.5,
                            sim_2: false
                        }
                    ]
                },
                {
                    name: "Xiaomi",
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
                    name: "Samsung",
                    children: [
                        {
                            name: "Samsung Galaxy Z",
                            children: [
                                {
                                    name: "Galaxy Z Flip",
                                    diagonal_mm: 170.2,
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
                                    diagonal_mm: 193.04,
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
                                    name: "Galaxy S20 FE",
                                    diagonal_mm: 158.3,
                                    price: 49990,
                                    working_time: 18,
                                    case_material: "aluminum",
                                    weight_gr: 213,
                                    sim_2: true,
                                    rating: 9.3,
                                    colors: [ColorsEnum.dark_blue, ColorsEnum.pink],
                                    is_folding: false
                                },
                                {
                                    name: "Galaxy S10 Lite",
                                    diagonal_mm: 169.5,
                                    price: 44990,
                                    working_time: 17,
                                    case_material: "aluminum",
                                    weight_gr: 186,
                                    sim_2: true,
                                    rating: 9.6,
                                    colors: [ColorsEnum.dark_blue, ColorsEnum.black],
                                    is_folding: false
                                },
                                {
                                    name: "Galaxy S20+",
                                    diagonal_mm: 169.5,
                                    price: 99990,
                                    working_time: 15,
                                    case_material: "aluminium",
                                    weight_gr: 186,
                                    sim_2: true,
                                    rating: 9.3,
                                    colors: [ColorsEnum.red, ColorsEnum.black],
                                    is_folding: false
                                }
                            ]
                        },
                        {
                            name: "Samsung Galaxy A",
                            children: [
                                {
                                    name: "Galaxy A01 Core",
                                    diagonal_mm: 134.8,
                                    price: 6490,
                                    working_time: 14,
                                    case_material: "aluminium",
                                    weight_gr: 150,
                                    sim_2: true,
                                    rating: 9.3,
                                    colors: [ColorsEnum.red, ColorsEnum.dark_blue, ColorsEnum.black],
                                    is_folding: false
                                },
                                {
                                    name: "Galaxy A21",
                                    diagonal_mm: 134.8,
                                    price: 16490,
                                    working_time: 23,
                                    case_material: "aluminium",
                                    weight_gr: 192,
                                    sim_2: true,
                                    rating: 9.3,
                                    colors: [ColorsEnum.red, ColorsEnum.purple, ColorsEnum.dark_blue, ColorsEnum.black],
                                    is_folding: false
                                },
                                {
                                    name: "Galaxy A11",
                                    diagonal_mm: 162.4,
                                    price: 9990,
                                    working_time: 12,
                                    case_material: "aluminium",
                                    weight_gr: 177,
                                    sim_2: true,
                                    rating: 8.3,
                                    colors: [ColorsEnum.red, ColorsEnum.dark_blue, ColorsEnum.black],
                                    is_folding: false
                                },
                                {
                                    name: "Galaxy A41",
                                    diagonal_mm: 155,
                                    price: 20490,
                                    working_time: 16,
                                    case_material: "aluminium",
                                    weight_gr: 152,
                                    sim_2: true,
                                    rating: 8.9,
                                    colors: [ColorsEnum.red, ColorsEnum.white, ColorsEnum.black],
                                    is_folding: false
                                }
                            ]
                        },
                        {
                            name: "Samsung Galaxy M",
                            children: [
                                {
                                    name: "Galaxy M51",
                                    diagonal_mm: 169.5,
                                    price: 32990,
                                    working_time: 14,
                                    case_material: "aluminum",
                                    weight_gr: 213,
                                    sim_2: true,
                                    rating: 9.6,
                                    colors: [ColorsEnum.dark_blue, ColorsEnum.black],
                                    is_folding: false
                                },
                                {
                                    name: "Galaxy M31s",
                                    diagonal_mm: 164.0,
                                    price: 24990,
                                    working_time: 12,
                                    case_material: "aluminum",
                                    weight_gr: 203,
                                    sim_2: true,
                                    rating: 9.8,
                                    colors: [ColorsEnum.dark_blue, ColorsEnum.red, ColorsEnum.black],
                                    is_folding: false
                                }
                                ,
                                {
                                    name: "Galaxy M01",
                                    diagonal_mm: 145.1,
                                    price: 9990,
                                    working_time: 16,
                                    case_material: "aluminum",
                                    weight_gr: 168,
                                    sim_2: true,
                                    rating: 9.8,
                                    colors: [ColorsEnum.dark_blue, ColorsEnum.red, ColorsEnum.black],
                                    is_folding: false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Аксессуары",
            children: [
                {
                    name: "Часы",
                    children: [
                        {
                            name: "Apple",
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
                                            use_with: "iOS"
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
                                            use_with: "iOS"

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
                                            use_with: "iOS"
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
                                            use_with: "iOS"
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
                                            use_with: "iOS"
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
                                            use_with: "iOS"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Xiaomi",
                            children: [
                                {
                                    name: "Amazfit",
                                    children: [
                                        {
                                            name: "Amazfit Bip U",
                                            display_alw_on: false,
                                            diagonal_mm: 25.4,
                                            price: 4990,
                                            working_time: 9*24,
                                            rating: 9.6,
                                            colors: [ColorsEnum.green, ColorsEnum.black, ColorsEnum.pink],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Amazfit GTR 2",
                                            display_alw_on: true,
                                            diagonal_mm: 35.306,
                                            price: 15490,
                                            working_time: 38*24,
                                            rating: 9.6,
                                            colors: [ColorsEnum.black],
                                            case_material: "stainless steel",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Amazfit Bip S Lite",
                                            display_alw_on: false,
                                            diagonal_mm: 32.512,
                                            price: 4790,
                                            working_time: 30*24,
                                            rating: 9.76,
                                            colors: [ColorsEnum.pink, ColorsEnum.black, ColorsEnum.dark_blue],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Amazfit GTS",
                                            display_alw_on: false,
                                            diagonal_mm: 41.91,
                                            price: 9990,
                                            working_time: 45*24,
                                            rating: 9.6,
                                            colors: [ColorsEnum.pink, ColorsEnum.green, ColorsEnum.golden, ColorsEnum.black, ColorsEnum.dark_blue],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        }
                                    ]
                                },
                                {
                                    name: "Mi Smart Band",
                                    children: [
                                        {
                                            name: "Mi Smart Band 5",
                                            display_alw_on: false,
                                            diagonal_mm: 27.94,
                                            price: 3290,
                                            working_time: 2*24,
                                            rating: 9.4,
                                            colors: [ColorsEnum.black],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Mi Smart Band 4",
                                            display_alw_on: false,
                                            diagonal_mm: 24.1,
                                            price: 3490,
                                            working_time: 2*24,
                                            rating: 9.3,
                                            colors: [ColorsEnum.black],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Mi Smart Band 3",
                                            display_alw_on: false,
                                            diagonal_mm: 19.8,
                                            price: 2290,
                                            working_time: 2*24,
                                            rating: 9.6,
                                            colors: [ColorsEnum.black],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Samsung",
                            children: [
                                {
                                    name: "Galaxy Watch Active",
                                    children: [
                                        {
                                            name: "Active2 steel",
                                            display_alw_on: true,
                                            diagonal_mm: 34.5,
                                            price: 31990,
                                            working_time: 131,
                                            rating: 8.6,
                                            colors: [ColorsEnum.black, ColorsEnum.pink],
                                            case_material: "steel",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Active2 aluminum",
                                            display_alw_on: true,
                                            diagonal_mm: 34.5,
                                            price: 24990,
                                            working_time: 131,
                                            rating: 9.4,
                                            colors: [ColorsEnum.black, ColorsEnum.pink],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Active",
                                            display_alw_on: false,
                                            diagonal_mm: 28.1,
                                            price: 16990,
                                            working_time: 90,
                                            rating: 9.2,
                                            colors: [ColorsEnum.black, ColorsEnum.pink, ColorsEnum.green],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        }
                                    ]
                                },
                                {
                                    name: "Galaxy Watch 3",
                                    children: [
                                        {
                                            name: "Watch3 titanium",
                                            display_alw_on: false,
                                            diagonal_mm: 34.5,
                                            price: 49990,
                                            working_time: 120,
                                            rating: 9.2,
                                            colors: [ColorsEnum.black],
                                            case_material: "titanium",
                                            use_with: "Android, iOS"
                                        },
                                        {
                                            name: "Watch3",
                                            display_alw_on: false,
                                            diagonal_mm: 30.2,
                                            price: 29990,
                                            working_time: 90,
                                            rating: 9.2,
                                            colors: [ColorsEnum.black, ColorsEnum.pink],
                                            case_material: "aluminum",
                                            use_with: "Android, iOS"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                {
                    name: "Наушники",
                    children: [
                        {
                            name: "Apple",
                            children: [
                                {
                                    name: "AirPods",
                                    use_with: "iOS",
                                    is_vacuum: false,
                                    working_time: 5,
                                    price: 13990,
                                    height_mm: 40.5,
                                    rating: 9.5,
                                    colors: [ColorsEnum.white]
                                },
                                {
                                    name: "AirPods Pro",
                                    use_with: "iOS",
                                    is_vacuum: true,
                                    working_time: 4.5,
                                    height_mm: 30.9,
                                    rating: 9.5,
                                    price: 20990,
                                    colors: [ColorsEnum.white, ColorsEnum.black]
                                },
                                {
                                    name: "AirPods Max",
                                    use_with: "iOS",
                                    is_vacuum: false,
                                    working_time: 20,
                                    height_mm: 83.4,
                                    rating: 9.5,
                                    price: 62990,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.pink]
                                }
                            ]
                        },
                        {
                            name: "Xiaomi",
                            children: [
                                {
                                    name: "Mi True Wireless Earphones Lite",
                                    use_with: "Android",
                                    is_vacuum: true,
                                    working_time: 4,
                                    price: 3590,
                                    height_mm: 40.5,
                                    rating: 7.5,
                                    colors: [ColorsEnum.white]
                                },
                                {
                                    name: "Xiaomi Mi True Wireless Earphones 2S",
                                    use_with: "Android",
                                    is_vacuum: false,
                                    working_time: 4,
                                    price: 6990,
                                    height_mm: 43.5,
                                    rating: 7.3,
                                    colors: [ColorsEnum.white]
                                },
                                {
                                    name: "Xiaomi Mi True Wireless Earphones",
                                    use_with: "Android",
                                    is_vacuum: true,
                                    working_time: 3,
                                    price: 5990,
                                    height_mm: 42.5,
                                    rating: 7.3,
                                    colors: [ColorsEnum.white]
                                },
                                {
                                    name: "Xiaomi Mi True Wireless Earphones 2 Basic",
                                    use_with: "Android",
                                    is_vacuum: false,
                                    working_time: 4,
                                    price: 3990,
                                    height_mm: 41.7,
                                    rating: 8.2,
                                    colors: [ColorsEnum.white]
                                }
                            ]
                        },
                        {
                            name: "Samsung",
                            children: [
                                {
                                    name: "Galaxy Buds Live",
                                    use_with: "Android, iOS",
                                    is_vacuum: true,
                                    working_time: 6,
                                    price: 13990,
                                    height_mm: 20.5,
                                    rating: 9.5,
                                    colors: [ColorsEnum.golden, ColorsEnum.pink, ColorsEnum.dark_blue, ColorsEnum.black, ColorsEnum.red]
                                },
                                {
                                    name: "Galaxy Buds+",
                                    use_with: "Android, iOS",
                                    is_vacuum: true,
                                    working_time: 11,
                                    price: 10990,
                                    height_mm: 22.5,
                                    rating: 8.8,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.purple, ColorsEnum.red]
                                },
                                {
                                    name: "Galaxy Buds",
                                    use_with: "Android, iOS",
                                    is_vacuum: true,
                                    working_time: 6,
                                    price: 9990,
                                    height_mm: 22.5,
                                    rating: 8.5,
                                    colors: [ColorsEnum.white, ColorsEnum.black, ColorsEnum.purple, ColorsEnum.yellow]
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
};

let userdata=[
    {name: "Nika", history: ["iPhoneXR", "AirPods Pro"], disliked: [], not_interesting: []}
];

