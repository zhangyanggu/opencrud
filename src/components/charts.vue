<template>
  <div>
    <v-lineChart :chartId="line" :chartData="lineData"></v-lineChart>
    <v-barChart :chartId="bar" ></v-barChart>
    <v-scatterChart :chartId="scatter" ></v-scatterChart>
    <v-gaugeChart :chartId="gauge" ></v-gaugeChart>
    <v-doughnut :chartId="doughnut"></v-doughnut>
    <v-radar :chartId="radar"></v-radar>
  </div> 
</template>

<script>
import lineChart from "../components/charts/lineChart";
import barChart from "../components/charts/barChart";
import scatterChart from "../components/charts/scatter";
import gaugeChart from "../components/charts/gauge";
import doughnut from "../components/charts/doughnut";
import radar from "../components/charts/radar";

export default {
  name: "charts",
  data() {
    return {
      // chartType: ["line", "bar"],
      line: "linellll",
      bar: "barbbbbb",
      scatter: "scateter",
      gauge: "gaugeeeee",
      doughnut: "doughnutsss",
      radar: "radarrrrr",
      lineData: { 衬衫: 10, 毛衣: 12, 大衣: 10, 连衣裙: 50 }
    };
  },
  components: {
    "v-lineChart": lineChart,
    "v-barChart": barChart,
    "v-scatterChart": scatterChart,
    "v-gaugeChart": gaugeChart,
    "v-doughnut": doughnut,
    "v-radar": radar
  },
  methods: {}
};
</script>
