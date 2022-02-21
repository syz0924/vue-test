<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CourseList :courses="courses"></CourseList>
</template>

<script>
import CourseList from './components/CourseList.vue'
import {getCourses} from './api/course.js'

export default {
  name: 'App',
  components: {
    CourseList
  },data() {
    return {
      title: '购物车开课吧！',
          course: '',
          totalCount: 0,
          courses: [],
    }
  },async created () {
    // 获取数据
    const courses = await getCourses();
    this.courses = courses;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>