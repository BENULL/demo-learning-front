<template>
  <div>
    <div id="myChart" :style="{width: '800px', height: '400px'}"></div>
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Prices',
  data () {
    return {
      data: {},
      seriesData: []
    }
  },
  mounted () {
  },
  created () {
    axios
      .get('http://localhost:8080/order/month_bounce?productId=23')
      .then(response => {
        if (response.data.status === 0) {
          this.data = response.data.data
          console.log(this.data)
          for (var y in this.data) {
            console.log(this.data[y])
            var yData = this.data[y]
            var sArray = new Array(12).fill(0)
            yData.forEach(element => {
              sArray[element.m - 1] = element.sales
              console.log(element.m)
              console.log(element.sales)
            })
            var sObj = {
              name: y,
              type: 'line',
              data: sArray
            }
            this.seriesData.push(sObj)
          }
        }
        this.draw()
      })
  },
  methods: {
    draw () {
      // 生成line数据series
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var option = {
        title: {
          text: '销量变化'
        },
        legend: {
          data: ['2014', '2015', '2016']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        series: []
      }
      option.series = this.seriesData
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
