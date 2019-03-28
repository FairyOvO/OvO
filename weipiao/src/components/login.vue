<template>
	<div class="main iconfont">
		<div class="fh">
			<span class="span1">&#xe668;</span>
		</div>
		<div class="div">
			<img src="../assets/logo.gif" />
		</div>
		<div class="div1">
			<input type="text" placeholder="请输入手机号" />
			<span class="span2">&#xe609;</span>
			<span class="span3">&#xe604;</span>
		</div>
		<div class="div2">
			<input type="password" placeholder="请输入密码" />
			<span class="span2">&#xe617;</span>
		</div>
		<div class="div3">
			<input type="submit" value="登录" />
		</div>
		<div class="div4">
			<ul>
				<router-link to="/register">
					<li>快速注册</li>
				</router-link>
				<li>忘记密码</li>
			</ul>
		</div>
		<div class="div5">
			<ul>
				<li class="li1">&#xe657;</li>
				<li class="li2">&#xe64c;</li>
				<li class="li3">&#xe631;</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.main {
		background: url(../assets/bg.gif) no-repeat;
		width: 1080px;
		margin: 0 auto;
		height: 1850px;
	}
	
	.span1 {
		font-size: 70px;
		color: #a6a3ac;
		float: left;
		margin-left: 50px;
		margin-top: 50px;
	}
	
	.fh {
		width: 1080px;
		height: 150px;
		/* border: 1px solid white; */
	}
	
	.div {
		width: 1080px;
		height: 320px;
		/* border: 1px solid white; */
	}
	
	.div img {
		margin-top: 80px;
	}
	
	.div1 {
		width: 1080px;
		height: 132px;
		margin-top: 250px;
		position: relative;
	}
	
	.div1 input {
		width: 660px;
		height: 130px;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		border-bottom: 2px solid white;
		background: transparent;
		outline: none;
		font-size: 50px;
		padding-left: 90px;
		color: white;
	}
	
	input::-webkit-input-placeholder{
        color:white;
		font-family: "楷体";
    }
	
	.span2 {
		color: #FFFFFF;
		font-size: 80px;
		/* margin-left: -700px; */
		position: absolute;
		left: 150px;
		top: 25px;
	}
	
	.span3 {
		position: absolute;
		font-size: 70px;
		color: #cdcdcf;
		/* left: -30px; */
		top: 20px;
		right: 170px;
	}
	
	.div2 {
		width: 1080px;
		height: 132px;
		margin-top: 20px;
		position: relative;
	}
	
	.div2 input {
		width: 660px;
		height: 130px;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		border-bottom: 2px solid white;
		background: transparent;
		outline: none;
		font-size: 50px;
		padding-left: 90px;
		color: white;
	}
	
	.div3 {
		width: 1080px;
		height: 120px;
		border: 1px solid white;
		margin-top: 80px;
	}
	
	.div3 input {
		width: 750px;
		height: 120px;
		border-radius: 10px;
		border: 0;
		background: #FFFFFF;
		opacity: 0.5;
		font-size: 40px;
		/* font-style: "楷体"; */
		color: #767676;
		outline: none;
	}
	
	.div4 {
		width: 1080px;
		height: 50px;
		color: white;
		font-size: 40px;
		font-family: "楷体";
		margin-top: 50px;
		line-height: 50px;
		/* border: 1px solid yellow; */
	}
	
	.div4 li {
		float: left;
		margin-left: 215px;
		list-style: none;
	}
	
	.div4 a {
		text-decoration: none;
		color: white;
	}
	
	.div5 {
		width: 1080px;
		height: 200px;
		/* border: 1px solid white; */
		margin-top: 150px;
	}
	
	.div5 li {
		float: left;
		list-style: none;
		margin-left: 120px;
	}
	
	.li1 {
		font-size: 160px;
		color: white;
	}
	.li2 {
		font-size: 170px;
		color: white;
		margin-top: -10px;
	}
	
	.li3 {
		font-size: 170px;
		color: white;
		margin-top: -10px;
	}
	
</style>