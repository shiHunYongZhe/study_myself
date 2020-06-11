/表达式/i  修正负，不区分将要匹配字符串的大小写
/表达式/r 把正则中的式子当作原始字符串
/表达式/u 表示按unicode(utf-8)匹配（主要针对多字节比如汉字），/u匹配{0,1}可以匹配一个汉字，不用/u{0,3}匹配一个汉字
/表达式/g  带这个标志表示替换将针对行中每个匹配的串进行，否则则只替换行中第一个匹配串。如：we.fdffddfwe.加上/g后，则2个we都会出来；
/表达式/m  多行模式 multi
/表达式/s  与/m相对，单行模式匹配。
/表达式/e  可执行模式，此为PHP专有参数，例如preg_replace函数。
/表达式/x  忽略空白模式。

正则匹配中文汉字根据页面编码不同而略有区别 
1.GBK/GB2312编码：[x80-xff]+ 或 [xa1-xff]+ 
2.UTF-8编码：[x{4e00}-x{9fa5}]+/u
- 长度为3-20的所有字符：^.{3,20}$
- 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
- 中文、英文、数字但不包括下划线等符号：^[\u4E00-\u9FA5A-Za-z0-9]+$
- 可以输入含有^%&',;=?$\"等字符：[^%&',;=?$\x22]+
- 禁止输入含有~的字符：[^~\x22]+
- 手机号码：^(13[0-9]|14[579]|15([0-3]|[5-9])|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$
- 身份证号(15位、18位数字)：^\d{15}|\d{17}(\d|[xX])$
- 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
- 日期格式：^\d{4}-\d{1,2}-\d{1,2}
- 一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$
- 一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$



用正则表达式限制只能输入中文：onkeyup="value=value.replace(/[^u4E00-u9FA5]/g,'') "onbeforepaste="clipboardData.setData(''text'',clipboardData.getData(''text'').replace(/[^u4E00-u9FA5]/g,''))" 


- 字符串replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。
```
$&：匹配的子字符串。
$`：匹配结果前面的文本。
$’：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$。
```
- 例子
```
'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
// "world hello"

'abc'.replace('b', '[$`-$&-$\']')
// "a[a-b-c]c"
```