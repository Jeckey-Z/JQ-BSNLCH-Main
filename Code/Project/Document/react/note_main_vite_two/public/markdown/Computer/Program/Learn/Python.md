
# Python Web



## Django


###### 安装Django
```bash
pip install django
```

###### 创建项目
```bash
django-admin startproject MyProject
```

> **项目结构**

```plaintext
-- MyProject
	|-- asgi.py
	|-- settings.py
	|-- urls.py
	|-- wsgi.py
	|-- __init__.py
-- manage.py
```





###### 创建应用
```bash
python manage.py startapp myapp
```







# 开发环境管理

##### 虚拟环境

###### venv
> `Python 3.3`及以上版本内置的虚拟环境创建工具

* **创建虚拟环境**
```bash
python -m venv My_venv
```

`My_venv`：**虚拟环境的名称**


* **激活虚拟环境**
```bash
cd My_venv/Scripts

source activate
```




###### virtualenv







