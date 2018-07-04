<template>
  <div id="table">
    <h4 class='header'>教师信息录入</h4>
      <div class="add">
        <input type="text" v-model="addDetail.tid" name="id" value="" placeholder="工号" />
        <input type="text" v-model="addDetail.tname" name="name" value="" placeholder="姓名" />
        <input type="text" v-model="addDetail.sex" name="sex" value="" placeholder="性别" />
        <input type="text" v-model="addDetail.major" name="course" value="" placeholder="课程" />
        <button @click="addTeacherInfo">新增</button>
      </div>
      <v-table :title="headInfo" :data="teacherList" operator="./action/teacher/getReq" @updataTable="refreshTeacherList"></v-table>
   </div>
</template>

<script>
import table from "./table";
//import VChooser from "../../components/base/chooser";
export default {
  components: {
    "v-table": table
  },
  data() {
    return {
      addDetail: {},
      teacherList: [],
      headInfo: [
        { text: "序号" },
        { text: "姓名" },
        { text: "性别" },
        { text: "课程" },
        { text: "操作" }
      ]
    };
  },
  created: function() {
    this.getTeacherList();
  },
  methods: {
    refreshTeacherList() {
      console.log("teacher emit");
      this.teacherList = [];
      this.getTeacherList();
    },
    getTeacherList() {
      this.$http
        .get("./action/teacher/getallteachers")
        .then(response => {
          debugger;
          var len = response.body.length;
          for (var i = 0; i < response.body.length; i++) {
            this.teacherList.push(response.body[i]);
          }
        })
        .catch(function(response) {
          console.log(response);
        });
    },
    addTeacherInfo() {
      var url = "./action/teacher/saveteacher";

      this.$http
        .post(
          url,

          {
            tid: this.addDetail.tid,
            tname: this.addDetail.tname,
            sex: this.addDetail.sex,
            major: this.addDetail.major
          },
          { emulateJSON: false }
        )
        .then(
          response => {
            console.log(response);
            alert("OK");
            this.refreshTeacherList();
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table {
  padding: 0 10px;
}

.add {
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 15px;
}

.header {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>