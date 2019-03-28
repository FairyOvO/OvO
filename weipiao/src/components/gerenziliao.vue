<template>
	<div class="main">
		<header>
			<img src="../assets/img_11.gif" />个人资料
		</header>
		<section class="section1">
			<ul>
				<li style="padding-top: 60px;">
					<img src="../assets/img_12.gif" />
				</li>
				<li>
					<div class="radius">完善信息赢取积分</div>
				</li>
			</ul>
		</section>
		<section class="section2">
			<div class="div">
				<li>
					<img src="../assets/img_13.gif" />
				</li>
				<li>昵称</li>
				<li style="margin-left: 1030px;">七七七</li>
				<li>
					<img src="../assets/right.gif" />
				</li>
			</div>
			<div class="div">
				<li>
					<img src="../assets/img_14.gif" />
				</li>
				<li>性别</li>
				<li style="margin-left: 1100px;">女</li>
				<li>
					<img src="../assets/right.gif" />
				</li>
			</div>
			<div class="div">
				<li>
					<img src="../assets/img_15.gif" />
				</li>
				<li>身份证</li>
				<li style="margin-left: 965px; color: #acacac;">未绑定</li>
				<li>
					<img src="../assets/right.gif" />
				</li>
			</div>
			<div class="div">
				<li>
					<img src="../assets/img_16.gif" />
				</li>
				<li>手机号</li>
				<li style="margin-left: 935px;">15873054081</li>
			</div>
			<div class="div">
				<li>
					<img src="../assets/img_17.gif" />
				</li>
				<li>邮箱</li>
				<li style="margin-left: 915px; color: #acacac;">请输入邮箱</li>
				<li>
					<img src="../assets/right.gif" />
				</li>
			</div>
			<div class="div">
				<li>
					<img src="../assets/img_18.gif" />
				</li>
				<li>生日</li>
				<li style="margin-left: 915px; color: #acacac;">请选择生日</li>
				<li>
					<img src="../assets/right.gif" />
				</li>
			</div>
			<div class="div1">
				<li>
					<img src="../assets/img_19.gif" />
				</li>
				<li>签名</li>
				<li style="margin-left: 915px; color: #acacac;">请输入签名</li>
				<li>
					<img src="../assets/right.gif" />
				</li>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.main {
		width: 1080px;
		margin: 0 auto;
		background: #f5f5f5;
		font-family: "楷体";
		height: 1920px;
	}
	
	header {
		width: 1080px;
		height: 131px;
		border-bottom: 1px solid #DDDDDD;
		background: url(../assets/bg_1.gif) repeat-x;
		line-height: 131px;
		/*text-align: center;*/
		font-size: 36px;
		/*text-indent: -350px;*/
	}
	
	header img {
		float: left;
		margin-top: 55px;
		margin-left: 20px;
		/*display: flex;*/
	}
	
	.section1 {
		width: 1080px;
		height: 380px;
		margin-top: -10px;
		background: white;
	}
	
	.section1 li {
		list-style: none;
		line-height: 95px;
	}
	
	.radius {
		width: 415px;
		height: 70px;
		background: #ae9f74;
		color: white;
		border-radius: 35px;
		line-height: 70px;
		font-size: 40px;
		margin-left: 330px;
	}
	
	.section2 {
		width: 1080px;
		height: 1140px;
		background: white;
		/*border: 1px solid red;*/
	}
	
	.div {
		width: 1080px;
		height: 160px;
		line-height: 160px;
		font-size: 30px;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.div img {
		vertical-align: middle;
	}
	
	.div li {
		float: left;
		list-style: none;
		margin-left: 40px;
	}
	
	.div1 {
		width: 1080px;
		height: 160px;
		line-height: 160px;
		font-size: 30px;
		/*border-bottom: 1px solid #DDDDDD;*/
	}
	
	.div1 img {
		vertical-align: middle;
	}
	
	.div1 li {
		float: left;
		list-style: none;
		margin-left: 40px;
	}
</style>