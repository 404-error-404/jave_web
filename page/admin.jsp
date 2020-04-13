<%--
  Created by IntelliJ IDEA.
  User: 雷蕾
  Date: 2020/4/12
  Time: 11:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>记忆管理</title>
    //<script src="vue.js"></script>
    <div id="head" style="width:100%;height:100px;background-color: #001529">
      <h1 style="color: white;text-align: center"><br/>Remember Me</h1>
    </div>
  </head>
  <body>
  <div id="left" style="width:400px;height: 100%;margin-left: 20px;display: inline-block;margin-top: 10px;position: absolute">
    <div id="pic" style="text-align: center;margin-top: 70px"><img src="../static/pic.JPG" style="width: 150px;"></div>
    <div style="margin-left: 150px">
      <table style="text-align: center">
        <tr>
          <td>用户名</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>首页</td>
        </tr>
        <tr>
          <td>个人中心</td>
        </tr>
      </table>
    </div>
  </div>
  <div id="right" style="width:1000px;height: auto;display: inline-block;margin-right: 20px;margin-left: 440px;margin-top: 10px;position:absolute">
    <div id="search" style="text-align: right;margin-top: 20px;">
      <input placeholder="请输入关键词" style="margin-right: 10px;height: 30px;border-radius: 5px">
      <button style="height: 30px;border-radius: 5px">搜索</button>
    </div>
    <div style="width:1000px;height:auto;margin-top: 30px;border-bottom: 1px solid #001529;">
      <img src="../static/pic.JPG" style="width: 250px;display: inline-block">
      <div style="display: inline-block;margin-left: 20px;position: absolute;">
        <h1>2020年1月1日</h1>
        <p>今天是美好的一天</p>
      </div>
      <div class="edtbtn" style="text-align: right;margin-bottom: 10px"><button>编辑</button><button>删除</button><button>查看详情</button></div>
    </div>
    <div style="width:1000px;height:auto;margin-top: 30px;border-bottom: 1px solid #001529;">
      <img src="../static/pic.JPG" style="width: 250px;display: inline-block">
      <div style="display: inline-block;margin-left: 20px;position: absolute;">
        <h1>2020年11月11日</h1>
        <p>今天也是美好的一天</p>
      </div>
      <div class="edtbtn" style="text-align: right;margin-bottom: 10px"><button>编辑</button><button>删除</button><button>查看详情</button></div>
    </div>
    <div style="width:1000px;height:auto;margin-top: 30px;border-bottom: 1px solid #001529;">
      <img src="../static/pic.JPG" style="width: 250px;display: inline-block">
      <div style="display: inline-block;margin-left: 20px;position: absolute;">
        <h1>2020年2月2日</h1>
        <p>今天还是美好的一天</p>
      </div>
      <div class="edtbtn" style="text-align: right;margin-bottom: 10px"><button>编辑</button><button>删除</button><button>查看详情</button></div>
    </div>
  </div>

  </body>
</html>
