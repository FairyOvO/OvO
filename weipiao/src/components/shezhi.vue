<template>
	<div class="main">
		<header>
			<img src="../assets/img_1.gif" />设置
		</header>
		<section class="section1">
			<div class="div">
				<ul>
					<li><img src="../assets/img_3.gif" style="margin-right: 30px;" /></li>
					<li>我的资料</li>
					<li><img src="../assets/right.gif" style="margin-left: 1000px;" /></li>
				</ul>
			</div>
			<div class="div">
				<ul>
					<li><img src="../assets/img_4.gif" style="margin-right: 30px;" /></li>
					<li>我的地址</li>
					<li><img src="../assets/right.gif" style="margin-left: 1000px;" /></li>
				</ul>
			</div>
			<div class="div2">
				<ul>
					<li><img src="../assets/img_5.gif" style="margin-right: 30px;" /></li>
					<li>第三方合作账号</li>
					<li><img src="../assets/right.gif" style="margin-left: 880px;" /></li>
				</ul>
			</div>
		</section>
		<section class="section2">
			<div class="div">
				<ul>
					<li><img src="../assets/img_6.gif" style="margin-right: 30px;" /></li>
					<li>意见反馈</li>
					<li><img src="../assets/right.gif" style="margin-left: 1000px;" /></li>
				</ul>
			</div>
			<div class="div">
				<ul>
					<li><img src="../assets/img_7.gif" style="margin-right: 30px;" /></li>
					<li>关于我们</li>
					<li><img src="../assets/right.gif" style="margin-left: 1000px;" /></li>
				</ul>
			</div>
			<div class="div">
				<ul>
					<li><img src="../assets/img_8.gif" style="margin-right: 30px;" /></li>
					<li>清理缓存</li>
					<li style="margin-left: 920px;">15MB</li>
				</ul>
			</div>
			<div class="div">
				<ul>
					<li><img src="../assets/img_9.gif" style="margin-right: 30px;" /></li>
					<li>当前版本</li>
					<li style="margin-left: 880px;">V6.4.0</li>
				</ul>
			</div>
			<div class="div2">
				<ul>
					<li><img src="../assets/img_10.gif" style="margin-right: 30px;" /></li>
					<li>客服电话</li>
					<li style="margin-left: 760px;">400-0309-755</li>
				</ul>
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
		line-height: 130px;
		text-align: center;
		font-size: 36px;
		color: #262626;
		border-bottom: 1px solid #dadad8;
		/*background: url(../assets/bg_1.gif) repeat-x;*/
		background: white;
	}
	
	header img {
		float: left;
		margin-top: 55px;
		margin-left: 20px;
		/*display: flex;*/
	}
	
	.section1 {
		width: 1080px;
		height: 560px;
		background: white;
		margin-top: 50px;
	}
	
	.div {
		width: 960px;
		height: 167px;
		line-height: 167px;
		margin-left: 60px;
		border-bottom: 1px solid #dddddd;
		font-size: 28px;
	}
	
	.div li {
		float: left;
		list-style: none;
	}
	
	.div img {
		vertical-align: middle;
	}
	
	.div2 {
		width: 960px;
		height: 167px;
		line-height: 167px;
		margin-left: 60px;
		/*border-bottom: 1px solid #dddddd;*/
		font-size: 28px;
	}
	
	.div2 li {
		float: left;
		list-style: none;
	}
	
	.div2 img {
		vertical-align: middle;
	}
	
	.section2 {
		width: 1080px;
		height: 970px;
		background: white;
		margin-top: 50px;
	}
</style>