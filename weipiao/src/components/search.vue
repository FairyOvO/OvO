<template>
	<div class="main">
		<header>
			<input type="text" placeholder="请输入搜索内容" />取消
		</header>
		<section class="section1">
			<div class="left">
				热门搜索
			</div>
			<div class="right">
				搜索历史
			</div>
		</section>
		<section class="section2">
			<ul>
				<li>
					<div class="section3">张杰</div>
				</li>
				<li>
					<div class="section3">杨丞琳</div>
				</li>
				 <li>
					<div class="section3">华晨宇</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
</script>

<style lang="css" scoped="scoped">
	/* @import url("style/search.css"); */
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
		line-height: 131px;
		color: #9a9a9a;
		background: white;
		font-size: 36px;
		border-bottom: 1px solid #DDDDDD;
	}
		
	header input {
		width: 822px;
		height: 92px;
		border: 0;
		padding-left: 50px;
		border-radius: 8px;
		outline: none;
		font-size: 30px;
		margin-right: 20px;
		background: url(../assets/search.gif) no-repeat #f7f7f7 left center;
	}
		
	.section1 {
		width: 1080px;
		height: 124px;
		background: white;
	}
	
	.left {
		width: 540px;
		height: 116px;
		border-bottom: 8px solid #fce422;
		float: left;
		text-align: center;
		line-height: 116px;
		font-size: 36px;
	}
		
	.right {
		width: 540px;
		height: 124px;
		float: left;
		text-align: center;
		line-height: 116px;
		font-size: 36px;
		color: #979797;
	}
		
	.section2 {
		width: 1080px;
		height: 106px;
		margin-top: 60px;
	}
		
	.section2 li {
		list-style: none;
		float: left;
		margin-right: 28px;		
	}
		
	.section3 {
		width: 320px;
		height: 106px;
		background: white;
		text-align: center;
		line-height: 106px;
		font-size: 36px;
	}
</style>