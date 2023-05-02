$("document").ready(() => {
    Echart_left_bot();
});

function Echart_left_bot() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bot-part .left-bot .left-bot-chart"));
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            color: "#dddc6b",
          },
        },
      },
      legend: {
        top: "0%",
        data: ["Data1", "Data2"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true,
      },
  
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)",
            },
          },
  
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
          ],
        },
        {
          axisPointer: { show: false },
          axisLine: { show: false },
          position: "bottom",
          offset: 20,
        },
      ],
  
      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
          },
  
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "Data1",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "#0184d5",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
          },
          data: [
            3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2,
            4,
          ],
        },
        {
          name: "Data2",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "#00d887",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
          },
          data: [
            5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1,
            4,
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_1() {
    var myChart = echarts.init(document.getElementById('echarts_1'));
    var data = [
        {value: 1200,name: '类1'},
        {value: 203,name: '类2'},
        {value: 146,name: '类3'},

    ];
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b}:<br/>{c}({d}%)"
        },
        grid: {
          top: '100%',
          left: '50%',
          right: '50%',
          containLabel: true,
        },
        color: [ '#20b9cf', '#2089cf', '#205bcf'],
        legend: { 
            x: 'center',
            y: 'center',
            orient: 'vertical',
            itemGap: 2  ,
            itemWidth: 12,
            itemHeight: 12,
            icon: 'rect',
            data: ['类1', '类2', '类3'],
            textStyle: {
                color: [],
                fontStyle: 'normal',
                fontSize: 10,
            }
        },
        series: [{
            name: '123',
            type: 'pie',
            clockwise: false, 
            minAngle: 20, 
            center: ['50%', '50%'], 
            radius: [30, 40], 
            itemStyle: { 
                normal: {
                    borderColor: 'transparent',
                    borderWidth: 1,
                },
            },
            label: { 
                normal: {
                    show: true,
                    position: 'inside', 
                    formatter: "{d}%",
                    textStyle: {
                        color: '#fff',
                        fontSize:10,
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            },
            data: data
        }, {
            name: '',
            type: 'pie',
            clockwise: false,
            silent: true,
            minAngle: 20, 
            // center: ['35%', '50%'], 
            radius: [0, 20], 
            itemStyle: {
                normal: {
                    borderColor: '#1e2239',
                    borderWidth: 1,
                    opacity: 0.21,
                }
            },
            label: { 
                normal: {
                    show: true,
                }
            },
            data: data
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
function echarts_2() {
    var myChart = echarts.init(document.getElementById('echarts_2'));

    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{c}"
        },
        grid: {
            left: "10",
            top: "10",
            right: "11",
            bottom: "10",
            containLabel: false,
        },
        width:'100%',
        height: '100%',
        legend: {
            // x: '0',
            // y: '0',
            top: "0%",
            left: "0%",
            right: "10%",
            itemHeight: 8,
            itemWidth: 8,
            data: ['类1', '类2', '类3', '类4'],
            icon: 'circle',
            textStyle: {
                color: '#fff',
                fontSize: 8,
            },
            center: ['0%', '50%'],
            // textSize: 5
        },
        calculable: true,
        series: [{
            name: 'name',
            type: 'pie',
            startAngle: 50,
            radius: [30, 40],
            center: ['30%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 0,
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 502,
                name: '类1',
                itemStyle: {
                    normal: {
                        color: '#33b565'
                    }
                }
            },
                {
                    value: 205,
                    name: '类2',
                    itemStyle: {
                        normal: {
                            color: '#20cc98'
                        }
                    }
                },
                {
                    value: 301,
                    name: '类3',
                    itemStyle: {
                        normal: {
                            color: '#2089cf'
                        }
                    }
                },
                {
                    value: 541,
                    name: '类4',
                    itemStyle: {
                        normal: {
                            color: '#205bcf'
                        }
                    }
                },
               
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            ]
        }],

    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
    // myChart.resize({width:220,height:240});
}
function echarts_5() {
    var myChart = echarts.init(document.getElementById('echarts_5'));
    var xData = function() {
        var data = ['NO.1','NO.2','NO.3','NO.4','NO.5'];
        return data;
    }();
    var data = [23, 22, 20, 30, 22]
    option = {
        tooltip: {
            show: "true",
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.4)', 
            padding: [8, 10], 
            formatter: function(params) {
                if (params.seriesName != "") {
                    return params.name + ' 数量  ' + params.value + ' 个';
                }
            },

        },
        grid: {
            borderWidth: 0,
            top: 20,
            bottom: 35,
            left:40,
            right:10,
            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',

            axisTick: {
                show: false
            },
             
            axisLine: {
                show: true,
                lineStyle: {
                     color:'rgba(255,255,255,0.2)',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },

            },
            data: xData,
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xData,
        }],
        yAxis: {
            min:10,
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: '{value}',
            },
        },
        series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c0e9'
                    }, {
                        offset: 1,
                        color: '#3b73cf'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '20%',
            data: data,
        },
            {
                name: '',
                type: 'bar',
                xAxisIndex: 1,
                zlevel: 1,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 0,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
                barWidth: '20%',
                data: [30, 30, 30, 30, 30]
            }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
function echarts_3(){
    	// 需要展示的数据
        let resData = [{name:'数据1',value:80},{name:'数据2',value:40},{name:'数据3',value:60}]
        let name = resData.map((item)=>item.name) // 获取名称
        let value = resData.map((item)=>item.value) // 获取数值
        let sum = value.reduce((pre,cur)=>pre+=cur,0) // 总和
        let color = [ // 颜色
            ['#6fc1fb','#1971e7'],
            ['#983fff','#2c23ff'],
            ['#fff582','#59f9d2']
        ]
        let series = []
        let yAxis = []
        for(let i=0;i<resData.length;i++){
            series.push({
                type: 'pie',
                clockWise: true, //顺时加载
                hoverAnimation: false, // 鼠标移入变大
                radius: [60 - i*12 + '%',53 - i*12 + '%'], // 圆环
                center: ['50%','50%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 18
                    }
                },
                data: [{
                    name: resData[i].name,
                    value: resData[i].value,
                    itemStyle: {
                        normal: { // 渐变色
                            color: new echarts.graphic.LinearGradient(0,1,0,0,[{
                                offset: 0,
                                color: color[i][0]
                            },{
                                offset: 1,
                                color: color[i][1]
                            }])
                        }
                    },
                },{ // 阴影段
                    name: '',
                    value: sum - resData[i].value,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    tooltip: { // 不显示提示框
                        show: false
                    },
                    hoverAnimation: false // 鼠标移入变大
                }]
            })
            series.push({
                name: '',
                type: 'pie',
                clockWise: true, //顺时加载
                z: 1, // 层级，默认为 2，z小的会被z大的覆盖住
                hoverAnimation: true, // 鼠标移入变大
                radius: [60 - i*12 + '%',53 - i*12 + '%'], // 圆环
                center: ['50%','50%'], // 位置
                label: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 18
                    }
                },
                data: [{ // 阴影的75%
                    value: 7.5,
                    itemStyle: {
                        normal: {
                            color: 'rgba(1,179,238,0.1)'
                        }
                    },
                    tooltip: {
                        show: false
                    },
                },{ // 阴影的最后25%，透明
                    value: 2.5,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0
                        }
                    },
                    tooltip: {
                        show: false
                    },
                }]
            })
            yAxis.push(resData[i].name)
        }
        let myChart = echarts.init(document.getElementById('echarts_3'))
        let option = {
            legend: {
                show: true,
                x: 'center',
                top: '0%',
                itemGap: 3,
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    fontSize: 7,
                    color: '#fff'
                },
                data: name,
            },
            grid: {
                top: '13%',
                left: '55%',
                width: '35%',
                height: '30%',
                containlabel: false
            },
            xAxis: [{ // x轴隐藏
                show: false
            }],
            yAxis: [{ // y轴配置
                type: 'category',
                asisLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: '#fff',
                        fontSize: 8
                    }
                },
                data: yAxis
            }],
            series: series
        }
        myChart.setOption(option)
}
function echarts_4(){
var chartDom = document.getElementById('echarts_4');
var myChart = echarts.init(chartDom);
var option;

option = {
  color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
  title: {
    text: ''
  },
  legend: {
    textStyle: {
        color: '#fff',
        fontSize: 24,
    }
},
    grid:{

    },
  radar: [
    {
      indicator: [
        { text: 'Indicator1' },
        { text: 'Indicator2' },
        { text: 'Indicator3' },
        { text: 'Indicator4' },
        { text: 'Indicator5' }
      ],
      center: ['50%', '60%'],
      radius: 180,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#428BD4',
        fontSize:24
      },
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    },
  ],
  series: [
    {
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 24
        }
      },
      data: [
        {
          value: [100, 8, 0.4, -80, 2000],
          name: 'Data A'
        },
        {
          value: [60, 5, 0.3, -100, 1500],
          name: 'Data B',
          areaStyle: {
            color: 'rgba(255, 228, 52, 0.6)'
          }
        },
        {
            value: [90, 3, 0.7, -90, 1800],
            name: 'Data C',
          },
          {
            value: [6, 30, 0.2, -60, 2500],
            name: 'Data D',
          },
      ]
    },
  ]
};

option && myChart.setOption(option);
myChart.resize({width:750,height:400});
}

function echarts_6(){
    var chartDom = document.getElementById('echarts_6');
    let myEcharts = echarts.init(chartDom);
    option = {
        series: [
            {
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation:true,
            label: {
                show: true,
                position: 'center',
                formatter:'60%',
                fontSize: 13,
                fontWeight:'bold',
                color:"#fff"
            },
            emphasis: {
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 60,
                itemStyle:{
                    normal:{
                        color:{
                            type:'linear',
                            x0:0,
                            y0:0,
                            x1:0,
                            y1:1,
                            colorStops:[{
                                offset:0,color:'#ea1818c6' // 0% 处的颜色
                            },
                            {
                                offset:.6,color:'#7318eac6' // 3% 处的颜色
                            }
                                
                        ]
                        }
                    }
                }
            }, {
                value: 40,
                itemStyle:{
                    normal:{
                        color:'#7318ea00'
                    }
                }
            }]
        },
    ]
    };
    myEcharts.setOption(option)

}
function echarts_7(){
    var chartDom = document.getElementById('echarts_7');
    let myEcharts = echarts.init(chartDom);
    option = {
        series: [
            {
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation:true,
            label: {
                show: true,
                position: 'center',
                formatter:'90%',
                fontSize: 13,
                fontWeight:'bold',
                color:"#fff"
            },
            emphasis: {
                // label: {
                //     show: true,
                //     fontSize: '30',
                //     fontWeight: 'bold'
                // }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 90,
                itemStyle:{
                    normal:{
                        color:{
                            type:'linear',
                            x0:0,
                            y0:0,
                            x1:0,
                            y1:1,
                            colorStops:[{
                                offset:0,color:'#5af0d9c3' // 0% 处的颜色
                            },
                            {
                                offset:.9,color:'#0077ff' // 3% 处的颜色
                            }
                                
                        ]
                        }
                    }
                }
            }, {
                value: 10,
                itemStyle:{
                    normal:{
                        color:'#7318ea00'
                    }
                }
            }]
        },
    ]
    };
    myEcharts.setOption(option)
}

function echarts_8(){

var chartDom = document.getElementById('echarts_8');
var myChart = echarts.init(chartDom,'dark');
var option;

option = {
    backgroundColor:"#ffffff00",
    border:'2px solid red',
    width:'100%',
    height:"80%",
    dataset: {
        source: [
        ['score', 'num', 'product'],
        [89.3, 58212, '类7'],
        [57.1, 78254, '类6'],
        [74.4, 41032, '类5'],
        [50.1, 12755, '类4'],
        [89.7, 20145, '类3'],
        [68.1, 79146, '类2'],
        [19.6, 91852, '类1'],
        ]
    },
  grid: { 
    top: "0%",
    containLabel: true 
    },
  xAxis: { name: 'num' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: '10%',
    top: '80%',
    bottom:0,
    min: 10,
    max: 100,
    text: ['High', 'Low'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#5af0b4', '#5ab4f0', '#a55af0']
    },
  },
  legend: {
    x: '0%',
    y: '0%',
    icon: 'circle',
    textStyle: {
        color: '#fff',
    }
},
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    },
    
  ]
};

    option && myChart.setOption(option);
    myChart.resize({width:360,height:200});
}
draw();
echarts_2();
echarts_1();
echarts_5();
echarts_3();
setInterval(draw,150);
function getRandomChar(){
    const str='0123456789abcdefghijklmnopqrstuvwxyz';
    return str[Math.floor(Math.random() * str.length)];
}
echarts_4();
echarts_6();
echarts_7();
echarts_8();