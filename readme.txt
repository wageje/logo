本案例实现了：
	1.随机展现logo;
	2.logo无限平移;
	3.PC端和移动端可自适应。
主要函数简介：
	主函数ImgInfiniteRolling(begin,speed)：
		使用原生js编写，但是涉及transform的3d转换，低版本的IE无法兼容。
		begin参数为图片跳至末尾的位置，speed参数为每100毫秒平移的距离
	TimeSet()函数：
		可以修改函数执行的速度，默认是100毫秒一次
	引用了vue.js用来遍历logo数组并输出到html
This case realizes:
	1. Random display of pictures;
	2. Images move horizontally indefinitely；
	3. Computer terminal and mobile terminal can be adapted.

Introduction to main functions:
	The main function ImgInfiniteRolling (begin, speed):
		It is written in original js, but the low version of IE is incompatible 		with the 3D transformation involved in transformation.
		The begin parameter is the position where the picture jumps to the end, and 		the speed parameter is the translation distance per 100 milliseconds.
	TimeSet () function:
		You can modify the speed of function execution by default of 100 		milliseconds.
	Vue.js is referenced to traverse the image array and output to HTML.
