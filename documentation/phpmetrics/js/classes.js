var classes = [
    {
        "name": "BASE\\MVC\\Controller",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "BASE\\Config",
            "fullClassName"
        ],
        "parents": [],
        "lcom": 1,
        "length": 51,
        "vocabulary": 22,
        "volume": 227.43,
        "difficulty": 6.56,
        "effort": 1492.52,
        "level": 0.15,
        "bugs": 0.08,
        "time": 83,
        "intelligentContent": 34.66,
        "number_operators": 16,
        "number_operands": 35,
        "number_operators_unique": 6,
        "number_operands_unique": 16,
        "cloc": 17,
        "loc": 37,
        "lloc": 20,
        "mi": 97.95,
        "mIwoC": 54.58,
        "commentWeight": 43.37,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 5,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 5,
        "package": "BASE\\MVC\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "BASE\\MVC\\Local",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "BASE\\MVC\\Uri",
            "BASE\\Config",
            "BASE\\Config"
        ],
        "parents": [],
        "lcom": 1,
        "length": 21,
        "vocabulary": 8,
        "volume": 63,
        "difficulty": 6,
        "effort": 378,
        "level": 0.17,
        "bugs": 0.02,
        "time": 21,
        "intelligentContent": 10.5,
        "number_operators": 9,
        "number_operands": 12,
        "number_operators_unique": 4,
        "number_operands_unique": 4,
        "cloc": 10,
        "loc": 31,
        "lloc": 21,
        "mi": 96.42,
        "mIwoC": 57.89,
        "commentWeight": 38.53,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 5,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 5,
        "package": "BASE\\MVC\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "BASE\\MVC\\Uri",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getUri",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocalCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "BASE\\Helper\\RegExp"
        ],
        "parents": [],
        "lcom": 3,
        "length": 34,
        "vocabulary": 13,
        "volume": 125.81,
        "difficulty": 6.56,
        "effort": 825.66,
        "level": 0.15,
        "bugs": 0.04,
        "time": 46,
        "intelligentContent": 19.17,
        "number_operators": 13,
        "number_operands": 21,
        "number_operators_unique": 5,
        "number_operands_unique": 8,
        "cloc": 20,
        "loc": 47,
        "lloc": 27,
        "mi": 95.89,
        "mIwoC": 53.54,
        "commentWeight": 42.36,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 5.33,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 16,
        "package": "BASE\\MVC\\",
        "pageRank": 0.11,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "BASE\\MVC\\Routes",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseRoutes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getControllerByUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoutes",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 4,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 27,
        "ccn": 23,
        "ccnMethodMax": 17,
        "externals": [
            "BASE\\Helper\\RegExp",
            "RuntimeException",
            "BASE\\Config",
            "RuntimeException",
            "BASE\\MVC\\object",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "BASE\\Helper\\RegExp",
            "RuntimeException",
            "RuntimeException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 177,
        "vocabulary": 48,
        "volume": 988.54,
        "difficulty": 16.05,
        "effort": 15868.64,
        "level": 0.06,
        "bugs": 0.33,
        "time": 882,
        "intelligentContent": 61.58,
        "number_operators": 55,
        "number_operands": 122,
        "number_operators_unique": 10,
        "number_operands_unique": 38,
        "cloc": 46,
        "loc": 133,
        "lloc": 87,
        "mi": 73.14,
        "mIwoC": 33.63,
        "commentWeight": 39.51,
        "kanDefect": 1.82,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.23,
        "relativeSystemComplexity": 26.23,
        "totalStructuralComplexity": 125,
        "totalDataComplexity": 6.17,
        "totalSystemComplexity": 131.17,
        "package": "BASE\\MVC\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "BASE\\MVC\\Links",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 12,
        "ccnMethodMax": 9,
        "externals": [
            "InvalidArgumentException",
            "RuntimeException",
            "BASE\\Helper\\RegExp",
            "RuntimeException",
            "RuntimeException"
        ],
        "parents": [],
        "lcom": 2,
        "length": 94,
        "vocabulary": 31,
        "volume": 465.69,
        "difficulty": 10.61,
        "effort": 4940.41,
        "level": 0.09,
        "bugs": 0.16,
        "time": 274,
        "intelligentContent": 43.9,
        "number_operators": 33,
        "number_operands": 61,
        "number_operators_unique": 8,
        "number_operands_unique": 23,
        "cloc": 25,
        "loc": 75,
        "lloc": 50,
        "mi": 81.64,
        "mIwoC": 42.64,
        "commentWeight": 38.99,
        "kanDefect": 1.33,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 3.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 4.5,
        "totalSystemComplexity": 6.5,
        "package": "BASE\\MVC\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "BASE\\Config",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "loadXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHostParameter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAppDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAppDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 10,
        "ccnMethodMax": 4,
        "externals": [
            "RuntimeException",
            "http\\Exception\\InvalidArgumentException",
            "http\\Exception\\RuntimeException"
        ],
        "parents": [],
        "lcom": 4,
        "length": 51,
        "vocabulary": 21,
        "volume": 224.01,
        "difficulty": 6,
        "effort": 1344.05,
        "level": 0.17,
        "bugs": 0.07,
        "time": 75,
        "intelligentContent": 37.33,
        "number_operators": 21,
        "number_operands": 30,
        "number_operators_unique": 6,
        "number_operands_unique": 15,
        "cloc": 44,
        "loc": 94,
        "lloc": 50,
        "mi": 88.75,
        "mIwoC": 45.14,
        "commentWeight": 43.62,
        "kanDefect": 0.8,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 3.25,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 9,
        "totalSystemComplexity": 13,
        "package": "BASE\\",
        "pageRank": 0.24,
        "afferentCoupling": 4,
        "efferentCoupling": 3,
        "instability": 0.43,
        "violations": {}
    },
    {
        "name": "BASE\\MVC",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "BASE\\Config",
            "BASE\\MVC\\Uri",
            "BASE\\MVC\\Local",
            "BASE\\MVC\\Routes",
            "BASE\\MVC\\Links",
            "BASE\\MVC\\Controller"
        ],
        "parents": [],
        "lcom": 1,
        "length": 29,
        "vocabulary": 12,
        "volume": 103.96,
        "difficulty": 3.33,
        "effort": 346.55,
        "level": 0.3,
        "bugs": 0.03,
        "time": 19,
        "intelligentContent": 31.19,
        "number_operators": 9,
        "number_operands": 20,
        "number_operators_unique": 3,
        "number_operands_unique": 9,
        "cloc": 11,
        "loc": 36,
        "lloc": 25,
        "mi": 92.75,
        "mIwoC": 54.98,
        "commentWeight": 37.77,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 49,
        "totalStructuralComplexity": 49,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 49,
        "package": "BASE\\",
        "pageRank": 0.05,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "BASE\\Helper\\RegExp",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getLocalCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRexExp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.5,
        "effort": 3.17,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 12.68,
        "number_operators": 2,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 18,
        "loc": 30,
        "lloc": 12,
        "mi": 117.31,
        "mIwoC": 70.71,
        "commentWeight": 46.6,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "   BASE\\Helper\\",
        "pageRank": 0.34,
        "afferentCoupling": 3,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    }
]