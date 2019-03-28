<template>
	<div class="main">
		<header>
			<input type="text" placeholder="请输入明星、演出" />
		</header>
		<div class="div"></div>
		<section class="section1">
			<div class="section1_top">
				<ul style="margin-right: 100px; margin-left: 70px;">
					<li><img src="../assets/img_20.gif" /></li>
					<li>演唱会</li>
				</ul>
				<ul style="margin-right: 100px;">
					<li><img src="../assets/img_21.gif" /></li>
					<li>体育赛事</li>
				</ul>
				<ul style="margin-right: 100px;">
					<li><img src="../assets/img_22.gif" /></li>
					<li>戏曲综艺</li>
				</ul>
				<ul>
					<li><img src="../assets/img_23.gif" /></li>
					<li>音乐会</li>
				</ul>
			</div>
			<div class="section1_top">
				<ul style="margin-right: 100px; margin-left: 70px;">
					<li><img src="../assets/img_24.gif" /></li>
					<li>话剧歌剧</li>
				</ul>
				<ul style="margin-right: 100px;">
					<li><img src="../assets/img_25.gif" /></li>
					<li>芭蕾舞蹈</li>
				</ul>
				<ul style="margin-right: 100px;">
					<li><img src="../assets/img_26.gif" /></li>
					<li>儿童亲子</li>
				</ul>
				<ul>
					<li><img src="../assets/img_27.gif" /></li>
					<li>休闲展览</li>
				</ul>
			</div>
		</section>
		<section class="section2">
			
		</section>
	</div>
</template>

<script>
	
</script>

<style>
	/* * {
		border: 0px;
	} */
	
	.main {
		width: 1080px;
		background: #efebef;
		margin: 0 auto;
		/* height: 500px; */
		font-family: "楷体";
	}
	
	header {
		width: 1080px;
		height: 130px;
		background: #FFFFFF;
		/* border: 0px; */
	}
	
	header input {
		height: 128px;
		border: 0;
		width: 400px;
		font-size: 36px;
		padding-left: 60px;
		outline: none;
		background: url(../assets/search_1.gif) no-repeat #fff left center;
	}
	
	.div {
		width: 1080px;
		height: 450px;
		background: #FFFFFF;
	}
	
	.section1 {
		width: 1080px;
		height: 430px;
		background: #FFFFFF;
		/* border: 1px solid red; */
	}
	
	.section1_top {
		width: 1080px;
		height: 225px;
		/* border: 1px solid yellowgreen; */
		font-size: 26px;
	}
	.section1_top li {
		list-style: none;
		line-height: 50px;
	}
	
	.section1_top ul {
		float: left;
	}
	
	.section2 {
		width: 1080px;
		height: 680px;
		margin-top: 30px;
		background: #FFFFFF;
	}
	
	.section2_top {
		width: 1080px;
		height: 130px;
		line-height: 130px;
	}
</style>