### C程序组织形式

```c
#include <stdio.h>
int main(void)
{
    int num;
    num = 1;

    printf("I am a simple ");
    printf("computer\n");
    printf("My favorite number is %d because it is first.\n", num);

    return 0;
}
```

#### #include指令与头文件
`#include`
    **C预处理器指令(preprocessor directive)**

`<stdio.h>`
    **标准输入/输出头文件(standard input output header)**

#### main函数
`int main(void){}`
    **`int`为函数的返回类型**
    **`main()`main为函数名, ()为识别函数**
    **`void`为不传入参数**
    **`{}`为函数体, 表明函数的开始与结束**

#### 注释
`//` `/**/`
    **被编译器忽略, 辅助阅读**

#### 声明
`int num;`
    **`int`**
        **为C语言中的一个关键字(keyword), 表示一种基本的C语言数据类型**
    **`num`**
        **为C语言中的一个标识符(identifier), 表示一个自定义实体名称**

#### 赋值