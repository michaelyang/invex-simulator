const marketReturnByMonth = [
  711678.159224191,
  -6180168.88528341,
  8300453.55654705,
  4247944.24573182,
  -2813525.57247692,
  -2798775.76606804,
  715365.610826373,
  -12887643.349681,
  -4332755.63258232,
  7179468.26947896,
  -3204395.44230978,
  -1146797.44828346,
  6939783.91533609,
  3772262.98904833,
  -202809.838120878,
  -822301.707290098,
  -7485526.75246137,
  313433.386186764,
  1910099.92993847,
  176997.676905498,
  4399129.76142184,
  -4539252.92230542,
  1500792.80209444,
  3565765.69932522,
  -2157159.18728568,
  3665326.89258447,
  -1703602.64021535,
  -2828275.37888564,
  2120284.67126368,
  -7079907.07621965,
  2109222.31645709,
  1382794.35082413,
  3381393.11921525,
  2212470.96131863,
  980862.126184568,
  -1965411.70397142,
  -4185257.56849442,
  2035473.28441316,
  -110623.548065946,
  -1025111.54541101,
  1699915.18861321,
  228621.999336228,
  3362955.86120436,
  -1574541.83413844,
  -3185958.18429889,
  -2330469.41258897,
  1198421.77071425,
  -3558390.79612079,
  2149784.28408125,
  582617.353147283,
  2146096.83247903,
  3370330.76440878,
  -2223533.31612524,
  -2994210.7009846,
  -2938898.92695156,
  -4240569.34252737,
  1441793.57645929,
  4683063.53479107,
  -1906412.4783362,
  -1423356.31844832,
  -3053209.92661974,
  932925.255356014,
  4141008.14926799,
  -243371.80574511,
  -578929.901545048,
  188060.03171207,
  2706589.47601312,
  1987536.41358453,
  228621.999336258,
  -575242.449942872,
  -615804.417567059,
  2120284.67126369,
  2979460.89457576,
  726427.965632945,
  3901323.7951252,
  2422655.7026439,
  6438290.49743715,
  2614403.18595815,
  1047236.25502412,
  -2330469.41258895,
  2946273.83015597,
  6379291.27180202,
  -3067959.73302849,
  -188060.031712085,
  3185958.18429886,
  -7566650.68770964,
  645304.030384585,
  3300269.18396695,
  -4660938.82517789,
  -4152070.50407459,
  -814926.804085732,
  966112.319775775,
  162247.870496675,
  -13459198.3480216,
  2706589.47601318,
  -3455142.15125929,
  8816696.78085473,
  -770677.384859368,
  -2699214.57280871,
  3112209.15225488,
  -7754710.7194218,
  5018621.63059103,
  -4115195.98805264,
  -2706589.47601308,
  5365242.08119771,
  837051.513698891,
  353995.353810951,
  6264980.2721339,
  -3407205.28043072,
  -6087982.5952284,
  -11504848.9988568,
  7865334.26748765,
];

const strategyReturnByMonth = [
  -592084.300000005,
  3874327.4,
  95150.6499999877,
  -2453238.55000001,
  3469412.5,
  2199036.70000001,
  2200909.69999999,
  7825986.25,
  -171264.45,
  2177888.7,
  654824.4,
  541200.400000001,
  -2395431.69999999,
  -1113224.3,
  -1998478.49999999,
  2185826.10000001,
  2870947.70000001,
  175136.400000001,
  4586061.7,
  -222137.500000004,
  2020288.4,
  2697387.5,
  -1456831.6,
  3950071.80000002,
  410034.750000006,
  -938088.450000003,
  -170422.200000003,
  211550.549999993,
  -2297021.6,
  11112880.55,
  -817434.85,
  568168.400000007,
  4729351.69999999,
  -1373787.25000001,
  4914324.15,
  1696598.04999999,
  4333006.9,
  -1630958,
  2414704.15,
  461514.450000019,
  683290.949999996,
  -1722173.6,
  -287025.400000004,
  -2865882,
  3812432.14999999,
  6875424.24999999,
  -1650002.29999999,
  5086884.00000001,
  -1556913.3,
  502914.749999994,
  225437.55,
  -1602505.15,
  687503.400000003,
  2799862.80000001,
  3480145.89999999,
  2228132.30000001,
  -2630421.25,
  788730.800000005,
  2955305.50000001,
  3619821.00000001,
  3064458.1,
  583689.000000006,
  -1252058.65,
  1625361.54999999,
  -82730.3000000031,
  4056440.75,
  -127587.799999997,
  834651.900000005,
  -876954.149999993,
  2249986.29999999,
  -2253829.45,
  3113278.6,
  2068362.19999999,
  -475052.649999998,
  -2641409.8,
  -575184.700000004,
  8761816.55,
  -1889479.8,
  -300154.299999983,
  5490277,
  -139742.400000009,
  6673006.90000001,
  52921.3999999967,
  -2741635.9,
  -1404992.80000002,
  8690604.75,
  -1210975.64999999,
  -980818.349999986,
  301607.949999999,
  75795.7000000057,
  -1937453.85,
  -2097689.45000001,
  796840.299999984,
  20144322.25,
  -343521.249999993,
  -329426.600000006,
  260484.100000006,
  -899836.049999997,
  1013085.75000001,
  -1550511.5,
  9343386.9,
  -1544936.75,
  -115620.74999998,
  7610691.2,
  4863848.19999998,
  405607.599999991,
  -1207960.2,
  399106.600000006,
  -1758425.30000001,
  260252.300000003,
  6394294.7,
  1282377.6,
];

const simulationTypes = {
  RANDOM: 'random',
  ROLLING: 'rolling',
};

const graphTypes = {
  ROLLING12MARKET: 'rolling12market',
  ROLLING12STRATEGY: 'rolling12strategy',
  RANDOM12MARKET: 'random12market',
  RANDOM12STRATEGY: 'random12strategy',
};

const graphTypesTitleMap = {
  [graphTypes.ROLLING12MARKET]: 'Market Return (Rolling 12)',
  [graphTypes.ROLLING12STRATEGY]: 'Strategy Return (Rolling 12)',
  [graphTypes.RANDOM12MARKET]: 'Market Return (Random 12)',
  [graphTypes.RANDOM12STRATEGY]: 'Strategy Return (Random 12)',
};

const graphTypesColorMap = {
  [graphTypes.ROLLING12MARKET]: 'Market Return (Rolling 12)',
  [graphTypes.ROLLING12STRATEGY]: 'Market Return (Rolling 12)',
  [graphTypes.RANDOM12MARKET]: 'Market Return (Random 12)',
  [graphTypes.RANDOM12STRATEGY]: 'Market Return (Rolling 12)',
};

const inputFields = document.querySelectorAll(`input[type=number]`);

const submitButton = document.querySelector(`button[type=submit]`);
submitButton.addEventListener('click', handleSubmit);

function handleSubmit() {
  const [
    rolling12MarketAmount,
    rolling12StrategyAmount,
    random12MarketAmount,
    random12StrategyAmount,
    minY,
    maxY,
  ] = Array.from(inputFields.values()).map((data) => parseFloat(data.value));
  const { rolling12MarketReturnData, rolling12StrategyReturnData } = createHCData(
    simulationTypes.ROLLING,
    rolling12MarketAmount,
    rolling12StrategyAmount
  );
  const { random12MarketReturnData, random12StrategyReturnData } = createHCData(
    simulationTypes.RANDOM,
    random12MarketAmount,
    random12StrategyAmount
  );
  updateHC(rolling12MarketReturnData, graphTypes.ROLLING12MARKET, minY, maxY);
  updateHC(rolling12StrategyReturnData, graphTypes.ROLLING12STRATEGY, minY, maxY);
  updateHC(random12MarketReturnData, graphTypes.RANDOM12MARKET, minY, maxY);
  updateHC(random12StrategyReturnData, graphTypes.RANDOM12STRATEGY, minY, maxY);
}

function createHCData(simulationType, marketAmount, strategyAmount) {
  if (simulationType === simulationTypes.ROLLING) {
    return getRolling12Data(marketAmount, strategyAmount);
  }
  if (simulationType === simulationTypes.RANDOM) {
    return getRandom12Data(marketAmount, strategyAmount);
  }
}

// Returns rolling 12 month data
function getRolling12Data(marketInitialAmount, strategyInitialAmount) {
  let rolling12MarketReturnData = [];
  let rolling12StrategyReturnData = [];
  if (marketReturnByMonth.length !== strategyReturnByMonth.length) {
    return;
  }
  // Take each rolling 12 months
  for (let i = 0; i <= marketReturnByMonth.length - 12; i++) {
    const marketReturnSimulatedYearData = marketReturnByMonth.slice(i, i + 12);
    const strategyReturnSimulatedYearData = strategyReturnByMonth.slice(i, i + 12);
    rolling12MarketReturnData.push({
      name: `Trial ${i}`,
      data: [marketInitialAmount, ...marketReturnSimulatedYearData]
        .reduce((prev, curr, i) => (prev.length > 0 ? [...prev, curr + prev[i - 1]] : [curr]), [])
        .map((amount) => (amount - marketInitialAmount) / marketInitialAmount),
    });
    rolling12StrategyReturnData.push({
      name: `Trial ${i}`,
      data: [strategyInitialAmount, ...strategyReturnSimulatedYearData]
        .reduce((prev, curr, i) => (prev.length > 0 ? [...prev, curr + prev[i - 1]] : [curr]), [])
        .map((amount) => (amount - strategyInitialAmount) / strategyInitialAmount),
    });
  }
  return { rolling12MarketReturnData, rolling12StrategyReturnData };
}

// Returns random 12 month data
function getRandom12Data(marketInitialAmount, strategyInitialAmount) {
  let random12MarketReturnData = [];
  let random12StrategyReturnData = [];
  if (marketReturnByMonth.length !== strategyReturnByMonth.length) {
    return;
  }
  // Take each random 12 months
  for (let i = 0; i <= marketReturnByMonth.length - 12; i++) {
    const marketReturnSimulatedYearData = [];
    const strategyReturnSimulatedYearData = [];
    for (let month = 0; month < 12; month++) {
      const randomMonth = Math.floor(Math.random() * marketReturnByMonth.length);
      marketReturnSimulatedYearData.push(marketReturnByMonth[randomMonth]);
      strategyReturnSimulatedYearData.push(strategyReturnByMonth[randomMonth]);
    }
    random12MarketReturnData.push({
      name: `Trial ${i}`,
      data: [marketInitialAmount, ...marketReturnSimulatedYearData]
        .reduce((prev, curr, i) => (prev.length > 0 ? [...prev, curr + prev[i - 1]] : [curr]), [])
        .map((amount) => (amount - marketInitialAmount) / marketInitialAmount),
    });
    random12StrategyReturnData.push({
      name: `Trial ${i}`,
      data: [strategyInitialAmount, ...strategyReturnSimulatedYearData]
        .reduce((prev, curr, i) => (prev.length > 0 ? [...prev, curr + prev[i - 1]] : [curr]), [])
        .map((amount) => (amount - strategyInitialAmount) / strategyInitialAmount),
    });
  }
  return { random12MarketReturnData, random12StrategyReturnData };
}

function updateHC(data, graphType, minY, maxY) {
  if (!Highcharts.Series.prototype.renderCanvas) {
    throw 'Module not loaded';
  }

  Highcharts.chart(graphType, {
    chart: {
      zoomType: 'xy',
      height: '60%',
    },
    boost: {
      useGPUTranslations: true,
      usePreAllocated: true,
    },
    xAxis: {
      min: 0,
      max: 12,
      gridLineWidth: 1,
      title: {
        text: 'Month',
      },
    },
    yAxis: [
      {
        labels: {
          formatter: function () {
            return this.value * 100 + '%';
          },
        },
        minPadding: 0,
        maxPadding: 0.05,
        title: {
          text: 'Return',
        },
        min: minY,
        max: maxY,
      },
      {
        labels: {
          formatter: function () {
            return this.value * 100 + '%';
          },
        },
        linkedTo: 0,
        opposite: true,
        title: {
          text: null,
        },
      },
    ],
    title: {
      text: graphTypesTitleMap[graphType],
    },
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: data,
  });
}

handleSubmit();
