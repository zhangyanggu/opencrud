<template>
  <div id="table">
    <h4 class='header'>学生信息录入</h4>
      <div class="add">
        <input type="text" v-model="addDetail.tid" name="id" value="" placeholder="学号" />
        <input type="text" v-model="addDetail.tname" name="name" value="" placeholder="姓名" />
        <input type="text" v-model="addDetail.sex" name="sex" value="" placeholder="性别" />
        <h2>课程选择</h2>
        <span v-for="(item,index) in courseList">
          <input type="checkbox" name="course" :value="item.major" v-model="checkedData"/>
          <label>{{item.major}}  by  {{item.tname}}</label>
        </span>
        <br>
        <button @click="addStudentInfo">新增</button>
      </div>
      <v-table :title="headInfo" :data="studentList" operator="./action/course/delcourses" @updataTable="refreshStudentList"></v-table>
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
      checkedData: [],
      addDetail: {},
      studentList: [],
      courseList: [],
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
    this.getCourseInfo();
    this.getStudentList();
  },
  methods: {
    refreshStudentList() {
      console.log("student emit");
      this.studentList = [];
      this.getStudentList();
    },
    getCourseInfo() {
      this.$http
        .get("./action/teacher/getallteachers")
        .then(response => {
          debugger;
          var len = response.body.length;
          for (var i = 0; i < response.body.length; i++) {
            var obj = {};
            obj.major = response.body[i].major;
            obj.tname = response.body[i].tname;
            this.courseList.push(obj);
            debugger;
          }
        })
        .catch(function(response) {
          console.log(response);
        });
    },
    getStudentList() {
      this.$http
        .get("./action/course/getallcourses")
        .then(response => {
          debugger;
          var len = response.body.length;
          for (var i = 0; i < response.body.length; i++) {
            this.studentList.push(response.body[i]);
          }
        })
        .catch(function(response) {
          console.log(response);
        });
    },
    addStudentInfo() {
      var str = "";
      for (var i = 0; i < this.checkedData.length; i++) {
        str += this.checkedData[i];

        if (i != this.checkedData.length - 1) {
          str += ",";
        }
      }
      this.addDetail.courseList = str;
      console.log(this.addDetail);
      var url = "./action/course/savecourse";

      this.$http
        .post(
          url,
          {
            sid: this.addDetail.tid,
            sname: this.addDetail.tname,
            sex: this.addDetail.sex,
            courseList: this.addDetail.courseList
          },
          { emulateJSON: false }
        )
        .then(
          response => {
            console.log(response);
            alert("OK");
            this.refreshStudentList();
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

.add h2 {
  padding: 10px 0px;
  font-size: 12px;
}

.add span {
  margin-right: 5px;
}

.header {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>