<!-- This is the html template -->
<template>
  <div class="about">
    <h1>This is a simple introduction to Vue components and some APIs</h1>
    <!-- 插值表达式 -->
    <div>
      <span class="lable">Interpolation expression:</span>
      <span class="value">
        <span class="t">Using Interpolation: {{ text }}</span
        ><br />
        <span class="t"
          >Using v-html directive: <span v-text="text"></span></span
        ><br />
        <span class="t">Using Interpolation: {{ rawHtml }}</span
        ><br />
        <span class="t"
          >Using v-html directive: <span v-html="rawHtml"></span></span
        ><br />
      </span>
    </div>
    <div class="line"></div>

    <!-- Class 与 Style 绑定 -->
    <div>
      <span class="lable">Class and Style binding:</span>
      <span class="value">
        <div>-------class--------</div>
        <div class="static" v-bind:class="{ active: isActive }">
          Class binding(Object way)
        </div>
        <div v-bind:class="[activeClass, errorClass]">
          Class binding(Array way)
        </div>
        -------style--------
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
          Style binding
        </div>
        <div :style="styleObject">Style binding</div>
      </span>
    </div>
    <div class="line"></div>

    <!-- 条件判断 -->
    <div>
      <span class="lable">Conditional rendering:</span>
      <span class="value">
        <input type="text" v-model="type" placeholder="edit me" />
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Not A/B/C</div>
      </span>
    </div>
    <div class="line"></div>

    <!-- 列表渲染 -->
    <div>
      <span class="lable">List rendering:</span>
      <span class="value">
        <ul id="example-2">
          <li v-for="(item, index) in items" :key="index">
            {{ index }} - {{ item.message }}
          </li>
        </ul>
      </span>
    </div>
    <div class="line"></div>

    <!-- 事件处理 -->
    <div>
      <span class="lable">Event handling:</span>
      <span class="value">
        <button v-on:click="say('hi')">Say hi</button>
        <button @click="say('what')">Say what</button>
      </span>
    </div>
    <div class="line"></div>

    <!-- watch -->
    <div>
      <span class="lable">watch num:</span>
      <span class="value">{{ num }}</span>
    </div>
    <div>
      <span class="lable">watch result:</span>
      <span class="value">{{ changeNum }}</span>
    </div>
    <div class="line"></div>

    <!-- 表单绑定 -->
    <div>
      <span class="lable">Form binding:</span>
      <span class="value">
        <!-- 文本框 Text box -->
        input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
        <input v-model="message" placeholder="edit me" /><br>
        <p>Message is: {{ message }}</p><br>

        <!-- 复选框 Checkbox-->
        checkbox: 
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <p>Checked names: {{ checkedNames }}</p><br>

        <!-- 单选框 Single box-->
        radio:
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <p>Picked: {{ picked }}</p><br>

        <!-- 选择框 Select box-->
        selected:
        <select v-model="selected">
          <option disabled value="">please choose</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
      </span>
    </div>
    <div class="line"></div>

    <!-- 计算属性 -->
    <div>
      <span class="lable">Calculated attributes:</span>
      <span class="value">
        <p>Message is: {{ reversedMessage }}</p>
      </span>
    </div>
    <div class="line"></div>

    <!-- 子组件 -->
    <HelloWorld :msg="msg" :callback="cb" />
  </div>
</template>
<!-- This is Javascript -->
<script>
// JavaScript file import
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  // Component name
  name: "About",
  // Register subcomponents
  components: {
    HelloWorld,
  },
  // Data object of Vue instance
  data() {
    return {
      msg: "This is a subcomponent",
      text: "This is an about Vue page",
      rawHtml:"<a>123</a>",
      num: 0,
      changeNum: "",
      message: "",
      checkedNames:[],
      picked:'',
      selected:'',
      type: "",
      items: [{ message: "Foo" }, { message: "Bar" }],
      isActive: true,
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
    };
  },
  // Observe data changes
  watch: {
    num: function (val, oldVal) {
      this.changeNum = `new: ${val}, old: ${oldVal}`;
    },
  },
  // 计算属性的 getter
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
  },
  // After the instance is created
  created() {
    this.init();
  },
  // Function method
  methods: {
    init() {
      setTimeout(() => {
        this.num = 1;
      }, 2000);
    },
    say: function (message) {
      alert(message);
    },
    cb(message) {
      alert(message);
    },
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
<!-- This is css -->
<style >
.about {
  padding-bottom: 60px;
}
.line {
  margin: 10px;
  border-bottom: 1px dashed red;
  font-size: 16px;
}
.lable {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  width: 300px;
  text-align: right;
  color: blue;
  vertical-align: top;
}
.value {
  display: inline-block;
  width: 300px;
  text-align: left;
  margin-left: 10px;
}
ul {
  list-style: none;
}
</style>