<template>
	<div class="main iconfont">
		<div class="fh">
			<span class="span1">&#xe6c1;</span>
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
			<input type="password" placeholder="请输入验证码" /><button>获取验证码</button>
			<span class="span2">&#xe6c3;</span>
		</div>
		<router-link to="/login">
			<div class="div3">
				<input type="submit" value="注册" />
			</div>
		</router-link>
		<div class="div4">轻触上面的“注册”按钮，</div>
		<div class="div5">即表示你同意<span>《唯票用户协议》</span></div>
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
		width: 430px;
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
		float: left;
		margin-left: 168px;
	}
	
	.div3 {
		width: 1080px;
		height: 120px;
		/* border: 1px solid white; */
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
	
	button {
		width: 230px;
		height: 130px;
		margin-left: -160px;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		border-bottom: 2px solid white;
		margin-top: 4px;
		background: transparent;
		outline: none;
		color: white;
		font-size: 40px;
		font-family: "楷体";
	}
	
	.div4 {
		width: 1080px;
		height: 55px;
		font-size: 40px;
		line-height: 55px;
		color: white;
		font-family: "楷体";
		text-align: center;
		/* border: 1px solid white; */
		margin-top: 500px;
	}
	
	.div5 {
		width: 1080px;
		height: 55px;
		font-size: 40px;
		line-height: 55px;
		color: white;
		font-family: "楷体";
		text-align: center;
		/* border: 1px solid white; */
		/* margin-top: 500px; */
	}
	
	.div5 span {
		color: #ffbb18;
	}
</style>