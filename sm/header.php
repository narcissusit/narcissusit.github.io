<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Honest People</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="dist/css/style.css">
</head>
<body>

	<?php include('inc/dev-menu.php'); ?>

	<header class="header" id="header">
		<div class="wrap">
			<div class="header-container">
				<button type="button" class="btn-menu" id="btn-menu">
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</button>
				<a href="#" class="logo">
					<img src="/img/logo.svg" alt="Честные люди">
				</a>
				<nav class="main-nav">
					<ul class="menu-list">
						<li>
							<a href="#" class="current">
								Главная
							</a>
						</li>
						<li>
							<a href="#">
								Бренды с народом
							</a>
						</li>
						<li>
							<a href="#">
								Безучастные бренды
							</a>
						</li>
						<li>
							<a href="#">
								Категории
							</a>
						</li>
					</ul>
					<a href="#" class="search-mob">
						<img src="/img/icons/search.svg" alt="">
						<span class="menu-text">
							Поиск
						</span>
					</a>
				</nav>
				<div class="header-btns">
					<a href="#" class="btn-m">
						Добавить бренд
					</a>
					<a href="#" class="btn-icon btn-pad">
						<img src="/img/icons/search.svg" alt="">	
					</a>
				</div>
			</div>
			
		</div>
	</header>
