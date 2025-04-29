---
title: Python
date: 2025-4-21
categories:
    - 计算机科学
    - 程序开发
    - 编程语言
tags:
    - 编程语言
---



# Python Web


## Django


### 环境部署

```shell
pip install django
```

### 创建项目

```shell
django-admin startproject MyProject
```

### 创建应用

```shell
python manage.py startapp Myapp
```

# 开发环境管理

## 虚拟环境



### venv

#### 创建环境

> `Python3.3`及以上版本内置的虚拟环境创建工具

```shell
python -m venv My_venv
```

#### 激活环境

```shell
source My_venv/Scripts/activate
```

### virtualenv