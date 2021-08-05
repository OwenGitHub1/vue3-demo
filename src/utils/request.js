import axios from "axios";

const request = axios.create({
  baseURL: '/api',
  headers: {
    post: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  },
  timeout: 30000
})

// 返回拦截
request.interceptors.response.use((response)=>{
  // 获取接口返回结果
  const res = response.data;
  // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
  if(res.code === 0){
      return res;
  }else if(res.code === 10000){
      // 10000假设是未登录状态码
      // 也可使用router进行跳转
      window.location.href = '/#/login';
      return res;
  }else{
      // 错误显示可在service中控制，因为某些场景我们不想要展示错误
      // Message.error(res.message);
      return res;
  }
},()=>{
  alert('网络请求异常，请稍后重试!');
});


export default request;