<html>
<head>
	<title>这是PHP??</title>
</head>
<body>
	<?php
	
	/* 
		$QAQ = 520;									//定义变量
		const 定义一个常量 = '我喜欢你的声音<br />';  //PHP5.3之后可以这样定义常量
		define("定义常量","TianYi");					//普通定义常量方法
		echo 定义一个常量,定义常量,$QAQ ;				//常量直接用名字输出
		 */
		
		
	/* $A = "233abc";
	$B = (float)$A; //数据转换不会改变原来的值
	echo "变量A=",$A,"<br />","变量B=",$B; */
	
	
	/* 	$A = "233abc";
		$A = (int)$A;
		echo $A; */
		
		
		/* $A = "我是A";
		$B = "我是B";
		var_dump($A=="我是A" && $B=="我是B" && $C="C"); //PHP也懒的很！
		echo $C; */
		
		
		/* $A = 123;
		$B = 456;
		echo $A . $B; 	// php的连接用的是.
		$A += $B;		// 当然PHP也存在+=,-=等操作,还有多了.=
		echo $A; */
		
		
	/* //	位运算正负原理
		$A = 4; //第一位表示正负 0是正 1是负
		//			   源码：00000100
		$B = -4;
		//			   源码：10000100
		//源码取反(针对负数): 11111011  -->符号不变 其他取反
		//源码补码(针对负数): 11111100  --> 二进制+1 */
		
		
	/* //	位运算实际
		$A = 4; //已知结果为 00000100
		$B = -4;//已知结果为 11111100 (参考第40行)
		echo $A & $B; 
		//第一步把二进制拿出来
		//00000100  
		//11111100  第二步进行运算
		//00000100  第三步得出二进制结果最后因为echo所以转成十进制显示
		
		
		//(&全1得1其余0[值&值])(|全0得0其余1[值&值])
		(~取反[~值])(^相同则0不同则1[值^值])
		(<<>>左移和右移[值<<正整数]**负数补1整数补0) */
		
		
		/* $A = 4; //已知结果为 00000100
		$B = -4;//已知结果为 11111100 (参考第40行)
		echo $A | $B; 
		//第一步把二进制拿出来
		//00000100  
		//11111100  第二步进行运算
		//11111100  因为是负数 所以之前针对负数的操作要往返
		//反补码(-1)得 11111011
		//反码得       10000100 */ 
		
		
		/* $A = 4;	//其实可以理解为 4*(2^3)		
		echo $A<<3; //左移三位
		//$A已知结果为 00000100
		//左移		  00100000 结果 左移正补0 */
		
		
		/* $A = -4; //其实可以理解为 -4*(2^3)		
		echo $A<<3; //左移三位
		//$A已知结果为 11111100
		//左移		  11100000 结果 左移负补0 
		//因为是负数 所以之前针对负数的操作要往返
		//反补码(-1)得 11011111
		//反码得       10100000 */
		
		
		/* $A = -4; 
		echo $A>>3; //右移三位
		//$A已知结果为 11111100
		//左移		  11111111 结果 右移负补1 
		//因为是负数 所以之前针对负数的操作要往返
		//反补码(-1)得 11111110
		//反码得       10000001 结果为-1*/ 
		
		
		/* $A = 4; 
		echo $A>>3; //右移三位
		//$A已知结果为 00000100
		//右移		  00000000 结果 右移正补0 */
		
		
/* 		for($A=0;;$A++){
			
			if($A>=100){
				break;
			}
			
			if($A%5==0){
				echo $A,"<hr />";
			}
			
			if($A%5!==0){
				continue;
			}
			echo $A,"<hr />";
		} */
		
		
		/* $date=date_create("1980-10-15");	//	创建一个时间
		date_add($date,date_interval_create_from_date_string("1 days"));		//经过几天
		echo date_format($date,"Y-m-d");			//输出指定时间	
 */

	/* 	$date=date_create("2019-7-23");		//创建指定时间
		echo date_format($date,"w"); */		//查询指定时间
		
		
		/* $time = strtotime("July 24, 2019");	//将时间转为时间戳
		echo date("y-m-d",$time);//将指定时间通过时间戳显示 */
		
		
		/* @(include_once "./BiaoGe.PHP"); //文件加载
		//@()可以不显示错误,include_once 就算路径有问题也不会停止后面的代码加载
		require_once "./BiaoGe.PHP"; //同样是文件加载,但报错就不会加载后面的代码了! */
		
		
		/* //局部不死变量
		function fun(){
			static $A = 1;
			echo "函数".__FUNCTION__."现在是第".$A++."次~执行<br />";
		}
		fun();fun();fun(); */
		
		
		/* //闭包 函数不释放 可能是因为函数内的函数给放到了全局变量；
		function Afun(){ //创建常规函数
		//	定义变量name 返回函数名			
			$name = __FUNCTION__;
		//	定义一个匿名函数,use只是为了匿名函数能调用name变量;
			$Bfun = function() use($name){
				echo $name;	//匿名函数内容输出 名字~
			};
			$Bfun();		//运行匿名函数
			return $Bfun;	//将结果返回
		}
		$Cfun = Afun();		//这里将$Bfun返回 但是$name是Afun证明里面内容没有释放
		$Cfun();			//这里依然是运行Bfun,但还能读取Afun的name; */
		
		
		/* //有这个函数执行,没有就不执行~
		function element(){  
			echo __FUNCTION__;
			echo "??";
		}
		function_exists("element") && element();	 */
		
		
		include_once "DIY_Error.php";  //加载文件
		// include_once "index.html";  //加载文件

		
			/* // PHP的转义..
			$A = '[我是变量A]';
			echo "ABC\"\'DE{$A}FG"; //结果为ABC"\'DE[我是变量A]FGG 		""只能识别\"
			ECHO "<br />";			//""中,即使是串形式的变量也可以识别,''中不行;($A后面用空格分开，或者用{});
			echo 'ABC\'\"DE{$A}FG';	//结果为ABC'\"DE{$A}FG 				''只能识别\' */
			
			
			/* $A = "<script>alert('???');</script>"; //因为是输出到页面所以可以直接加载JS！
			echo $A; */
			
			
			/* function fun($string) { //将内容传入			//计算所有文字字符串-----------------
				preg_match_all("/./us", $string, $match);	//用正则表达式把所以内容一个一个提前到变量$match中
				return count($match[0]);					//将变量$match中的数值 统计数量返回
			}
			echo fun("所有字符5abc9"); */
			
			
			/* ===定义数组=== */
			/* $A = array("零","一","二","三");
			$B = ["零","一","二","三"];
			$A[0] = "我是\$A";
			$B[0] = "我是\$B";
			var_dump($A,"<BR />",$B); */
			
			
			/* $a = ["数值第零个","= =","哈哈哈"]; //数组循环-------------------
			for($i=0;$i<count($a);$i++){
				echo $i."__".$a[$i]."<br />";
			} */
			
			
			/* $A = ["数组下标" => "数组内容","下标1内容"]; //each手动遍历数组------------
			@(var_dump($A[each($A)["key"]]));		//php7.2后就不推荐了使用，还要@来消除错误
			@(var_dump($A[each($A)["key"]])); */
			
			
			/* $A = [4,3,4,2,1,84,15,31,5,36,7];
			echo "<pre>";
			function px($Arr){ 		//冒泡排序-------------------------------
				for($j = 0;$j < count($Arr);$j++){
					
					for($i = 0;$i < count($Arr) - 1 - $j;$i++){
						if($Arr[$i] > $Arr[$i + 1]){
							$Q = $Arr[$i + 1];
							$Arr[$i + 1] = $Arr[$i];
							$Arr[$i] = $Q;
						}
					}
				}
				return $Arr;
			}
			var_dump(px($A)); */
			
			
			/* $A = [4,3,4,2,1,84,15,31,5,36,7];
			echo "<pre>";
			function px($Arr){ 		//选择排序--------------------------
				for($i = 0;$i < count($Arr);$i++){ //先找最小的放第一位,然后再进行第二次345
					$x = $i;
					//找最小值,把它和第1位替换,然后就不管他,从第二位(i)开始找最小值,和第二位替换;
					for($j = $i + 1;$j < count($Arr);$j++){		//找最小值
						if($Arr[$x] > $Arr[$j]){
							$x = $j;
						}
					}
					if($x != $i){ //这是替换,然后最小值是他自己就不换了,浪费资源
						$Q = $Arr[$x];
						$Arr[$x] = $Arr[$i];
						$Arr[$i] = $Q;
					}
				}
				return $Arr;
			}
			var_dump(px($A)); */
			
			
			/* $A = [4,3,4,2,1,84,15,31,5,36,7];
			function DiGui_sort($Arr){ 		//分裂递归排序
				$length = count($Arr);		//先获取数组数量 省内存= =
				//递归出口	
				if($length <= 1) return $Arr;
				//递归结构
				$left = $right = array();	//先创建两空数组 防止报错
				for($i = 1;$i < $length;$i++){ //0给拿来当比较的中间值
					$Arr[0] < $Arr[$i] ? $right[] = $Arr[$i] : $left[] = $Arr[$i]; //比中间值大放右边,小则放左边!
				}
				//开始递归 把返回结果取出
				$left = DiGui_sort($left);
				$right = DiGui_sort($right);
				return array_merge($left,(array)$Arr[0],$right); //将结果返回
			}
			echo "<pre>";
			var_dump(DiGui_sort($A)); */
			
			
			/* 连接数据库 */
			$dbhost = 'localhost:3306';  //mysql服务器主机地址
			$dbuser = 'root';      //mysql用户名
			$dbpass = '597146348';//mysql用户名密码
			$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
			
			
			/* 输出数据库内容 */
			/* mysqli_select_db($conn, '实验用数据库' );
			//mysqli_query($conn,"use 实验用数据库");
			$sql = "select * from 学生表 order by ID";
			// $sql = "select * from 学生表 order by height";
			$select = mysqli_query($conn,$sql);
			echo "<pre>";
			echo "<table border='1' style='border:1px #6cf solid;width:50%;text-align:center;'>
				<tr>
					<td>ID</td>
					<td>姓名</td>
					<td>学号</td>
					<td>班级</td>
					<td>年龄</td>
					<td>身高</td>
					<td>性别</td>
				</tr>";
			while($row = mysqli_fetch_array($select, MYSQLI_ASSOC)){
				echo "<tr>
					<td>{$row["id"]}</td>
					<td>{$row["name"]}</td>
					<td>{$row["xuehao"]}</td>
					<td>{$row["banji"]}</td>
					<td>{$row["age"]}</td>
					<td>{$row["height"]}</td>
					<td>{$row["gender"]}</td>
				</tr>";
			}
			echo "</table>"; */

		// $name = "bilibiligb";
		// Session_name($name);
		// Session_start();
		// $_SESSION = array();
		// $_SESSION["name"] = "许嵩";
		
		// setcookie("cookie名字", "里面的内容", time()+36); 
		ECHO "<PRE>";
		echo md5("??????????????????????????????????????????????????????????????????????????????????????");
		echo md5(">>AD");
		var_dump($_COOKIE);  
		// var_dump($_SERVER);
		
		
		/* 	function S($t,$num,$t_array,$i = 1){
					if($t < $num) return $t_array[$num / ($num / $i ) - 1];
					return @S($t,$num += ($num / $i ),$t_array,++$i);
			}
			echo S(date("H"),6,array("夜深了~!","早上好~!","下午好~!","晚上好~!"));
			echo S(date("h"),1,array("整点了","1","2","3","4","5","6","7","8","9","10","11","12"));
			echo S(date("N"),1,array("星期一","星期二","星期三","星期四","星期五","星期六","星期日")); */
		
		

	?>
	<script>
	</script>
</body>
</html>