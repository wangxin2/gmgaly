<template>
  <div id="app">
    <div class="banner">
      <img src="./assets/banner.png" alt="">
    </div>
    <div class="mainBox">
      <div id="nav">
        <router-link class="navBtn li_cur" to="/">疫情地图</router-link>
        <router-link class="navBtn" to="/">发热门诊</router-link>
        <router-link class="navBtn" to="/">个人防护</router-link>
        <router-link class="navBtn" to="/">在线义诊</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style>
html, body { margin: 0 auto; width:100%; height:100%; overflow: hidden; -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}
html{font-size:62.5%;}
body{ font-size:12px; color: #333; font-size:1.2rem; font-family: "Microsoft yahei"; width:100%; height:100%; background-size: 100% 100%;}
a, address, b, big, blockquote, body, cite, code, dd, del, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, i, iframe, img, ins, label, legend, li, ol, p, pre, small, span, strong, ul { margin: 0; padding: 0;}
img { border: 0; vertical-align: middle;}
button, html input[type=button], input[type=submit] { -webkit-apperance: button; cursor: pointer}
ul, li, ol { list-style: none;}
a, button, input { -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
:focus { outline: none;}
a, input, button, select, textarea { outline: none;}
a, a:hover { cursor: pointer; text-decoration: none;}
table { border-collapse: collapse;}
.w_clear{ width:0; height:0; clear:both;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.banner img{
  width: 100%;

}
.mainBox{
  border-radius: 5px 5px 0 0;
}
#nav{
  height:30px;
  border-bottom: 3px #efefef solid;
}
.navBtn{
  display: block;
  float: left;
  width: 25%;
  line-height: 30px;
  color: #333;
  text-decoration: none;
}
.navBtn.li_cur{
  border-bottom: 3px #c9151e solid;
}

</style>
