<template>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th v-for="item in title">{{item.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data">
          <td width="5%">{{index+1}}</td>
          <td width="20%">{{item[Object.keys(item)[0]]}}</td>
          <td width="20%">{{item[Object.keys(item)[1]]}}</td>
          <td width="20%">{{item[Object.keys(item)[2]]}}</td>
		      <td width="10%"><span @click="deleteData(item.id,index,operator)" class="delete">删除</span></td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  components: {},
  props: ["data", "title", "operator"],
  data() {
    return {};
  },
  methods: {
    deleteData(id, index, oper) {
      debugger;

      var dataArr = new Array();
      for (var i = 1; i < 2; i++) {
        dataArr.push(i);
      }
      this.$http
        .post(
          oper,
          {
            courseId: dataArr
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
      this.$emit("updataTable");
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  font-size: 14px;
  border: 1px solid #ddd;
  padding: 0 10px;
}

table thead th {
  background: #ddd;
  padding: 10px;
  text-align: left;
}

table tbody td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

table tbody td span {
  margin: 0 10px;
  cursor: pointer;
}

.delete {
  color: red;
}

.edit {
  color: #008cd5;
}

input {
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 3px;
  margin-right: 15px;
}

button {
  background: #008cd5;
  border: 0;
  padding: 4px 15px;
  border-radius: 3px;
  color: #fff;
}

#mask {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
}

.mask {
  width: 300px;
  height: 250px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 47;
  border-radius: 5px;
}

.title {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.title span {
  float: right;
  cursor: pointer;
}

.content {
  padding: 10px;
}

.content input {
  width: 270px;
  margin-bottom: 15px;
}

.select {
  padding: 5px;
  width: 270px;
  margin-bottom: 15px;
}
</style>